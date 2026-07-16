import type { Metadata } from "next";
import InstitutionalDefinition from "@/components/InstitutionalDefinition";
import LevelsArchitecture from "@/components/LevelsArchitecture";

export const metadata: Metadata = {
  title: "Nosotros — SCALOR ACADEMY",
};

export default function NosotrosPage() {
  return (
    <main>
      <InstitutionalDefinition />
      <LevelsArchitecture />
    </main>
  );
}
