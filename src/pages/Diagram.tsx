import { useSearchParams } from 'react-router-dom'

export default function Diagram() {
  const [searchParams] = useSearchParams()
  const src = searchParams.get('src')
  const alt = searchParams.get('alt') || 'Diagram'

  if (!src) {
    return <div>No diagram specified</div>
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <img
        src={src}
        alt={alt}
        className="w-[90vw] h-[90vh]"
      />
    </div>
  )
}