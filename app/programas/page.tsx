import type { Metadata } from "next";
import CourseStructure from "@/components/CourseStructure";
import Curriculum from "@/components/Curriculum";

export const metadata: Metadata = {
  title: "Programas — SCALOR ACADEMY",
};

export default function ProgramasPage() {
  return (
    <main>
      <CourseStructure />
      <Curriculum />
    </main>
  );
}
