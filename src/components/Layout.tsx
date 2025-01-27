import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-col grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
