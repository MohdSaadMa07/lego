import Spline from "@splinetool/react-spline";
import { useRef } from "react";

export default function Home() {
  const splineRef = useRef(null);

  const handleHover = () => {
    splineRef.current.emitEvent("mouseHover", "BreakEffect");
  };

  const handleLeave = () => {
    splineRef.current.emitEvent("mouseHover", "RebuildEffect");
  };

  return (
    <main className="spline-container">
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <Spline
          scene="https://prod.spline.design/fYL71WAboIRGLMP4/scene.splinecode"
          onLoad={(spline) => (splineRef.current = spline)}
        />
      </div>
    </main>
  );
}
