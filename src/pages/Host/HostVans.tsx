import React from "react"
import { Link } from "react-router"
import { getHostVans } from "../../mirage/api"
import { Van } from "../../types"

export default function HostVans() {
  const [vans, setVans] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getHostVans()
        setVans(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  }, [])

  const hostVansEls = vans.map((van: Van) => (
    <div
      key={van.id}
      className="card card-side bg-base-200 shadow-sm max-w-xl p-4 rounded-lg m-2 mx-auto"
    >
      <figure>
        <img
          src={van.imageUrl}
          alt="van"
          className="object-cover h-24 w-24 rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{van.name}</h2>
        <p>${van.price} / day</p>
        <div className="card-actions justify-end">
          <Link to={van.id} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  ))

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  return (
    <section>
      <h1 className="font-bold text-xl text-center">Your listed vans</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? (
          <section>{hostVansEls}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  )
}
