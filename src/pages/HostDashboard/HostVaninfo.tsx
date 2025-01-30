import { useOutletContext } from "react-router"
import { Van } from "../../types/types"

export default function HostVanInfo() {
  // Use useOutletContext to extract currentVan from the context
  const { currentVan } = useOutletContext<{ currentVan: Van }>()

  // Add a check to ensure currentVan exists before rendering
  if (!currentVan) {
    return (
      <section className="bg-base-300 shadow-lg rounded-lg p-6 max-w-3xl mx-auto space-y-4">
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section className="bg-base-300 shadow-lg rounded-lg p-6 max-w-3xl mx-auto space-y-4">
      <h3 className="text-2xl font-semibold text-base-content mb-4">
        Van Information
      </h3>

      <dl className="space-y-4">
        <div>
          <dt className="text-xl font-semibold text-base-content/60">Name:</dt>
          <dd className="font-normal text-base-content">{currentVan.name}</dd>
        </div>

        <div>
          <dt className="text-xl font-semibold text-base-content/60">
            Category:
          </dt>
          <dd className="font-normal text-base-content">{currentVan.type}</dd>
        </div>

        <div>
          <dt className="text-xl font-semibold text-base-content/60">
            Description:
          </dt>
          <dd className="block mt-2 text-base-content">
            {currentVan.description}
          </dd>
        </div>

        <div>
          <dt className="text-xl font-semibold text-base-content/60">
            Visibility:
          </dt>
          <dd className="font-normal text-base-content">Public</dd>
        </div>
      </dl>
    </section>
  )
}
