import React from "react"
import { useLocation, useNavigate } from "react-router"
import { loginUser } from "../mirage/api"
// types
import { LoginFormData } from "../types"

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState<LoginFormData>({
    email: "",
    password: "",
  })
  const [status, setStatus] = React.useState("idle")
  const [error, setError] = React.useState(null)

  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from || "/host"

  function handleSubmit(e) {
    e.preventDefault()
    setStatus("submitting")
    loginUser(loginFormData)
      .then((data) => {
        setError(null)
        localStorage.setItem("loggedin", true)
        navigate(from, { replace: true })
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setStatus("idle")
      })
  }

  function handleChange(e) {
    const { name, value } = e.target
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="login-container flex flex-col items-center gap-6">
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
      {error?.message && <h3 className="login-error">{error.message}</h3>}
      <h1 className="font-bold text-2xl mt-4">Host Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
          <legend className="fieldset-legend">Sign in to your account</legend>

          <label className="fieldset-label">Email</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            className="input"
            placeholder="Email"
            value={loginFormData.email}
          />

          <label className="fieldset-label">Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            className="input"
            placeholder="Password"
            value={loginFormData.password}
          />

          <button
            disabled={status === "submitting"}
            className="btn btn-neutral mt-4"
          >
            {status === "submitting" ? "Logging in..." : "Log in"}
          </button>
        </fieldset>
      </form>
      <div className="text-center">
        <p className="text-info">Demo Host Account</p>
        <p>email: guest@host.com</p>
        <p>password: p123</p>
      </div>
    </div>
  )
}
