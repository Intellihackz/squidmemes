import { HeroSection } from '@/components/hero-section'
import { HowToBuy } from '@/components/how-to-buy'
import { Roadmap } from '@/components/roadmap'
import { SocialLinks } from '@/components/social-links'
import { ContractAddress } from '@/components/contract-address'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SocialLinks />
      <ContractAddress />
      <HowToBuy />
      <Roadmap />
    </main>
  )
}

