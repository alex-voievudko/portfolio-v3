"use client";
import { AboutSection } from "@app/sections/about";
import { ExperienceSection } from "@app/sections/experience";
import { ProjectsSection } from "@app/sections/projects";
import { RecommendationsSection } from "@app/sections/recommendations";
import { animated, config, useSpring } from "@react-spring/web";
import React from "react";

export const Main = () => {
  const blockSpring = useSpring({
    from: { opacity: 0, transform: "translateX(50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: config.slow,
    delay: 800,
  });

  return (
    <animated.main style={blockSpring} className="pt-24 lg:w-3/5 lg:py-24">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <RecommendationsSection />
    </animated.main>
  );
};
