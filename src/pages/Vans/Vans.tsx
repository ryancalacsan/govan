import React, { useEffect } from "react"
import { Link, useSearchParams } from "react-router"
import { getVans } from "../../lib/api/api"
import { Van } from "../../types/types"
import { FaFilter } from "react-icons/fa"

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [vans, setVans] = React.useState<Van[]>([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<Error | null>(null)

  const typeFilter = searchParams.get("type")
  const priceFilter = searchParams.get("maxPrice")
  const seatFilter = searchParams.get("minSeats")
  const sortOrder = searchParams.get("sortOrder")

  useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVans()
        if (Array.isArray(data)) {
          setVans(data)
        } else {
          setVans([data])
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err)
        } else {
          setError(new Error("An unknown error occurred."))
        }
      } finally {
        setLoading(false)
      }
    }

    loadVans()
  }, [])

  const displayedVans = vans
    .filter((van) => {
      const matchesType = typeFilter ? van.type === typeFilter : true
      const matchesPrice = priceFilter ? van.price <= Number(priceFilter) : true
      const matchesSeats = seatFilter ? van.seats >= Number(seatFilter) : true
      return matchesType && matchesPrice && matchesSeats
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price
      } else {
        return b.price - a.price
      }
    })

  const VanCard = ({ van }: { van: Van }) => (
    <div
      key={van.id}
      className="card bg-base-100 w-96 max-w-xl shadow-sm grow border border-solid border-accent-content hover:bg-base-200"
    >
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <figure>
          <img
            src={van.imageUrl}
            alt={`Image of ${van.name} van`}
            className="h-90 w-90 object-cover rounded-lg mt-9"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {van.name}
            {van.new && <div className="badge badge-secondary">NEW</div>}
          </h2>
          <p className="line-clamp-2">{van.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{van.type}</div>
            <div className="badge badge-outline">${van.price} / day</div>
            <div className="badge badge-outline">{van.seats} seats</div>
          </div>
        </div>
      </Link>
    </div>
  )

  function handleFilterChange(key: string, value: any) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  function handlePriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    handleFilterChange("maxPrice", value)
  }

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value
    handleFilterChange("sortOrder", value)
  }

  function handleSeatChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value
    handleFilterChange("minSeats", value)
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center mx-auto">
        <p>Loading Vans</p>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    )
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  return (
    <div className="van-list-container flex flex-col py-8 px-4">
      <h1 className="text-4xl font-bold text-primary mx-auto mb-4">
        Explore our van options
      </h1>
      <button
        className="btn text-accent w-auto mx-auto"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_1"
          ) as HTMLDialogElement
          modal?.showModal()
        }}
      >
        <FaFilter />
        All Filters
      </button>
      {/* Filter Modal */}
      <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Filters</h3>
          {/* Sorting */}
          <div className="filters-container flex flex-col gap-3 w-full">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sort by Price</legend>
              <select
                className="sort-options select w-full"
                name="priceSort"
                id="priceSort"
                value={sortOrder || ""}
                onChange={handleSortChange}
              >
                <option value="" disabled={true}>
                  Price Options
                </option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </fieldset>
            <div>
              <p>Type</p>
              <form className="filter">
                <input
                  onClick={() => handleFilterChange("type", "simple")}
                  className="btn"
                  type="radio"
                  name="van-type"
                  aria-label="Simple"
                />
                <input
                  onClick={() => handleFilterChange("type", "luxury")}
                  className="btn"
                  type="radio"
                  name="van-type"
                  aria-label="Luxury"
                />
                <input
                  onClick={() => handleFilterChange("type", "rugged")}
                  className="btn"
                  type="radio"
                  name="van-type"
                  aria-label="Rugged"
                />
                <input
                  onClick={() => handleFilterChange("type", null)}
                  className="btn btn-square"
                  type="reset"
                  value="×"
                />
              </form>
            </div>
            <div>
              <fieldset className="w-full">
                <legend className="sr-only">Price filter options</legend>
                <label htmlFor="maxPriceInput" className="">
                  Max Price: ${priceFilter || 200}
                </label>
                <input
                  id="maxPriceInput"
                  onChange={handlePriceChange}
                  type="range"
                  min={100}
                  max={200}
                  step={5}
                  className="range w-full"
                  value={Number(priceFilter || 200)}
                  aria-valuenow={Number(priceFilter || 200)}
                  aria-valuemin={100}
                  aria-valuemax={200}
                  aria-label="Select maximum price range"
                />
              </fieldset>
            </div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Min number of Seats</legend>
              <select
                className="sort-options select w-full"
                name="seatSelect"
                id="seatSelect"
                value={seatFilter || 6}
                onChange={handleSeatChange}
              >
                <option value={6}>6 seats or more</option>
                <option value={7}>7 seats or more</option>
                <option value={8}>8 seats or more</option>
                <option value={9}>9 seats or more</option>
                <option value={10}>10 seats or more</option>
              </select>
            </fieldset>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-full items-center gap-4"></div>
      </div>
      {/* Van Elements */}
      <div className="van-list flex flex-wrap gap-8 mt-10 justify-center items-center">
        {displayedVans.map((van) => (
          <VanCard key={van.id} van={van} />
        ))}
      </div>
    </div>
  )
}
