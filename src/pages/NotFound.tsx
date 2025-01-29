import { Link } from "react-router"

export default function NotFound() {
  return (
    <div className="not-found-container flex flex-col items-center">
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Sorry, the page you were looking for was not found.</span>
      </div>
      <Link to="/" className="btn btn-success m-8">
        Return Home
      </Link>
    </div>
  )
}
