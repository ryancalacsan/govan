import React from "react"
import { Link } from "react-router"
import { getHostVans } from "../../lib/api/api"
import { Van } from "../../types/types"
import { CiStar, CiDollar, CiCalendar } from "react-icons/ci"

export default function Dashboard() {
  const [vans, setVans] = React.useState<Van[]>([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<Error | null>(null)
  React.useEffect(() => {
    setLoading(true)
    getHostVans()
      .then((data) => setVans(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  function renderVanElements(vans: Van[]) {
    const hostVansEls = vans.slice(0, 3).map((van) => (
      <div
        key={van.id}
        className="card card-side bg-base-200 shadow-sm max-w-xl p-4 rounded-lg m-2 mx-auto"
      >
        <figure>
          <img
            src={van.imageUrl}
            alt={`Image of ${van.name}`}
            className="object-cover h-24 w-24 rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{van.name}</h2>
          <p>${van.price} / day</p>
          <div className="card-actions justify-end">
            <Link to={`vans/${van.id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    ))

    return (
      <div className="host-vans-list flex flex-col w-full">
        <section>{hostVansEls}</section>
      </div>
    )
  }

  if (loading) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center justify-center mx-auto"
      >
        <p>Loading Your Vans...</p>
        <span
          className="loading loading-dots loading-xl"
          aria-hidden="true"
        ></span>
      </div>
    )
  }

  if (error) {
    return (
      <div role="alert" className="text-warning p-4">
        <h1>An error occurred: {error.message}</h1>
        <p>Try refreshing the page or contact support if the issue persists.</p>
      </div>
    )
  }

  return (
    <>
      <h1 className="text-center text-accent text-xl font-bold mt-2">
        Your Dashbaord
      </h1>
      <section className="mx-auto flex justify-center w-full max-w-3xl">
        <div className="stats stats-vertical sm:stats-horizontal grow w-full max-sm:max-w-md ">
          <Link to="income">
            <figure className="stat">
              <div className="stat-figure text-secondary">
                <CiDollar size="2em" />
              </div>
              <figcaption>
                <div className="stat-title">Income</div>
                <div className="stat-value">$2,260</div>
                <div className="stat-desc">last 30 Days</div>
              </figcaption>
            </figure>
          </Link>
          <Link to="reviews">
            <figure className="stat">
              <div className="stat-figure text-secondary">
                <CiStar size="2em" />
              </div>
              <figcaption>
                <div className="stat-title">Review Score</div>
                <div className="stat-value">5.0</div>
                <div className="stat-desc">out of 5.0</div>
              </figcaption>
            </figure>
          </Link>

          <figure className="stat">
            <div className="stat-figure text-secondary">
              <CiCalendar size="2em" />
            </div>
            <figcaption>
              <div className="stat-title">Avg Rental Time</div>
              <div className="stat-value">3 Days</div>
              <div className="stat-desc">↘︎ 1 (25%)</div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="host-dashboard-vans mx-auto w-full flex flex-col justify-center items-center">
        <div className="top">
          <h2 className="font-bold text-xl mb-2">Your listed vans</h2>
        </div>
        {loading && !vans ? (
          <h1>Loading...</h1>
        ) : (
          <>{renderVanElements(vans)}</>
        )}
        <Link to="vans" className=" text-accent hover:underline">
          View all listed vans
        </Link>
      </section>
    </>
  )
}
