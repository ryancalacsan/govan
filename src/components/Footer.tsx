import { FaVanShuttle } from "react-icons/fa6"
import { CgWebsite } from "react-icons/cg"
import { FaGithub, FaCode } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <div className="text-3xl">
          <FaVanShuttle />
        </div>
        <p>Copyright © {new Date().getFullYear()} - Coded by Ryan Calacsan</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {/* Github Repo Link */}
        <div className="tooltip tooltip-left" data-tip="Github repo">
          <a
            href="https://github.com/ryancalacsan"
            target="_blank"
            rel="noopener noreferrer" // Prevent reverse tab navigation for external links
            aria-label="Visit my GitHub repository"
          >
            <FaCode className="text-2xl" />
          </a>
        </div>

        {/* GitHub Profile Link */}
        <div className="tooltip tooltip-left" data-tip="My Github">
          <a
            href="https://github.com/ryancalacsan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>

        {/* Website Link */}
        <div className="tooltip tooltip-left" data-tip="My Website">
          <a
            href="https://ryancalacsan.com" // Assuming this is the correct link to your website
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my personal website"
          >
            <CgWebsite className="text-2xl" />
          </a>
        </div>
      </nav>
    </footer>
  )
}
