import { Link } from "react-router"

export default function Home() {
  return (
    <main
      className="hero grow bg-bottom"
      style={{
        backgroundImage: "url(hero-van.jpg)",
      }}
      aria-labelledby="hero-heading"
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 id="hero-heading" className="mb-5 text-5xl font-bold">
            GoVan
          </h1>
          <p className="mb-5">
            Rent a Van. Share Your Van. Easy, Safe, and Affordable.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="vans"
              className="btn btn-primary"
              role="button"
              aria-label="Find a van to rent"
            >
              Find a Van
            </Link>
            <Link
              to="host"
              className="btn btn-primary"
              role="button"
              aria-label="Host your own van"
            >
              Host Your Van
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
