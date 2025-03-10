"use client";

import { HeroSection } from "@/components/about/HeroSection";
import { EducationSection } from "@/components/about/EducationSection";
import { SkillsSection } from "@/components/about/SkillsSection";
import { ExperienceSection } from "@/components/about/ExperienceSection";
import { CertificationsSection } from "@/components/about/CertificationsSection";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <HeroSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
    </div>
  );
};

export default AboutPage;
