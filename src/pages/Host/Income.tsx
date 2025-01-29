import { LineChart } from "../../components/LineChart"
import { getHostIncome } from "../../mirage/api"
import { useEffect, useState } from "react"

export default function Income() {
  const [hostIncome, setHostIncome] = useState<number[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function loadIncome() {
      setLoading(true)
      try {
        const data = await getHostIncome()
        setHostIncome(data)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err)
        } else {
          setError(new Error("An unknown error occurred"))
        }
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
      {hostIncome ? (
        <LineChart userData={hostIncome} />
      ) : (
        <p>No income data available</p>
      )}
    </div>
  )
}
