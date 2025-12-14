"use client";

import { useEffect } from "react";

export default function AsyncAnimations() {
  useEffect(() => {
    // Check if animations CSS is already loaded
    const existingLink = document.querySelector('link[href="/animations.css"]');
    if (existingLink) {
      return;
    }

    // Load animations CSS asynchronously using the media="print" trick
    // This prevents it from blocking render, then switches to "all" once loaded
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/animations.css";
    link.media = "print";
    link.onload = function() {
      // @ts-ignore - media can be set to "all"
      this.media = "all";
    };
    
    // Fallback for browsers that don't support onload on link elements
    link.onerror = () => {
      // If loading fails, try loading it normally
      link.media = "all";
    };
    
    document.head.appendChild(link);
  }, []);

  return null;
}

