import React from "react"
import { Link, useParams, useLocation } from "react-router"
import { getVans } from "../../mirage/api"
import { Van } from "../../types"

export default function VanDetail() {
  const [van, setVan] = React.useState<Van | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<Error | null>(null)
  const { id } = useParams<{ id: string }>()
  const location = useLocation()

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVans(id)
        if (Array.isArray(data)) {
          setVan(data[0] || null)
        } else {
          setVan(data)
        }
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err : new Error("An unknown error occurred.")
        )
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  }, [id])

  if (loading) {
    return (
      <div
        className="flex flex-col items-center justify-center space-y-4"
        aria-live="polite"
      >
        <p className="text-lg">Loading Van Detail...</p>
        <span
          className="loading loading-dots loading-xl"
          role="status"
          aria-live="polite"
        >
          Loading...
        </span>
      </div>
    )
  }

  if (error) {
    return (
      <h1 className="text-warning text-xl" aria-live="assertive">
        There was an error while fetching the van details. Please try again
        later.
      </h1>
    )
  }

  const { search = "", type = "all" } = location.state || {}

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to={`..${search}`}
        relative="path"
        className="text-primary font-semibold hover:text-primary-content flex items-center mb-8"
        aria-label={`Back to ${type} vans`}
      >
        &larr; <span className="ml-2">Back to {type} vans</span>
      </Link>

      {van ? (
        <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-x-12 lg:space-y-0">
          <div className="w-full lg:w-1/2 h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src={van.imageUrl}
              alt={`Image of ${van.name} van`}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col space-y-4 w-full lg:w-1/2">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-semibold text-primary">
                {van.name}
              </h2>
            </div>

            <div className="flex items-center justify-between mt-2">
              <span className="text-xl font-bold text-accent">
                ${van.price} / day
              </span>
              <div className="flex space-x-2">
                <span className="badge badge-outline">{van.type}</span>
              </div>
            </div>

            <p className="text-base-content text-lg mt-4">{van.description}</p>

            <button
              type="button"
              className="btn btn-accent mt-6 text-accent-content"
              aria-label="Rent this van"
            >
              Rent this van
            </button>
          </div>
        </div>
      ) : (
        <p>No van details available.</p>
      )}
    </div>
  )
}
