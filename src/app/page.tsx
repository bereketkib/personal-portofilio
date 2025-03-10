"use client";

import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import ContactPreview from "@/components/home/ContactPreview";
import ExperienceSection from "@/components/home/ExperienceSection";
import SkillsSection from "@/components/home/SkillsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsPreview />
      <ContactPreview />
    </>
  );
};

export default Home;
