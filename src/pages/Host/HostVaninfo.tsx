import { useOutletContext } from "react-router"
import { Van } from "../../types"

export default function HostVanInfo() {
  const { currentVan } = useOutletContext<{ currentVan: Van }>()

  return (
    <section className="bg-base-300 shadow-lg rounded-lg p-6 max-w-3xl mx-auto space-y-4">
      <h4 className="text-xl font-semibold text-base-content/60">
        Name:{" "}
        <span className="font-normal text-base-content">{currentVan.name}</span>
      </h4>
      <h4 className="text-xl font-semibold text-base-content/60">
        Category:{" "}
        <span className="font-normal text-base-content">{currentVan.type}</span>
      </h4>
      <h4 className="text-xl font-semibold text-base-content/60">
        Description:
        <span className="block mt-2 text-base-content">
          {currentVan.description}
        </span>
      </h4>
      <h4 className="text-xl font-semibold text-base-content/60">
        Visibility:{" "}
        <span className="font-normal text-base-content">Public</span>
      </h4>
    </section>
  )
}
