
import { useState, useEffect } from "react";

function WindowWidth() {

  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p>
        Window width: <strong>{width}px</strong>
      </p>
      <small>
        Resize the window to see it update. Unmount to remove the listener.
      </small>
    </div>
  );
}

export default WindowWidth;