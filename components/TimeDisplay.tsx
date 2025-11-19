"use client";

import { useEffect, useState } from "react";

export default function TimeDisplay() {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString =
        now.toLocaleTimeString("en-US", { hour12: false }) +
        ":" +
        now.getMilliseconds().toString().padStart(3, "0");
      setTime(timeString);
      requestAnimationFrame(updateTime);
    };
    updateTime();
  }, []);

  return <div id="time-display">{time}</div>;
}

