"use client";
import { useCursorContext } from "@app/hooks/useCursorContext";
import { animated, config, useSpring } from "@react-spring/web";
import type { ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
};

export const Button = ({ href, className, children }: Props) => {
  const { onCursor } = useCursorContext();

  const buttonSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.1)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: config.wobbly,
    delay: 1000,
  });

  return (
    <animated.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonSpring}
      className={`${className} inline-block px-4 py-2 w-fit text-sm font-medium leading-5 text-black bg-primary border border-transparent rounded-lg lg:hover:bg-primary-hover lg:hover:transition-colors lg:hover:duration-300 focus:outline-none focus:border-primary-hover  active:bg-primary-hover`}
      onMouseEnter={onCursor}
      onMouseLeave={onCursor}
    >
      {children}
    </animated.a>
  );
};
