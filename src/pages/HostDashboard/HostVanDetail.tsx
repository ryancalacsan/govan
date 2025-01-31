import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router"
import { getVan } from "../../lib/api/api"
import { Van } from "../../types/types"

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = React.useState<Van | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<Error | null>(null)

  const { id } = useParams<{ id: string | undefined }>()

  React.useEffect(() => {
    async function loadVan() {
      if (!id) {
        setError(new Error("Van ID is required"))
        setLoading(false)
        return
      }

      setLoading(true)
      try {
        const data = await getVan(id)
        setCurrentVan(data)
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
    loadVan()
  }, [id])

  if (loading) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex justify-center items-center h-screen"
      >
        <span className="text-2xl text-gray-600">Loading...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div
        role="alert"
        aria-live="assertive"
        className="flex justify-center items-center h-screen"
      >
        <span className="text-2xl text-warning">
          There was an error: {error.message}
        </span>
      </div>
    )
  }

  return (
    <section className="container mx-auto px-6 py-12">
      <Link
        to=".."
        relative="path"
        className="text-sm text-primary hover:underline mb-4 inline-flex items-center"
      >
        &larr; <span className="ml-1">Back to all vans</span>
      </Link>

      {currentVan && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Van Image & Info */}
          <div className="bg-base- shadow-lg rounded-lg overflow-hidden col-span-1">
            <img
              src={currentVan.imageUrl}
              alt={currentVan.name}
              className="w-full h-72 object-cover object-[0%_75%]"
            />
            <div className="p-6">
              <div className="badge badge-outline">{currentVan.type}</div>
              <h3 className="text-3xl font-semibold text-base-content">
                {currentVan.name}
              </h3>
              <h4 className="text-xl text-base-content">
                ${currentVan.price}/day
              </h4>
            </div>
          </div>

          {/* Nav Links and Content */}
          <div className="col-span-2">
            <div className="mb-8">
              <nav className="flex space-x-6">
                <NavLink
                  to="."
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "text-base-content font-semibold border-b-2 border-base-content"
                      : "text-gray-600 hover:text-base-content"
                  }
                  aria-label="View details of the van"
                >
                  Details
                </NavLink>
                <NavLink
                  to="pricing"
                  className={({ isActive }) =>
                    isActive
                      ? "text-base-content font-semibold border-b-2 border-base-content"
                      : "text-gray-600 hover:text-base-content"
                  }
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="photos"
                  className={({ isActive }) =>
                    isActive
                      ? "text-base-content font-semibold border-b-2 border-base-content"
                      : "text-gray-600 hover:text-base-content"
                  }
                >
                  Photos
                </NavLink>
              </nav>
            </div>

            {/* Render content dynamically based on nav link */}
            <div className="mt-4">
              <Outlet context={{ currentVan }} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
