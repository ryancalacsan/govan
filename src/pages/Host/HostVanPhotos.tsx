import { useOutletContext } from "react-router"
import { Van } from "../../types"

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext<{ currentVan: Van }>()

  if (!currentVan) {
    return (
      <div className="flex justify-center items-center">
        <p>Loading van information...</p>
      </div>
    )
  }

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/hero-van.jpg"
  }

  return (
    <figure className="flex justify-center items-center">
      <img
        src={currentVan.imageUrl}
        alt={`Image of ${currentVan.name}`}
        onError={handleError}
        className="w-full max-w-3xl h-auto object-contain rounded-lg shadow-md max-h-[400px]"
      />
      <figcaption className="text-center mt-4 text-xl font-semibold text-base-content sr-only">
        {currentVan.name}
      </figcaption>
    </figure>
  )
}
