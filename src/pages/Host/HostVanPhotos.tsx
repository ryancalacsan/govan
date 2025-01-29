import { useOutletContext } from "react-router"

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext()

  return (
    <div className="flex justify-center items-center">
      <img
        src={currentVan.imageUrl}
        alt={currentVan.name}
        className="w-full max-w-3xl h-auto object-cover rounded-lg shadow-md"
      />
    </div>
  )
}
