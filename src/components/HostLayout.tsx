import React from "react"
import { NavLink, Outlet } from "react-router"

export default function HostLayout() {
  return (
    <>
      <nav>
        <ul className="menu menu-horizontal bg-base-200">
          <li>
            <NavLink
              to="."
              end
              className={({ isActive }) => (isActive ? "menu-active" : "")}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="income"
              className={({ isActive }) => (isActive ? "menu-active" : "")}
            >
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              to="vans"
              className={({ isActive }) => (isActive ? "menu-active" : "")}
            >
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              className={({ isActive }) => (isActive ? "menu-active" : "")}
            >
              Reviews{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
