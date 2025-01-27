import React from "react"
import { Link } from "react-router"
import { getHostVans } from "../../mirage/api"
import { Van } from "../../types"
import { CiStar, CiDollar, CiCalendar } from "react-icons/ci"

export default function Dashboard() {
  const [vans, setVans] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  React.useEffect(() => {
    setLoading(true)
    getHostVans()
      .then((data) => setVans(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  function renderVanElements(vans: Van[]) {
    const hostVansEls = vans.map((van) => (
      <div
        key={van.id}
        className="card card-side bg-base-200 shadow-sm max-w-md p-4 rounded-lg m-2"
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
            <Link to={`vans/${van.id}`} className="btn btn-primary">
              View
            </Link>
          </div>
        </div>
      </div>
    ))

    return (
      <div className="host-vans-list">
        <section>{hostVansEls}</section>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center mx-auto">
        <p>Loading Your Vans</p>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    )
  }

  if (error) {
    return <h1>Error: {error.message}</h1>
  }

  return (
    <>
      <section className="host-dashboard-earnings flex justify-between items-center bg-primary p-6">
        <div className="info ">
          <h1>Welcome!</h1>
        </div>
      </section>
      <section className="mx-auto">
        <div className="stats stats-vertical sm:stats-horizontal shadow ">
          <Link to="income">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <CiDollar size="2em" />
              </div>
              <div className="stat-title">Income</div>
              <div className="stat-value">$2,260</div>
              <div className="stat-desc">last 30 Days</div>
            </div>
          </Link>
          <Link to="reviews">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <CiStar size="2em" />
              </div>
              <div className="stat-title">Review Score</div>
              <div className="stat-value">5.0</div>
              <div className="stat-desc">out of 5.0</div>
            </div>
          </Link>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <CiCalendar size="2em" />
            </div>
            <div className="stat-title">Avg Rental Time</div>
            <div className="stat-value">3 Days</div>
            <div className="stat-desc">↘︎ 1 (25%)</div>
          </div>
        </div>
      </section>

      <section className="host-dashboard-vans p-6">
        <div className="top">
          <h2>Your listed vans</h2>
        </div>
        {loading && !vans ? (
          <h1>Loading...</h1>
        ) : (
          <>{renderVanElements(vans)}</>
        )}
        {/*<React.Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={loaderData.vans}>{renderVanElements}</Await>
                    </React.Suspense>*/}
        <Link to="vans">View all</Link>
      </section>
    </>
  )
}
