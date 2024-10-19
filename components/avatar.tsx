"use client";
import { animated, config, useTransition } from "@react-spring/web";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import avatar1 from "../public/images/avatar-1.jpg";
import avatar2 from "../public/images/avatar-2.jpg";
import avatar3 from "../public/images/avatar-3.jpg";
import avatar4 from "../public/images/avatar-4.jpg";
import avatar5 from "../public/images/avatar-5.jpg";

export const Avatar = () => {
  const images = [avatar1, avatar2, avatar3, avatar4, avatar5];
  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, {
    initial: { opacity: 1, transform: "scale(1)" },
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
    config: config.stiff,
    loop: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-20 h-20 rounded-lg border-4 border-primary flex-shrink-0  overflow-hidden">
      {transitions((style, index) => (
        <animated.div style={style} className="absolute p-2 inset-0 w-full h-full flex items-center justify-center">
          <Image src={images[index]} alt="Avatar" priority className="object-cover w-full rounded-lg h-full" />
        </animated.div>
      ))}
    </div>
  );
};
