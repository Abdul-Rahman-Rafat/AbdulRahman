import { useEffect, useRef } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationId;

    function handleMouseMove(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursorRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    }

    function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      animationId = requestAnimationFrame(animateRing);
    }

    document.addEventListener("mousemove", handleMouseMove);
    animateRing();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
}

export default CustomCursor;
