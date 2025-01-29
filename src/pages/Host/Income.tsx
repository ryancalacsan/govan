import { LineChart } from "../../components/LineChart"
import { getHostIncome } from "../../mirage/api"
import { useEffect, useState } from "react"

export default function Income() {
  const [hostIncome, setHostIncome] = useState<number[] | null>(null)
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

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center mx-auto">
        <p>Loading Income Chart</p>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    )
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }
  return (
    <div className="p-4">
      <h1>Income</h1>
      <LineChart userData={hostIncome} />
    </div>
  )
}
