import React from "react"
import { Link } from "react-router"
import { getHostVans } from "../../database/api"
import { Van } from "../../types"

export default function HostVans() {
  const [vans, setVans] = React.useState<Van[]>([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<Error | null>(null)

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getHostVans()
        setVans(data)
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

  // Render Loading state with better accessibility
  if (loading) {
    return (
      <div
        className="flex flex-col items-center justify-center mx-auto"
        aria-live="polite"
      >
        <p>Fetching your listed vans...</p>
        <span
          className="loading loading-dots loading-xl"
          aria-label="Loading vans"
        ></span>
      </div>
    )
  }

  // Render error state
  if (error) {
    return (
      <div role="alert">
        <p>Error: {error.message}</p>
      </div>
    )
  }

  // Function to map over vans and render them
  const renderHostVans = (vans: Van[]) => {
    return vans.map((van: Van) => (
      <div
        key={van.id}
        className="card card-side bg-base-200 shadow-sm max-w-xl p-4 rounded-lg m-2 mx-auto"
      >
        <figure>
          <img
            src={van.imageUrl}
            alt={`Image of a ${van.name} van`} // More descriptive alt text
            className="object-cover h-24 w-24 rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{van.name}</h2>
          <p>${van.price} / day</p>
          <div className="card-actions justify-end">
            <Link
              to={van.id}
              className="btn btn-primary"
              aria-label={`View details for ${van.name}`}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <section>
      <h1 className="font-bold text-2xl text-center text-accent">
        Your listed vans
      </h1>
      <div className="host-vans-list mt-4">
        {vans.length > 0 ? (
          renderHostVans(vans)
        ) : (
          <p>No vans available at this time.</p>
        )}
      </div>
    </section>
  )
}
