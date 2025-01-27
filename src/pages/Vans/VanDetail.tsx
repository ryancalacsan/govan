import React from "react"
import { Link, useParams, useLocation } from "react-router"
import { getVans } from "../../mirage/api"

interface Van {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
  type: string
  hostId: string
}

export default function VanDetail() {
  const [van, setVan] = React.useState<Van | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const { id } = useParams()
  const location = useLocation()

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVans(id)
        setVan(data)
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
      <div className="flex flex-col items-center justify-center mx-auto">
        <p>Loading Van Detail</p>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    )
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  const search = location.state?.search || ""
  const type = location.state?.type || "all"

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>

      {van && (
        <div className="van-detail flex flex-col">
          <img
            src={van.imageUrl}
            className="h-96 object-cover object-[50%_75%]"
          />
          <div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{van.type}</div>
              <div className="badge badge-outline">${van.price} / day</div>
            </div>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
          </div>
        </div>
      )}
    </div>
  )
}
