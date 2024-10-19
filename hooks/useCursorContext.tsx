import { CursorContext } from "@app/components/cursor";
import React, { useContext } from "react";

export const useCursorContext = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursorContext must be used within a CursorProvider");
  }
  return context;
};
