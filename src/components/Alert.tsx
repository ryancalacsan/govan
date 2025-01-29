import { useState, useEffect } from "react"

export default function Alert({ children }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const alertDismissed = sessionStorage.getItem("dashboardAlertDismissed")
    if (alertDismissed) {
      setIsVisible(false)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem("dashboardAlertDismissed", "true")
  }

  return (
    isVisible && (
      <div role="alert" className="alert alert-success" onClick={handleDismiss}>
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{children}</span>
        <span>X</span>
      </div>
    )
  )
}
