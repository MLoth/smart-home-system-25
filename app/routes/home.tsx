import GenericHeader from '~/components/generic/header/GenericHeader'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    // We zetten Smart Home System hier achteraf wel bij.
    { title: 'Home' },
    { name: 'description', content: 'This is your home dashboard!' },
  ]
}

export default function Home() {
  return (
    <>
      <GenericHeader location="Home" />
      <p>This is fun...</p>
    </>
  )
}
