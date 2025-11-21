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

          <nav className="generic-header-nav">
            <img
              className="profile"
              src="/simon.png"
              alt="Smart Home System Logo"
            />
            <button className="action">
              <Settings className="action-icon" />
            </button>
          </nav>
        </div>
      </GenericUIWrapper>
    </GenericUIRow>
  )
}

export default GenericHeader
