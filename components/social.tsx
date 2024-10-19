"use client";
import { useCursorContext } from "@app/hooks/useCursorContext";
import { animated, config, useSprings } from "@react-spring/web";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa6";

const social = [
  {
    name: "Github",
    url: "https://github.com/alex-voievudko",
    icon: <FaGithub size={24} className="text-primary transition-colors duration-300 group-hover:text-black" />,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/alex-voievudko/",
    icon: <FaLinkedin size={24} className="text-primary transition-colors duration-300 group-hover:text-black" />,
  },
  {
    name: "Telegram",
    url: "https://t.me/alex_voievudko",
    icon: <FaTelegram size={24} className="text-primary transition-colors duration-300 group-hover:text-black" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/alex.voievudko/",
    icon: <FaInstagram size={24} className="text-primary transition-colors duration-300 group-hover:text-black" />,
  },
];

export const Social = () => {
  const { onCursor } = useCursorContext();

  const springs = useSprings(
    social.length,
    social.map((_, index) => ({
      from: { opacity: 0, transform: "translateY(-20px)" },
      to: { opacity: 1, transform: "translateY(0)" },
      config: config.wobbly,
      delay: 200 * index,
    })),
  );

  return (
    <div className="flex gap-5">
      {springs.map((style, index) => (
        <animated.a
          key={social[index].name}
          href={social[index].url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary focus-visible:bg-primary transition-colors duration-300 group"
          style={style}
          onMouseEnter={onCursor}
          onMouseLeave={onCursor}
          aria-label={social[index].name}
        >
          {social[index].icon}
        </animated.a>
      ))}
    </div>
  );
};
