import { useOutletContext } from "react-router"
import { Van } from "../../types"

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext<{ currentVan: Van }>()

  return (
    <div className="flex justify-center items-center">
      <img
        src={currentVan.imageUrl}
        alt={currentVan.name}
        className="w-full max-w-3xl h-auto object-contain rounded-lg shadow-md max-h-100"
      />
    </div>
  )
}
