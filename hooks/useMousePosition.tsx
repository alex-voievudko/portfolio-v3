import React, { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(0);

  // detect resize
  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (width >= 1280) {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      }
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [width]);

  return mousePosition;
};
