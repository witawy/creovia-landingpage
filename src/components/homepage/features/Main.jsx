// Features.js
import FeatureShowcase from './FeatureShowcase';

import solutionsLight from '/public/assets/features/tailored-solutions.png';
import GrowthLight from '/public/assets/features/growth.png';
import insightsLight from '/public/assets/features/insights.png';
import solutionsDark from '/public/assets/features/tailored-solutions-dark.png';
import GrowthDark from '/public/assets/features/growth-dark.png';
import insightsDark from '/public/assets/features/insights-dark.png';

const featureData = [
  {
    header: "Tailored Solutions",
    description: "Creovia's modular design allows organizations to pick and choose the solutions that align with their specific needs. Our platform is designed to be tailored to match your unique requirements.",
    imageSrcLight: solutionsLight,
    imageSrcDark: solutionsDark,
    imageAlt: "Tailored Solutions"
  },
  {
    header: "Growth without Boundaries",
    description: "Our platform is engineered to grow with you. Whether you're onboarding new employees, or opening new locations, we scale to accommodate your evolving needs.",
    imageSrcLight: GrowthLight,
    imageSrcDark: GrowthDark,
    imageAlt: "Growth without Boundaries"
  },
  {
    header: "Insights & Analytics",
    description: "Track performance metrics with precision and confidence, arming your team with the data-driven knowledge to make strategic decisions that propel your organization forward into a future of growth and success.",
    imageSrcLight: insightsLight,
    imageSrcDark: insightsDark,
    imageAlt: "Insights & Analytics"
  }
];

export default function Features() {
  return (
    <div className="flex flex-col">
      <h4 className="text-primary-600 py-2">Features</h4>
      <h2 className="text-3xl font-bold py-6">The perfect fit for organizations of any size</h2>
      <p className="pb-12 py-2">Discover why Creovia's comprehensive solutions empower startups, enterprises, and everything in between.</p>
      <FeatureShowcase featureData={featureData} className=""/>
    </div>
  );
}