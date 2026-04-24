import { useEffect, useState } from "react";

export function useScreenListener(width) {

  const [notMobile, setNotMobile] = useState(screen.width >= width)
  const [visible, setVisible] = useState(false);

  useEffect(function createScreenListener() {
    const handleResize = () => {
      const isNotMobile = window.innerWidth >= width;
      setNotMobile(isNotMobile)
      if (isNotMobile) setVisible(false)
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width])

  return { visible, setVisible, notMobile }
}
