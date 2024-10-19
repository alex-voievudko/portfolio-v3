"use client";
import { Avatar } from "@app/components/avatar";
import { Button } from "@app/components/button";
import { Navigation } from "@app/components/nav-list";
import { Social } from "@app/components/social";
import { animated, config, useSpring } from "@react-spring/web";
import React from "react";

export const Header = () => {
  const avatarSpring = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: config.wobbly,
  });

  const headerSpring = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: config.stiff,
    delay: 200,
  });

  const subheaderSpring = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: config.gentle,
    delay: 400,
  });

  const paragraphSpring = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
    config: config.slow,
    delay: 800,
  });

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-2/5 lg:flex-col flex flex-col gap-8 lg:justify-between lg:py-24">
      <div className="flex gap-4 flex-col">
        <div className="flex gap-4 items-center">
          {/* Avatar */}
          <animated.div style={avatarSpring}>
            <Avatar />
          </animated.div>
          {/* Details */}
          <div>
            <animated.h1 style={headerSpring} className="text-4xl font-bold tracking-tight text-white">
              Alex Voievudko
            </animated.h1>
            <animated.h2
              style={subheaderSpring}
              className="text-2xl bg-clip-text text-transparent bg-primary font-semibold tracking-tight"
            >
              Front-End Developer
            </animated.h2>
          </div>
        </div>
        <animated.p style={paragraphSpring} className="max-w-md text-white">
          Passionate front-end software engineer crafting intuitive, accessible, and high-performing web experiences.
        </animated.p>
        <animated.p style={paragraphSpring} className="max-w-md text-white">
          I'm dedicated to delivering innovative, elegant solutions that elevate user interactions and drive seamless
          digital engagement.
        </animated.p>

        <Button href="/resume.pdf" className="mt-3">
          Download Resume
        </Button>

        <Navigation />
      </div>

      {/* Social */}
      <Social />
    </header>
  );
};
