import { Settings } from 'lucide-react'
import GenericUIRow from '../ui/GenericUIRow'
import GenericUIWrapper from '../ui/GenericUIWrapper'

const GenericHeader = ({ location }: { location: string }) => {
  return (
    <GenericUIRow>
      <GenericUIWrapper>
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
      </GenericUIWrapper>
    </GenericUIRow>
  )
}

export default GenericHeader
