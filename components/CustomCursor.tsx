"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const hoverTriggers = document.querySelectorAll(".hover-trigger");

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };

    const handleMouseEnter = () => {
      cursor?.classList.add("hovered");
    };

    const handleMouseLeave = () => {
      cursor?.classList.remove("hovered");
    };

    document.addEventListener("mousemove", handleMouseMove);

    hoverTriggers.forEach((trigger) => {
      trigger.addEventListener("mouseenter", handleMouseEnter);
      trigger.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverTriggers.forEach((trigger) => {
        trigger.removeEventListener("mouseenter", handleMouseEnter);
        trigger.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return <div id="cursor"></div>;
}

