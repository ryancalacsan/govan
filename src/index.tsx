import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Routes, Route, BrowserRouter } from "react-router"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import HostLayout from "./layouts/HostLayout"
import Dashboard from "./pages/HostDashboard/Dashboard"
import Income from "./pages/HostDashboard/Income"
import Reviews from "./pages/HostDashboard/Reviews"
import HostVans from "./pages/HostDashboard/HostVans"
import HostVanDetail from "./pages/HostDashboard/HostVanDetail"
import HostVanInfo from "./pages/HostDashboard/HostVaninfo"
import HostVanPricing from "./pages/HostDashboard/HostVanPricing"
import HostVanPhotos from "./pages/HostDashboard/HostVanPhotos"
import Login from "./pages/Login"
import AuthRequired from "./auth/AuthRequired"
import NotFound from "./pages/NotFound"

import "./index.css"
import "./lib/api/server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />
          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
