import type { Metadata } from "next";
import PedagogicalModel from "@/components/PedagogicalModel";

export const metadata: Metadata = {
  title: "Metodología — SCALOR ACADEMY",
};

export default function MetodologiaPage() {
  return (
    <main>
      <PedagogicalModel />
    </main>
  );
}
