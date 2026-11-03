// import PageUnderDevelopment from "@/components/common/comming-soon";
// import { locales } from "@/i18n/routing";

// export async function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

// export default function page() {
//   return <PageUnderDevelopment title="Capability Digital Transform" />
// }

import DigitalTransformationHero from "@/features/digital-transform/DigitalTransformationHero";
import DigitalTransformationChallenges from "@/features/digital-transform/DigitalTransformationChallenges";
import DigitalTransformationApproach from "@/features/digital-transform/DigitalTransformationApproach";
import DigitalTransformationOutcomes from "@/features/digital-transform/DigitalTransformationOutcomes";
import DigitalTransformationCTA from "@/features/digital-transform/DigitalTransformationCTA";
import { locales } from "@/i18n/routing";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function DigitalTransformationPage() {
  return (
    <main className="overflow-x-hidden">
      <DigitalTransformationHero />
      <DigitalTransformationChallenges />
      <DigitalTransformationApproach />
      <DigitalTransformationOutcomes />
      <DigitalTransformationCTA />
    </main>
  );
}

