import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/ui/marquee";
import { AboutTeaser } from "@/components/home/about-teaser";
import { ExperienceTeaser } from "@/components/home/experience-teaser";
import { WorkTeaser } from "@/components/home/work-teaser";
import { SkillsTeaser } from "@/components/home/skills-teaser";
import { RecognitionTeaser } from "@/components/home/recognition-teaser";
import { Contact } from "@/components/sections/contact";
import { skillGroups } from "@/data/content";

export default function Home() {
  const toolbox = skillGroups.flatMap((group) => group.skills);

  return (
    <>
      <Hero />
      <Marquee items={toolbox} />
      <AboutTeaser />
      <ExperienceTeaser />
      <WorkTeaser />
      <SkillsTeaser />
      <RecognitionTeaser />
      <Contact />
    </>
  );
}
