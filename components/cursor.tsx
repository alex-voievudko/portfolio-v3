"use client";
import { useMousePosition } from "@app/hooks/useMousePosition";
import type React from "react";
import { createContext, useState } from "react";

type CursorContextType = {
  onCursor: () => void;
};

export const CursorContext = createContext<CursorContextType | null>(null);

type CursorProviderProps = {
  children: React.ReactNode;
};

export const CursorProvider = ({ children }: CursorProviderProps) => {
  const { x, y } = useMousePosition();
  const [expandCursor, setExpandCursor] = useState(false);

  const onCursor = () => {
    setExpandCursor((prev) => !prev);
  };

  return (
    <CursorContext.Provider value={{ onCursor }}>
      <div
        className={`hidden xl:block fixed top-0 left-0 z-50 pointer-events-none w-8 h-8 rounded-full border border-primary transition-all duration-300 ease-out ${
          expandCursor ? "opacity-20" : "opcaity-100"
        }`}
        style={{ transform: `translate(${x - 16}px, ${y - 16}px)` }}
      />
      <div
        className={`hidden xl:block  fixed top-0 left-0 z-50 pointer-events-none  rounded-full bg-primary  transition-all duration-400 ease-out ${
          expandCursor ? "w-6 h-6 -ml-3 -mt-3 opacity-20" : "w-2 h-2 -ml-1 -mt-1 opacity-100"
        }`}
        style={{ transform: `translate(${x}px, ${y}px)` }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-20 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${x}px ${y}px, rgba(231, 29, 54, 0.15), transparent 80%)`,
        }}
      />
      {children}
    </CursorContext.Provider>
  );
};
