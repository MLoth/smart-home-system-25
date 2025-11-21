import GenericHeader from '~/components/generic/header/GenericHeader'
import type { Route } from './+types/home'
import FeatureDashboardSegment from '~/components/feature/dashboard/FeatureDashboardSegment'
import FeatureDashboardCard from '~/components/feature/dashboard/FeatureDashboardCard'
import {
  Cctv,
  Coffee,
  Cog,
  Fan,
  Lightbulb,
  Sun,
  Thermometer,
  Wind,
} from 'lucide-react'
import FeatureDataText from '~/components/feature/data/FeatureDataText'
import FeatureDataEnergy from '~/components/feature/data/FeatureDataEnergy'
import GenericFooter from '~/components/generic/footer/GenericFooter'
import { useEffect, useState } from 'react'

export function meta({}: Route.MetaArgs) {
  return [
    // We zetten Smart Home System hier achteraf wel bij.
    { title: 'Home' },
    { name: 'description', content: 'This is your home dashboard!' },
  ]
}

export default function Home() {
  const [efficieny, setEfficieny] = useState()
  const [input, setInput] = useState()

  const getEfficiency = async () => {
    const data = await fetch(
      'https://mct-marty.be/smart-home-systems/efficiency',
    ).then(r => r.json())
    setEfficieny(data.efficiency)
  }

  const getInputData = async () => {
    const data = await fetch(
      'https://mct-marty.be/smart-home-systems/input',
    ).then(r => r.json())
    setInput(data.input)
  }

  // Q: wat is een useEffect?
  useEffect(() => {
    getEfficiency()
    getInputData()
    // [] blijft altijd een array, dus zal nooit rerenderen
  }, [])

  return (
    <>
      <GenericHeader location="Home" />

      <FeatureDashboardSegment
        title="Efficieny"
        singleDataValue={efficieny ? `${efficieny}%` : 'Loading...'}
      />

      <FeatureDashboardSegment title="Input">
        <FeatureDashboardCard icon={<Sun />} title="solar output" colSpan={4}>
          <FeatureDataEnergy amount={8.7} unit="kWh" trend="up" />
        </FeatureDashboardCard>

        <FeatureDashboardCard
          icon={<Wind />}
          title="wind generation"
          colSpan={4}
        >
          <FeatureDataEnergy amount={2.3} unit="kWh" trend="down" />
        </FeatureDashboardCard>
      </FeatureDashboardSegment>

      <FeatureDashboardSegment title="Output">
        <FeatureDashboardCard
          icon={<Thermometer />}
          title="house temperature"
          colSpan={3}
        >
          <FeatureDataText value="22°C" />
        </FeatureDashboardCard>

        <FeatureDashboardCard icon={<Fan />} title="fan speed" colSpan={5}>
          <FeatureDataText value="25%" />
        </FeatureDashboardCard>

        <FeatureDashboardCard
          icon={<Lightbulb />}
          title="lights on"
          colSpan={4}
          action={{
            label: 'Lights on',
            handler: () => console.info('Turning off the lights'),
          }}
        >
          <FeatureDataText value="2/28" />
        </FeatureDashboardCard>

        <FeatureDashboardCard
          icon={<Cctv />}
          title="surveillance"
          colSpan={4}
          action={{
            label: 'Stop systems',
            handler: () => console.info('Disabling surveillance'),
          }}
        >
          <FeatureDataText value="Recording" />
        </FeatureDashboardCard>
        {/* Cards or content */}
      </FeatureDashboardSegment>

      <GenericFooter />
    </>
  )
}
