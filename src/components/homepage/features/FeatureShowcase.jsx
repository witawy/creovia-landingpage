// FeatureSection.js
'use client'

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { motion } from "framer-motion";

const FeatureCard = ({ header, description, imageSrc, imageAlt, spotlightColor = "bg-pink-300" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rgbaColor, setRgbaColor] = useState('rgba(255,182,193,0.3)');
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});

  useEffect(() => {
    const element = document.createElement('div');
    element.classList.add(spotlightColor);
    document.body.appendChild(element);
    const computedStyle = getComputedStyle(element);
    const color = computedStyle.backgroundColor;
    document.body.removeChild(element);

    const rgbValues = color.match(/\d+/g);
    if (rgbValues) {
      setRgbaColor(`rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, 0.3)`);
    }
  }, [spotlightColor]);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    const maxRotation = 5; // Maximum rotation in degrees
    const rotateX = (mouseY / (rect.height / 2)) * maxRotation;
    const rotateY = -(mouseX / (rect.width / 2)) * maxRotation;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease-out',
    });

    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease-out',
    });
  };

  return (
    <motion.div 
      ref={cardRef}
      className="relative flex flex-col basis-1/3 justify-between bg-neutral-100 overflow-hidden rounded-lg"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
    >
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, ${rgbaColor}, transparent 100%)`,
          }}
        />
      )}
      <div className="m-12 z-10">
        <h3 className="pb-6 font-semibold text-2xl">{header}</h3>
        <p className="text-md">{description}</p>
      </div>
      <div className="px-6 -mb-1 z-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="responsive"
          width={500}
          height={300}
          objectFit="contain"
        />
      </div>
    </motion.div>
  );
};

const FeatureSection = ({ featureData }) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    setCurrentTheme(resolvedTheme || 'light');
  }, [resolvedTheme]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-evenly">
      {featureData.map((feature, index) => (
        <FeatureCard
          key={index}
          header={feature.header}
          description={feature.description}
          imageSrc={currentTheme === 'dark' ? feature.imageSrcDark : feature.imageSrcLight}
          imageAlt={feature.imageAlt}
          spotlightColor="bg-primary-600"
        />
      ))}
    </div>
  );
};

export default FeatureSection;