import { RxAvatar } from "react-icons/rx"
import { Link } from "react-router"

export default function Header() {
  return (
    <nav className="navbar bg-base-100 shadow-sm">
      {/* Navbar start section */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Button to open the menu */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden"
            aria-label="Open menu"
            aria-expanded="false" // This should dynamically change based on dropdown state
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Dropdown menu items */}
          <ul
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            role="menu" // Added for clarity
          >
            <li>
              <Link className="text-lg" to="host" aria-label="Go to Host page">
                Host
              </Link>
            </li>
            <li>
              <Link
                className="text-lg"
                to="about"
                aria-label="Go to About page"
              >
                About
              </Link>
            </li>
            <li>
              <Link className="text-lg" to="vans" aria-label="Go to Vans page">
                Vans
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo Link */}
        <Link
          to="/"
          className="btn btn-ghost text-xl"
          aria-label="Go to homepage"
        >
          GoVan
        </Link>
      </div>

      {/* Centered menu for larger screens */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="host" aria-label="Go to Host page">
              Host
            </Link>
          </li>
          <li>
            <Link to="about" aria-label="Go to About page">
              About
            </Link>
          </li>
          <li>
            <Link to="vans" aria-label="Go to Vans page">
              Vans
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar end section (Login avatar icon) */}
      <div className="navbar-end">
        <Link to="login" className="btn" aria-label="Go to Login page">
          <div
            className="tooltip tooltip-left"
            data-tip="log in"
            aria-describedby="login-tooltip"
          >
            <RxAvatar className="text-xl" />
          </div>
        </Link>
      </div>
    </nav>
  )
}
