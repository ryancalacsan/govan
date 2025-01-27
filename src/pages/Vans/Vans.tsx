import React, { useEffect } from "react"
import { Link, useSearchParams } from "react-router"
import { getVans } from "../../mirage/api"
import { Van } from "../../types"

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [vans, setVans] = React.useState<Van[]>([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [maxPrice, setMaxPrice] = React.useState<number>(120)

  const typeFilter = searchParams.get("type")

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVans()
        setVans(data)
      } catch (err) {
        setError(err)
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

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="card bg-base-100 w-96 shadow-sm grow">
      <Link
        to={van.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter,
        }}
      >
        <figure>
          <img
            src={van.imageUrl}
            alt={van.name}
            className="h-90 w-90 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {van.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{van.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{van.type}</div>
            <div className="badge badge-outline">${van.price} / day</div>
          </div>
        </div>
      </Link>
    </div>
  ))

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

  function handlePriceChange(e) {
    setMaxPrice(e.target.value)
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
    <div className="van-list-container flex flex-col">
      <h1>Explore our van options</h1>
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

      <div className="w-full max-w-xs">
        <input
          onChange={handlePriceChange}
          type="range"
          min="60"
          max="120"
          step={20}
          className="range"
          value={maxPrice}
        />
        <div className="flex justify-between px-2.5 mt-2 text-xs">
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
        <div className="flex justify-between px-2.5 mt-2 text-xs">
          <span>60</span>
          <span>80</span>
          <span>100</span>
          <span>120</span>
        </div>
      </div>
      <div className="van-list flex flex-wrap gap-8 mt-10 justify-items-center">
        {vanElements}
      </div>
    </div>
  )
}
