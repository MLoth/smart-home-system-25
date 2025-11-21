import GenericUIRow from '~/components/generic/ui/GenericUIRow'
import GenericUIWrapper from '~/components/generic/ui/GenericUIWrapper'

const FeatureDashboardSegment = ({
  title,
  children,
  singleDataValue,
}: React.PropsWithChildren<{ title: string; singleDataValue?: string }>) => {
  return (
    <GenericUIRow>
      <GenericUIWrapper>
        <div className="dashboard-segment">
          {/* TODO: add header for optional radio button (header actions) */}
          <h2 className="dashboard-segment-title">{title}</h2>

          {singleDataValue ? (
            <div className="dashboard-segment-single-data-value">
              {singleDataValue}
            </div>
          ) : (
            <div className="segment-grid">{children}</div>
          )}
        </div>
      </GenericUIWrapper>
    </GenericUIRow>
  )
}

export default FeatureDashboardSegment
