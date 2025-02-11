'use client'
import Hero from "./components/home/Hero";
import { useTranslations } from "next-intl";
import WhyGTC from "./components/home/WhyGTC";
import Markets from "./components/home/Markets";
import SecurityFund from "./components/home/SecurityFund";
import StatCounter from "./components/home/StatCounter";
import AOS from "aos";
import "aos/dist/aos.css";
import LocationContextProvider from "../../context/location-context";
import { LiveChatWidget } from "@livechat/widget-react";
import AssesAsset from "./components/home/AssesAsset";
import TradingPlatform from "./components/home/TradingPlatform";
import { useParams } from "next/navigation";
import ClientsNetwork from "./components/home/ClientsNetwork";
import ClientPayments from "./components/home/ClientPayments";
import LiquiditySolutions from "./components/home/LiquiditySolutions";
 
export default function HomePage() {
  const t = useTranslations("home"); 

  const router = useParams();
  const { locale } = router;

  // Dynamically handle value based on locale
  const dynamicValue = locale === "zh-hans" || locale === "zh-TW" ? 1350 : 135;
  

  const statsOne = [
    { value: 985000, description: t("hero.fact_desc1"), prepend: "+" },
    { value: 27000, description: t("hero.fact_desc2"), symbol: "", prepend: false, },
    { value: 20, description: t("hero.fact_desc3"), bold: t("hero.fact_no3"), prepend: "+", },
    {
      value: dynamicValue, // Dynamically set based on locale
      description: t("hero.fact_desc4"),
      bold: t("hero.fact_no4"),
      symbol: t("hero.fact_syn1"),
      prepend: true,
    },

  ];
  const assetData = [
    {
      name: t("products.title1"),
      description: t("products.desc1"),
      imageUrl: "/icons-new/icons-30.webp",
      alt: "Forex"
    },
    {
      name: t("products.title2"),
      description: t("products.desc2"),
      imageUrl: "/icons-new/icons-31.webp",
      alt: "Crypto CFDs"
    },
   
    {
      name: t("products.title4"),
      description: t("products.desc4"),
      imageUrl: "/icons-new/icons-32.webp",
      alt: "CFDs"
    },
    {
      name: t("products.title5"),
      description: t("products.desc5"),
      imageUrl: "/icons-new/icons-34.webp",
      alt: "Commodities"
    }, {
      name: t("products.title6"),
      description: t("products.desc6"),
      imageUrl: "/icons-new/icons-36.webp",
      alt: "Indices"
    }, {
      name: t("products.title7"),
      description: t("products.desc7"),
      imageUrl: "/icons-new/icons-35.webp",
      alt: "Indices"
    },
    {
      name: t("products.title8"),
      description: t("products.desc8"),
      imageUrl: "/icons-new/icons-38.webp",
      alt: "Indices"
    },
     {
      name: t("products.title3"),
      description: t("products.desc3"),
      imageUrl: "/icons-new/icons-33.webp",
      alt: "Indices"
    },
  ];

  return (
    <>
      <LiveChatWidget license="13507356" />
      <LocationContextProvider>
        <Hero />
        <StatCounter stats={statsOne} />
        <WhyGTC />
        <Markets />
        <TradingPlatform />
        <SecurityFund />
        <AssesAsset assetData={assetData} title={t("products.heading")} columns={4} />
        <ClientsNetwork />
        <LiquiditySolutions />
        <ClientPayments />
        {/* <CompanyNews/> */}
      </LocationContextProvider>
    </>
  );
}
