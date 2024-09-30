import ProductShowcaseLG from "./ProductShowcaseLG"
import ProductShowcase from "./ProductShowcase"

import Image1 from '/public/assets/products/directory.png';
import Image2 from '/public/assets/products/perform.png';
import Image3 from '/public/assets/products/magnify.png';

export default function Home() {
  const products = [
    {
      title: "Directory",
      description: "Quickly and easily identify and contact employees in your organization with a customizable directory that provides insight into individual roles, with a photo that helps users connect data to their colleagues.",
      bulletPoints: [
        "Speedy contact management",
        "Enhanced communication and streamlined collaboration",
        "Improved community engagement"
      ],
      imageSrc: Image1,
      imageAlt: "Directory product image"
    },
    {
      title: "Perform",
      description: "Record, store, and measure employee review and observation data with customizable performance scales to support organizational outcomes. Customize and take control of your performance reviews.",
      bulletPoints: [
        "Customize and take control of your performance reviews",
        "Effortless multi-team management",
        "Insightful feedback summaries with actionable steps for team growth"
      ],
      imageSrc: Image2,
      imageAlt: "Perform product image"
    },
    {
      title: "Magnify",
      description: "Identify and review all of your student data in one convenient dashboard that informs users of grades, absences, risk factors, and more with a few simple clicks.",
      bulletPoints: [
        "Holistic risk assessment to evaluate and track progress",
        "Actionable insights to pinpoint areas that require attention",
        "Enhanced performance to tailor support and implement targeted interventions"
      ],
      imageSrc: Image3,
      imageAlt: "Magnify product image"
    }
  ];

  return (
    <div id="products" className="flex flex-col">
      <h4 className="text-primary-600 py-2">Products</h4>
      <h2 className="text-3xl font-bold py-6">3 modules, everything you need</h2>
      <p className="pb-12 py-2">A suite of cutting-edge software solutions designed to transform the way employees, parents, and students navigate their personal and professional lives.</p>
      <div className="hidden lg:block p-12">
        <ProductShowcaseLG products={products} />
      </div>
      <div className="block lg:hidden p-12 ">
        <ProductShowcase products={products} />
      </div>
    </div> 
  );
}