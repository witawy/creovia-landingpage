'use client';
import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const HoverCard = ({ children, rotationRange = 28 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * rotationRange;
    const mouseY = (e.clientY - rect.top) * rotationRange;
    const rX = (mouseY / height - rotationRange / 2) * -1;
    const rY = mouseX / width - rotationRange / 2;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transform }}
      className="relative items-center w-full rounded-xl"
    >
      {children}
    </motion.div>
  );
};

export default HoverCard;