import { LineChart } from "../../components/charts/LineChart"
import { getHostIncome } from "../../lib/api/api"
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
        <p>Loading Income Chart...</p>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    )
  }

  if (error) {
    return (
      <div role="alert" className="bg-red-200 text-red-800 p-4 rounded-md">
        <h2>Error loading income data</h2>
        <p>{error.message}</p>
      </div>
    )
  }

  // If hostIncome is null, handle gracefully (e.g., return early)
  if (!hostIncome) {
    return <p>Error: No income data available.</p>
  }

  // Safe to access hostIncome here, as it's no longer null
  const totalIncome = hostIncome.reduce((acc, val) => acc + val, 0)
  const averageIncome = totalIncome / hostIncome.length

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Your Income Over Time</h1>
      {hostIncome.length > 0 ? (
        <LineChart
          userData={hostIncome}
          aria-label="Income chart displaying income over time"
        />
      ) : (
        <p>No income data available for this period.</p>
      )}

      <div className="my-4">
        <p className="text-lg font-semibold">
          Total Income:{" "}
          <span className="font-bold">${totalIncome.toLocaleString()}</span>
        </p>
        <p className="mt-2 text-lg">
          Average Monthly Income:{" "}
          <span className="font-bold">${averageIncome.toLocaleString()}</span>
        </p>
      </div>
    </div>
  )
}
