"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FocusCardsDemo } from "../components/focus-cards";

export default function Gallery(className?: string) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >

      <div className="flex flex-col items-center justify-center w-full h-full p-5">
        <FocusCardsDemo />
      </div>
    </div>
  );
}
