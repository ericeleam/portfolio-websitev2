// Color Scheme: Blue #171c28, Gray #e7e7e7, Red #ff0000
import LandingSection from './components/LandingSection';
import AboutMeSection from './components/AboutMeSection';
import SkillsSection from './components/SkillsSection';
import ProjectSection from './components/ProjectSection';

export default function Home() {
  return (
    <main className="flex flex-col bg-[#171c28] min-h-screen">
      <LandingSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectSection />
    </main>
  );
}