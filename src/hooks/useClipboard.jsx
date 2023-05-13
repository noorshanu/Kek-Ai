import { useState, useEffect } from "react";

function useClipboard() {
  const [isCopied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setCopied(false);
    }
  };

  useEffect(() => {
    let timeoutId;
    if (isCopied) {
      timeoutId = setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [isCopied]);

  return [isCopied, copyToClipboard];
}

export default useClipboard;
