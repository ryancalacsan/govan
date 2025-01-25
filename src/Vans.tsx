import React from "react"
import { Link, useSearchParams } from "react-router"
import { getVans } from "./api"

interface Van {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
  type: string
  hostId: string
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [vans, setVans] = React.useState<Van[]>([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

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

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans

  const vanElements = displayedVans.map((van) => (
    <div className="card bg-base-100 w-96 shadow-sm grow">
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
  // <div key={van.id} className="van-tile">
  //   <Link
  //     to={van.id}
  //     state={{
  //       search: `?${searchParams.toString()}`,
  //       type: typeFilter,
  //     }}
  //   >
  //     <img src={van.imageUrl} />
  //     <div className="van-info">
  //       <h3>{van.name}</h3>
  //       <p>
  //         ${van.price}
  //         <span>/day</span>
  //       </p>
  //     </div>
  //     <i className={`van-type ${van.type} selected`}>{van.type}</i>
  //   </Link>
  // </div>

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
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type simple 
                        ${typeFilter === "simple" ? "selected" : ""}`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-type luxury 
                        ${typeFilter === "luxury" ? "selected" : ""}`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-type rugged 
                        ${typeFilter === "rugged" ? "selected" : ""}`}
        >
          Rugged
        </button>

        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="van-type clear-filters"
          >
            Clear filter
          </button>
        ) : null}
      </div>
      <div className="van-list flex flex-wrap gap-8 mt-10 justify-items-center">
        {vanElements}
      </div>
    </div>
  )
}
