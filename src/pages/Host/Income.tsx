import { LineChart } from "../../components/LineChart"
import { getHostIncome } from "../../mirage/api"
import { useEffect, useState } from "react"

export default function Income() {
  const [hostIncome, setHostIncome] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadIncome() {
      setLoading(true)
      try {
        const data = await getHostIncome()
        setHostIncome(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadIncome()
  }, [])

  return (
    <>
      <h1>Income</h1>
      <LineChart userData={hostIncome} />
    </>
  )
}
