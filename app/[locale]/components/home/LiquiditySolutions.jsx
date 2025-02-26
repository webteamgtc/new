import React from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import LiquidityCarousel from "./LiquidityCarousel";
import { useTranslations } from "next-intl";
import TechnologyCarousel from "./TechnologyCarousel";
import BridgeCarousel from "./BridgeCarousel";
import Link from "next/link";

const LiquiditySolutions = () => {

  const t= useTranslations("home.liquidity_provider")

  const tabs = [t("tab.one.title"), t("tab.two.title"), t("tab.three.title")];
  const renderTabContent = (tab) => {
    switch (tab) {
      case "Liquidity":
        return <LiquidityCarousel />;
      case "Technology":
        return <TechnologyCarousel />;
      case "Bridge":
        return <BridgeCarousel />;
      default:
        return null; 
    }
  };

  return (
    <section className="py-10 lg:py-[70px] bg-[#ECF3FD] bg-[url('/platform-bg.png')] bg-cover bg-center bg-blend-multiply text-center">

      <div className="container mx-auto px-6 lg:px-16">
      <div className="text-center mb-6">
        <h2 className="HeadingH2  font-medium mb-5 text-center">
        {t("heading")}
        </h2>
        <p className="text-accent md:text-base text-sm 2xl:text-[17px] text-center max-w-6xl mx-auto"> {t("desc")}
        </p>
        </div>
       
        {/* Tabs */}
        <Tab.Group>
          <Tab.List className="flex flex-col md:flex-row justify-center gap-4 mb-6">
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
          <h3 className="text-sm md:text-xl font-bold text-secondary">{t("lpLabel")}</h3>
          <p className="text-xs md:text-sm text-primary mt-2 mb-10">{t("lpLabel1")}</p>
          <Link
      href="/lp"
      target="_blank"
      className={`bg-secondary text-white text-sm 3xl:text-xl px-8 capitalize py-2 text-center md:w-auto w-[300px] md:m-0 mx-auto transition-colors duration-900 hover:bg-primary duration-500`}
    >
      {t("butttonLp")}
    </Link>
        </div>
      </div>
    </section>
  );
};

export default LiquiditySolutions;
