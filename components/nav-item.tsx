"use client";
import { useCursorContext } from "@app/hooks/useCursorContext";
import React, { useState } from "react";

type Props = {
  name: string;
  href: string;
  index: number;
  active: boolean;
  onClick: (index: number) => void;
};

export const NavigationItem = ({ name, href, index, active, onClick }: Props) => {
  const { onCursor } = useCursorContext();

  return (
    <a
      href={href}
      className="group flex items-center text-white font-roboto text-sm tracking-wide uppercase font-bold w-fit py-1"
      onMouseEnter={onCursor}
      onMouseLeave={onCursor}
      onClick={() => onClick(index)}
    >
      <span
        className={`group-hover:-translate-x-2 group-hover:text-secondary transition-all duration-300 ${
          active && "-translate-x-2 text-secondary"
        }`}
      >
        {`//0${index + 1}`}&nbsp;
      </span>
      <span
        className={`relative group-hover:translate-x-2 group-hover:text-secondary transition-all duration-300 ${
          active && "translate-x-2 text-secondary"
        }`}
      >
        {name}
      </span>
    </a>
  );
};
