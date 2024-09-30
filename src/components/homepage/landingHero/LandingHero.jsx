'use client'

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import HoverCard from './HoverCard';

// assets
import appMockupLight from '/public/assets/landingHero/appmockup.png';
import appMockupDark from '/public/assets/landingHero/appmockup-dark.png';
import phoneMockupLight from '/public/assets/landingHero/phonemockup.png';
import phoneMockupDark from '/public/assets/landingHero/phonemockup-dark.png';
import fullMockupLight from '/public/assets/landingHero/HeroApp.png';
import fullMockupDark from '/public/assets/landingHero/DarkHeroApp.png';

const LandingHero = () => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    setCurrentTheme(resolvedTheme || 'light');
  }, [resolvedTheme]);

  const appMockup = currentTheme === 'dark' ? appMockupDark : appMockupLight;
  const phoneMockup = currentTheme === 'dark' ? phoneMockupDark : phoneMockupLight;
  const fullMockup = currentTheme === 'dark' ? fullMockupDark : fullMockupLight;

  return (

    <div className="pt-32 lg:pt-0 flex flex-col lg:flex-row items-center justify-between xl:py-36">
      <div className="2xl:px-12 basis-1/3 lg:basis-1/3">
        <h3 className="font-light text-[30px] lg:text-[36px] xl:text-[48px] 2xl:text-[60px] leading-tight text-left text-primary-500">Elevated educational data</h3>
        <p className=" text-left text-medium lg:text-xl xl:text-2xl xl:leading-tight xl:max-w-[85%] 2xl:max-w-[1050px] max-w-[100%] font-light">
          Creovia cutting-edge tools empower you to navigate school, work and life with efficiency, security, and boundless potential.
        </p>
      </div>
      <div className="relative w-[98%] lg:w-[50%] 2xl:w-[55%] h-[285px] mt-8 mb-2 sm:my-0 max-h-[70vw] sm:h-[500px]">
  {/* Default (smallest size) */}
  <div className="sm:hidden absolute inset-0 flex items-center justify-center">
      <Image 
        className='w-full h-auto max-h-[320px] sm:max-h-[500px] object-contain'
        src={fullMockup}
        alt="Main Hero Image"
        width={600}
        height={500}
      />
    </div>
    <div>
</div>
        <HoverCard rotationRange={3}>

          {/* SM */}
          <Image className="hidden sm:block md:hidden"
            src={appMockup}
            alt="Main Hero Image"
            width={1800}
            height={600}
            zindex={-20}
            x={15}
            y={0}
            rotation={0}
            scale={0.3}
          />
          <Image className="hidden sm:block md:hidden"
            src={phoneMockup}
            alt="Phone Image"
            width={650}
            height={800}
            zindex={80}
            x={-170}
            y={45}
            rotation={0}
            scale={0.3}
          />
          {/* MD */}
          <Image className="hidden md:block lg:hidden"
            src={appMockup}
            alt="Main Hero Image"
            width={2200}
            height={600}
            zindex={-20}
            x={10}
            y={0}
            rotation={0}
            scale={0.3}
          />
          <Image className="hidden md:block lg:hidden"
            src={phoneMockup}
            alt="Phone Image"
            width={750}
            height={800}
            zindex={80}
            x={-200}
            y={40}
            rotation={0}
            scale={0.3}
          />

          {/* LG */}
          <Image className="hidden lg:block xl:hidden"
            src={appMockup}
            alt="Main Hero Image"
            width={2000}
            height={600}
            zindex={-20}
            x={-50}
            y={0}
            rotation={0}
            scale={0.3}
          />
          <Image className="hidden lg:block xl:hidden"
            src={phoneMockup}
            alt="Phone Image"
            width={700}
            height={800}
            zindex={80}
            x={-250}
            y={40}
            rotation={0}
            scale={0.3}
          />

          {/* XL */}
          <Image className="hidden xl:block 2xl:hidden"
            src={appMockup}
            alt="Main Hero Image"
            width={2800}
            height={600}
            zindex={-20}
            x={-70}
            y={0}
            rotation={0}
            scale={0.3}
          />
          <Image className="hidden xl:block 2xl:hidden"
            src={phoneMockup}
            alt="Phone Image"
            width={950}
            height={800}
            zindex={80}
            x={-330}
            y={40}
            rotation={0}
            scale={0.3}
          />

          {/* 2XL */}
          <Image className="hidden 2xl:block"
            src={appMockup}
            alt="Main Hero Image"
            width={3300}
            height={600}
            zindex={-20}
            x={-100}
            y={0}
            rotation={0}
            scale={0.3}
          />
          <Image className="hidden 2xl:block"
            src={phoneMockup}
            alt="Phone Image"
            width={1100}
            height={800}
            zindex={100}
            x={-380}
            y={50}
            rotation={0}
            scale={0.3}
          />
        </HoverCard>
      </div>
    </div>
  );
};

export default LandingHero;