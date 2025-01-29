import { NavLink, Outlet, useNavigate } from "react-router"

export default function HostLayout() {
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem("loggedin")
    navigate("/login")
  }

  return (
    <div>
      <div
        role="alert"
        aria-live="polite"
        className="alert alert-vertical sm:alert-horizontal mb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-6 w-6 shrink-0"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>Logged in as Guest</span>
        <div>
          <button
            onClick={handleLogout}
            className="btn btn-sm"
            aria-label="Log out from Guest account"
          >
            Log out
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex justify-between items-center">
        <ul className="menu menu-horizontal bg-base-200 flex justify-center mx-auto">
          <li>
            <NavLink
              to="."
              end
              className={({ isActive }) => (isActive ? "menu-active" : "")}
              aria-label="Go to Dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="income"
              className={({ isActive }) => (isActive ? "menu-active" : "")}
              aria-label="Go to Income page"
            >
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              to="vans"
              className={({ isActive }) => (isActive ? "menu-active" : "")}
              aria-label="Go to Vans page"
            >
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              className={({ isActive }) => (isActive ? "menu-active" : "")}
              aria-label="Go to Reviews page"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Outlet */}
      <Outlet />
    </div>
  )
}
