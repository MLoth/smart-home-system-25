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
import type { InputData } from '~/interfaces/api.interface'

export function meta({}: Route.MetaArgs) {
  return [
    // We zetten Smart Home System hier achteraf wel bij.
    { title: 'Home' },
    { name: 'description', content: 'This is your home dashboard!' },
  ]
}

export default function Home() {
  const [efficiency, setEfficiency] = useState<number>()
  const [animatedEfficiency, setAnimatedEfficiency] = useState<number>(0)
  const [input, setInput] = useState<InputData[]>()

  const startEfficiencyAnimation = () => {
    if (!efficiency) return

    const interval = setInterval(() => {
      setAnimatedEfficiency(prev => {
        console.log('animatedEfficiency', prev, efficiency)
        if (prev >= efficiency) {
          clearInterval(interval)
          return prev
        } else {
          return Math.floor(prev! + Math.random() * 2)
        }
      })
    }, 10)
  }

  const getEfficiency = async () => {
    const data = await fetch(
      'https://mct-marty.be/smart-home-systems/efficiency',
    ).then(r => r.json())
    setEfficiency(() => {
      return data.efficiency
    })
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

  useEffect(() => {
    startEfficiencyAnimation()
  }, [efficiency])

  return (
    <>
      <GenericHeader location="Home" />

      <FeatureDashboardSegment
        title="Efficieny"
        singleDataValue={
          animatedEfficiency ? `${animatedEfficiency}%` : 'Loading...'
        }
      />

      <FeatureDashboardSegment title="Input">
        {input && input[0] && (
          <FeatureDashboardCard
            icon={<Sun />}
            title={input[0].label}
            colSpan={4}
          >
            <FeatureDataEnergy
              amount={input[0].value}
              unit={input[0].unit}
              trend={input[0].trend}
            />
          </FeatureDashboardCard>
        )}

        {input && input[1] && (
          <FeatureDashboardCard
            icon={<Wind />}
            title="wind generation"
            colSpan={4}
          >
            <FeatureDataEnergy amount={2.3} unit="kWh" trend="down" />
          </FeatureDashboardCard>
        )}
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
