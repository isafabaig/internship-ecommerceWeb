"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 100, // How far from top before animation starts
      easing: "ease-in-out",
      once: true, // Run only once
    });
  }, []);

  return <>{children}</>;
}