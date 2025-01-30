import { useOutletContext } from "react-router"
import { Van } from "../../types/types"

export default function HostVanPricing() {
  const { currentVan } = useOutletContext<{ currentVan: Van }>()

  if (!currentVan) {
    return (
      <section className="bg-base-300 shadow-lg rounded-lg p-6 max-w-sm mx-auto space-y-4 text-center">
        <p>Loading pricing information...</p>
      </section>
    )
  }

  return (
    <section className="bg-base-300 shadow-lg rounded-lg p-6 max-w-sm mx-auto space-y-4 text-center">
      <h3 className="text-3xl font-semibold text-success">
        ${currentVan.price}
        <span className="text-xl font-normal text-base-content">/day</span>
      </h3>
      <p className="text-lg font-medium text-gray-700 sr-only">
        Price per day for renting this van
      </p>
    </section>
  )
}
