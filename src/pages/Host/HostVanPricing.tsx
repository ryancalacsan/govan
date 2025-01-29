import { useOutletContext } from "react-router"
import { Van } from "../../types"

export default function HostVanPricing() {
  const { currentVan } = useOutletContext<{ currentVan: Van }>()
  return (
    <section className="bg-base-300 shadow-lg rounded-lg p-6 max-w-sm mx-auto space-y-4 text-center">
      <h3 className="text-3xl font-semibold text-success">
        ${currentVan.price}
        <span className="text-xl font-normal text-gray-500">/day</span>
      </h3>
    </section>
  )
}
