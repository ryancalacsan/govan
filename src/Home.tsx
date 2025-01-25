import { Link } from "react-router"

export default function Home() {
  return (
    <div
      className="hero grow"
      style={{
        backgroundImage: "url(hero-van.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">GoVan</h1>
          <p className="mb-5">
            Rent a Van. Share Your Van. Easy, Safe, and Affordable.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="vans" className="btn btn-primary">
              Find a Van
            </Link>
            <Link to="host" className="btn btn-primary">
              Host Your Van
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
