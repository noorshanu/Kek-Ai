import { useEffect, useRef, useCallback } from "react";

const OutsideClickDetector = (handler, enabled) => {
  const ref = useRef(null);

  const handleClick = useCallback(
    (event) => {
      if (enabled && ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    },
    [handler, enabled]
  );

  useEffect(() => {
    const cleanup = () => {
      document.removeEventListener("mousedown", handleClick);
    };

    if (enabled) {
      document.addEventListener("mousedown", handleClick);
      return cleanup;
    }

    cleanup();
  }, [handleClick, enabled]);

  return ref;
};

export default OutsideClickDetector;
