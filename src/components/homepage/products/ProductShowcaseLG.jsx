'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';

import bulletPoint from '/public/assets/products/check-icon.png'
import dotbg from '/public/assets/products/dots.svg'

const ProductShowcase = ({ products }) => {
  const [activeSlots, setActiveSlots] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = -containerTop;
      const slotHeight = containerHeight / 3;

      const newActiveSlots = [];
      if (scrollPosition > -windowHeight * 0.8) newActiveSlots.push('slot1');
      if (scrollPosition > slotHeight - windowHeight * 0.8) newActiveSlots.push('slot2');
      if (scrollPosition > slotHeight * 2 - windowHeight * 0.8) newActiveSlots.push('slot3');

      setActiveSlots(newActiveSlots);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="w-full mx-auto relative">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <Image
          src={dotbg}
          alt="Background dots"
          layout="fill"
          objectFit="cover"
          style={{
            transform: 'translateX(-30%) translateY(-10%)',
            opacity: 0.5,
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: '0%',
            top: '0%',
          }}
        />
        <Image
          src={dotbg}
          alt="Background dots"
          layout="fill"
          objectFit="cover"
          style={{
            transform: 'rotate(180deg) translateX(-30%) translateY(-10%)',
            opacity: 0.5,
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: '0%',
            top: '0%',
          }}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-12 relative z-10"
           style={{ 
             gridTemplateAreas: `
               "content1 slot1"
               "slot2 content2"
               "content3 slot3"
             `,
           }}>
        {products.map((product, index) => (
          <React.Fragment key={index}>
            <AnimatedContent
              product={product}
              index={index}
              className={`py-12 flex flex-col justify-center ${index % 2 === 0 ? 'pr-6' : 'pl-6'}`}
              style={{ gridArea: `content${index + 1}`, height: '50vh' }}
            />
            <div className="h-full relative overflow-hidden" 
                 style={{ gridArea: `slot${index + 1}`, height: '50vh' }}>
              <MotionContent 
                slot={`slot${index + 1}`}
                product={product}
                isActive={activeSlots.includes(`slot${index + 1}`)}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const AnimatedContent = ({ product, index, className, style }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h3 className="text-3xl font-bold" variants={itemVariants}>{product.title}</motion.h3>
      <motion.p className="mt-2 py-4 text-2xl" variants={itemVariants}>{product.description}</motion.p>
      <motion.ul className="mt-2 space-y-2" variants={containerVariants}>
        {product.bulletPoints.map((point, i) => (
          <motion.li key={i} className="flex items-center" variants={itemVariants}>
            <Image
              src={bulletPoint}
              alt="Bullet point"
              width={20}
              height={20}
              className="mr-2"
            />
            <span>{point}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const MotionContent = ({ slot, product, isActive }) => {
  const variants = {
    enter: (slot) => ({
      opacity: 0,
      x: slot === 'slot2' ? '-100%' : '100%'
    }),
    center: { opacity: 1, x: '0%' },
    exit: (slot) => ({
      opacity: 0,
      x: slot === 'slot2' ? '-100%' : '100%'
    })
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          key={`${slot}-${product.imageSrc}`}
          className="absolute inset-0 flex flex-col justify-center"
          custom={slot}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 1,
            opacity: { duration: 0.5 }
          }}
        >
          <div className="w-full h-full relative">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductShowcase;