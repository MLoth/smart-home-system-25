import GenericUIRow from '../ui/GenericUIRow'
import GenericUIWrapper from '../ui/GenericUIWrapper'

const GenericFooter = () => {
  return (
    <GenericUIRow>
      <GenericUIWrapper>
        <div className="generic-footer">
          <p>Smart home system © 2025.</p>

          {/* Q: Link of een a-tag?? */}
          <p>Disclaimer</p>
        </div>
      </GenericUIWrapper>
    </GenericUIRow>
  )
}

export default GenericFooter
