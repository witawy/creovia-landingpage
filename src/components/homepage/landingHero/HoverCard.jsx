'use client';
import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const HoverCard = ({ children, rotationRange = 28 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((mouseX - centerX) / centerX) * rotationRange;
    const rotateX = ((centerY - mouseY) / centerY) * rotationRange;
    x.set(rotateX);
    y.set(rotateY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const renderChild = (child, index) => {
    const { zindex = 0, x = 0, y = 0, rotation = 0, scale = 1 } = child.props || {};
    return (
      <div 
        key={index}
        className="absolute"
        style={{
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) translateZ(${zindex}px) translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`,
        }}
      >
        {React.isValidElement(child) 
          ? React.cloneElement(child, {
              className: `${child.props.className || ''}`,
              style: { ...child.props.style, maxWidth: 'none', maxHeight: 'none' },
            })
          : child
        }
      </div>
    );
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className="w-full h-full [transform-style:preserve-3d]"
    >
      {Array.isArray(children) 
        ? children.map(renderChild)
        : renderChild(children, 0)
      }
    </motion.div>
  );
};

export default HoverCard;