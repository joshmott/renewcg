"use client";

import { useEffect, useState } from "react";

/**
 * Copyright year that stays current on a fully static site: the build bakes
 * in the build-time year, then the client corrects it after hydration.
 */
export function Year() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return <span suppressHydrationWarning>{year}</span>;
}
