import { useEffect } from "react";

export function ScrollToTop({ pathname }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
