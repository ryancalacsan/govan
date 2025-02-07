import { useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { useAuth } from "../context/AuthContext"

export default function Login() {
  const { login, loading, error } = useAuth()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(email, password)
      navigate("/host")
    } catch (err: any) {
      console.error(err)
    }
  }

  const handleDemoLogin = () => {
    setEmail("guest@host.com")
    setPassword("p12345")
  }

  return (
    <div className="login-container flex flex-col items-center gap-6">
      {/* Display message passed in location state */}
      {location.state?.message && (
        <div role="alert" className="alert alert-error w-80">
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
          <span>{location.state.message}</span>
        </div>
      )}
      {/* Display error message if exists */}
      {error && (
        <h3
          className="login-error text-error"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </h3>
      )}
      <h1 className="font-bold text-2xl mt-4">Host Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
          <legend className="fieldset-legend ">Sign in to your account</legend>
          {/* Email Input */}
          <label className="fieldset-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="Email"
            value={email}
            aria-required="true"
            required
          />
          {/* Password Input */}
          <label className="fieldset-label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            value={password}
            aria-required="true"
            required
          />
          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-neutral mt-4"
            aria-disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>

          <button
            onClick={handleDemoLogin}
            className="text-accent hover:underline"
          >
            demo as a guest
          </button>
        </fieldset>
      </form>
    </div>
  )
}
