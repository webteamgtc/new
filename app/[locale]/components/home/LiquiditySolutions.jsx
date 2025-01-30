import React from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import LiquidityCarousel from "./LiquidityCarousel";


const LiquiditySolutions = () => {
  const tabs = ["Liquidity", "Technology", "Bridge", "Risk Management"];
  
  const renderTabContent = (tab) => {
    switch (tab) {
      case "Liquidity":
        return <LiquidityCarousel />;
      case "Technology":
        return <LiquidityCarousel />;
      case "Bridge":
        return <LiquidityCarousel />;
      case "Risk Management":
        return <LiquidityCarousel />;
      default:
        return null;
    }
  };

  return (
    <section className="py-10 lg:py-[46px] bg-[#ECF3FD] text-center">
      <div className="container mx-auto px-6 lg:px-16">
      <div className="text-center mb-6">
        <h2 className="HeadingH2 mb-5 bg-gradient-to-r from-primary via-secondary  from-10% to-primary to-90% font-medium inline-block text-transparent bg-clip-text text-center">
        GTCFX Liquidity Solutions
        </h2>
        <p className="text-accent md:text-base text-sm 2xl:text-[17px] text-center max-w-6xl mx-auto"> Tailored Liquidity Solutions Powered by Advanced Technology for Global Professional Clients
        </p>
        </div>
       
        {/* Tabs */}
        <Tab.Group>
          <Tab.List className="flex justify-center space-x-4 mb-6">
            {tabs.map((tab, index) => (
              <Tab key={index} className={({ selected }) => clsx("px-4 py-2 border", selected ? " bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90% text-white" : "border-gray-400 text-gray-700")}> 
                {tab}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            {tabs.map((tab, index) => (
              <Tab.Panel key={index}>
                {renderTabContent(tab)}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        {/* Footer Text */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-bold text-[#A07C47]">UNLOCKING PROFITABLE OPPORTUNITIES</h3>
          <p className="text-gray-800 mt-2">YOUR BEST INVESTMENT JOURNEY BEGINS WITH US</p>
        </div>
      </div>
    </section>
  );
};

export default LiquiditySolutions;
