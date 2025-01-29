import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <header role="banner">
        <Header />
      </header>

      <main
        className="flex flex-col grow"
        role="main"
        aria-label="Main content"
      >
        <Outlet />
      </main>

      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  )
}
