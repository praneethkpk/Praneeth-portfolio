"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  strings: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

/**
 * Typewriter effect that cycles through an array of strings.
 * Types each string character by character, pauses, then deletes and moves to the next.
 */
export function TypingAnimation({
  strings,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000,
  className,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const tick = useCallback(() => {
    const currentString = strings[stringIndex];

    if (isPaused) return;

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentString.length) {
        setDisplayText(currentString.slice(0, displayText.length + 1));
      } else {
        // Finished typing — pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        setDisplayText(currentString.slice(0, displayText.length - 1));
      } else {
        // Finished deleting — move to next string
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
      }
    }
  }, [displayText, stringIndex, isDeleting, isPaused, strings, pauseTime]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span>{displayText}</span>
      <span
        className="inline-block w-[2px] h-[1em] bg-primary ml-1 animate-blink"
        aria-hidden="true"
      />
    </span>
  );
}
