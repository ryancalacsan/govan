import React from "react"
import { Link, useParams, useLocation } from "react-router"
import { getVans } from "../../mirage/api"
import { Van } from "../../types"

export default function VanDetail() {
  const [van, setVan] = React.useState<Van | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const { id } = useParams<{ id: string }>()
  const location = useLocation()

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVans(id)
        setVan(data[0] || null)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("An unknown error occurred.")
        }
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  }, [id])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-lg">Loading Van Detail...</p>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    )
  }

  if (error) {
    return <h1 className="text-red-500 text-xl">There was an error: {error}</h1>
  }

  const search = location.state?.search || ""
  const type = location.state?.type || "all"

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to={`..${search}`}
        relative="path"
        className="text-primary font-semibold hover:text-primary-content flex items-center mb-8"
      >
        &larr; <span className="ml-2">Back to {type} vans</span>
      </Link>

      {van && (
        <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-x-12 lg:space-y-0">
          {/* Van Image Section */}
          <div className="w-full lg:w-1/2 h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src={van.imageUrl}
              alt={van.name}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Van Details Section */}
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

            {/* Rent Button */}
            <button className="btn btn-accent mt-6 text-accent-content">
              Rent this van
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
