import { Settings } from 'lucide-react'

const GenericHeader = ({ location }: { location: string }) => {
  return (
    <div className="generic-header">
      <h1 className="title">
        <span className="title--current-page">{location}</span> Smart Home
        System
      </h1>

      <nav>
        <img
          // src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
          alt="Smart Home System Logo"
        />
        <button>
          <Settings />
        </button>
      </nav>
    </div>
  )
}

export default GenericHeader
