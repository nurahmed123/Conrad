import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import ProjectDetailTab from "@/components/sub/projectdetailtab";
import TeamDetails from "@/components/sub/teamDetails";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <ProjectDetailTab/>
        <TeamDetails/>
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
