"use client";

import { useEffect, useRef } from "react";

export default function DisponiblesLink({ href = "/#alquileres" }) {
  const ref = useRef(null);

  useEffect(() => {
    let animation;

    import("animejs").then(({ animate }) => {
      if (!ref.current) return;
      animation = animate(ref.current, {
        scale: [1, 1.06, 1],
        duration: 1800,
        loop: true,
        easing: "easeInOutSine",
      });
    });

    return () => {
      animation?.pause?.();
    };
  }, []);

  return (
    <a className="primary disponibles-link" href={href} ref={ref}>
      Disponibles
    </a>
  );
}
