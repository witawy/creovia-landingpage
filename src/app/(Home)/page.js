import Image from "next/image";

import LandingHero from "../../components/homepage/landingHero/LandingHero";
import Features from "../../components/homepage/features/Main"
import Products from "../../components/homepage/products/Main";
import Testimonials from "../../components/homepage/testimonial/Main"
import Contact from "../../components/homepage/contact/Main"


export default function Home() {
  return (

    <div className="flex flex-col min-h-screen content-center bg-surface-background">
    <main className="w-[100%]">
      <section id="hero-section" className="px-8 w-full justify-between py-16 overflow-hidden bg-neutral-100" ><LandingHero /></section>
      <section id="features-section" className="overflow-hidden py-16 px-6 md:px-12 bg-neutral-50" ><Features /></section>
      <section id="products-section" className="overflow-hidden py-16 px-6 md:px-12 bg-neutral-100" ><Products /></section>
      <section id="testimonial-section" className="overflow-hidden py-16 px-6 md:px-12 bg-neutral-50" ><Testimonials /></section>
      <section id="contact-section" className="overflow-hidden py-16 px-6 md:px-12 bg-neutral-100" ><Contact /></section>  
    </main>
    </div>
  );
}
