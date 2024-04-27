// file: app/_components/hooks/useLoading.tsx
import { useState, useEffect } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // imitate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return loading;
};

export default useLoading;
