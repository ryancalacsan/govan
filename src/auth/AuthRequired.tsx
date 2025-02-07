import { Outlet, Navigate, useLocation } from "react-router"
import { useAuth } from "../context/AuthContext"

export default function AuthRequired() {
  const location = useLocation()
  const { user, loading } = useAuth()
  if (loading) {
    return <div>Loading...</div>
  }
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You must log in first", from: location.pathname }}
        replace
      />
    )
  }
  return <Outlet />
}
