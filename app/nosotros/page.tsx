import type { Metadata } from "next";
import InstitutionalDefinition from "@/components/InstitutionalDefinition";
import ScalorMethod from "@/components/ScalorMethod";
import LevelsArchitecture from "@/components/LevelsArchitecture";

export const metadata: Metadata = {
  title: "Nosotros — SCALOR ACADEMY",
};

export default function NosotrosPage() {
  return (
    <main>
      <InstitutionalDefinition />
      <ScalorMethod />
      <LevelsArchitecture />
    </main>
  );
}
