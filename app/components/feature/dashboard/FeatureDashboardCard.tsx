import React from 'react'

// Hier ga ik defineren wat er binnen kan komen (als object)
interface ActionProp {
  label: string
  handler: () => void
}

const FeatureDashboardCard = ({
  icon,
  title,
  colSpan,
  action,
  children,
}: React.PropsWithChildren<{
  icon: React.ReactNode
  title: string
  colSpan: number
  action?: ActionProp
}>) => {
  const getSize = () => {
    // This is in an 8 column grid
    return {
      gridColumn: `span ${colSpan} / span ${colSpan}`,
    }
  }

  return (
    <div className="card" style={{ ...getSize() }}>
      <header className="card-header">
        {/* AI: added this gem of a piece of code... */}
        {React.isValidElement(icon)
          ? React.cloneElement(icon, { className: 'card-icon' })
          : icon}

        <h2 className="card-title">{title}</h2>
      </header>

      {children}

      {action && (
        <button className="card-action" onClick={action.handler}>
          {action.label}
        </button>
      )}
    </div>
  )
}

export default FeatureDashboardCard
