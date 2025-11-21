import { ArrowDown, ArrowUp } from 'lucide-react'
import FeatureDataText from './FeatureDataText'

const FeatureDataEnergy = ({
  amount,
  unit,
  trend,
}: {
  amount: number
  unit: string
  trend: string
}) => {
  return (
    <div className="data-energy">
      <FeatureDataText value={amount.toString()} />
      <div className="data-energy-details">
        {trend === 'up' ? (
          <ArrowUp className="data-energy-icon data-energy-icon-up" />
        ) : trend === 'down' ? (
          <ArrowDown className="data-energy-icon data-energy-icon-down" />
        ) : (
          ''
        )}
        <p className="data-energy-unit">{unit}</p>
      </div>
    </div>
  )
}

export default FeatureDataEnergy
