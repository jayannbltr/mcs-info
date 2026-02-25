import { Navbar } from "@/components/navbar"
import { HeroTranslated } from "@/components/hero-translated"
import {
  ChallengeSectionTranslated,
  AdvantageSectionTranslated,
  CapabilitiesSectionTranslated,
  BusinessValueSectionTranslated,
  UseCaseSectionTranslated,
  ComparisonSectionTranslated,
  CtaSectionTranslated,
  FooterTranslated
} from "@/components/sections-translated"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroTranslated />
      <ChallengeSectionTranslated />
      <AdvantageSectionTranslated />
      <CapabilitiesSectionTranslated />
      <BusinessValueSectionTranslated />
      <UseCaseSectionTranslated />
      <ComparisonSectionTranslated />
      <CtaSectionTranslated />
      <FooterTranslated />
    </main>
  )
}
