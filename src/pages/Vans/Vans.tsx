import React, { useEffect } from "react"
import { Link, useSearchParams } from "react-router"
import { getVans } from "../../mirage/api"
import { Van } from "../../types"

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [vans, setVans] = React.useState<Van[]>([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<Error | null>(null)
  const [maxPrice, setMaxPrice] = React.useState<number>(200)

  const typeFilter = searchParams.get("type")

  const PRICE_RANGES = [50, 100, 150, 200]

  React.useEffect(() => {
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

  const displayedVans = vans.filter((van) => {
    const matchesType = typeFilter ? van.type === typeFilter : true
    const matchesPrice = maxPrice ? van.price <= maxPrice : true
    return matchesType && matchesPrice
  })

  const VanCard = ({ van }: { van: Van }) => (
    <div key={van.id} className="card bg-base-100 w-96 max-w-xl shadow-sm grow">
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <figure>
          <img
            src={van.imageUrl}
            alt={`Image of ${van.name} van`}
            className="h-90 w-90 object-cover rounded-lg"
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
    setMaxPrice(Number(e.target.value))
  }
  useEffect(() => {
    handleFilterChange("maxPrice", maxPrice)
  }, [maxPrice])

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
    <div className="van-list-container flex flex-col py-8 px-4 text-center">
      <h1 className="text-4xl font-bold text-primary mx-auto mb-4">
        Explore our van options
      </h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-full items-center gap-4">
          {/* Type Filter */}
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
          {/* Price Filter */}
          <fieldset className="w-full max-w-xs">
            <legend className="sr-only">Price filter options</legend>
            <label htmlFor="maxPriceInput" className="">
              Max Price: ${maxPrice}
            </label>
            <input
              id="maxPriceInput"
              onChange={handlePriceChange}
              type="range"
              min={50}
              max={200}
              className="range"
              value={maxPrice}
              aria-valuenow={maxPrice}
              aria-valuemin={50}
              aria-valuemax={200}
              aria-label="Select maximum price range"
            />
            <div className="flex justify-between px-2.5 mt-2 text-xs">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
            <div className="flex justify-between px-2.5 mt-2 text-xs">
              {PRICE_RANGES.map((price) => (
                <span key={price}>{price}</span>
              ))}
            </div>
          </fieldset>
        </div>
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
