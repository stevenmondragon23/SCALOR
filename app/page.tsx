import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import InstitutionalDefinition from "@/components/InstitutionalDefinition";
import LevelsArchitecture from "@/components/LevelsArchitecture";
import CourseStructure from "@/components/CourseStructure";
import Curriculum from "@/components/Curriculum";
import PedagogicalModel from "@/components/PedagogicalModel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-paper">
      <Nav />
      <Hero />
      <InstitutionalDefinition />
      <LevelsArchitecture />
      <CourseStructure />
      <Curriculum />
      <PedagogicalModel />
      <Footer />
    </main>
  );
}
