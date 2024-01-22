import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import ProjectDetailTab from "@/components/sub/Projectdetailtab";
import TeamDetails from "@/components/sub/TeamDetails";
import Compare from "@/components/sub/compare";
import Pricing from "@/components/sub/Pricing";
import Chat from "@/components/sub/Chat"


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Chat/>
        <ProjectDetailTab/>
        <Compare/>
        <TeamDetails/>
        <Skills />
        <Encryption />
        <Projects />
        <Pricing />
      </div>
    </main>
  );
}
