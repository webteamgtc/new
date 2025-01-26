"use client";
import React from "react";
import Hero from "../components/common/Hero";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const RestrictedCountriesPage = () => {
  const t = useTranslations("footerPage");
  const path = usePathname();
  const isAr = path.includes("/ar");

  // Dynamic data for content and countries
  const content = [
    { label: "Australia*", isDynamic: false },
    { label: t("restrictedCountry.content.option.one"), isDynamic: true },
    { label: t("restrictedCountry.content.option.six"), isDynamic: true },
  ];

  const countryListKeys = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirty",
    "foutry",
    "fifty",
    "fifty1",
    "sixty",
    "seventy",
    "eighty",
    "ninty",
    "tten",
    "oneOne",
    "oneTwo",
  ];

  const countries = countryListKeys.map((key) =>
    t(`restrictedCountry.content.list.${key}`)
  );

  return (
    <>
      {/* Hero Section */}
      <Hero
        imageUrl="/trading/banner/latest-news.webp"
        title={t("restrictedCountry.bannerText.heading")}
        description={t("restrictedCountry.bannerText.description")}
      />

      <div className="inner-content py-10">
        <div className="container">
          {/* Main Heading */}
          <h2 className="HeadingH2">
            {t("restrictedCountry.content.mainHeading")}
          </h2>
          <h3 className="HeadingH3 font-medium">
            {t("restrictedCountry.content.subHeading")}
          </h3>

          {/* Content List */}
          <ul
            className={`list-disc text-lg text-primary 
            }`}
          >
            {content.map((item, index) => (
              <li key={index}>{item.label}</li>
            ))}
          </ul>

          {/* Detail Section */}
          <div className="my-4 text-primary text-xl">
            {t("restrictedCountry.content.detail")}
          </div>

          {/* Countries List */}
          <ul
            className={`list-disc text-lg text-primary
            }`}
          >
            {countries.map((country, index) => (
              <li key={index}>{country}</li>
            ))}
          </ul>

          {/* Footer Note */}
          <p className="text-lg pt-10">
            * The Australian Securities and Investments Commission (ASIC) has
            implemented specific regulations governing the trading of margin
            foreign exchange (FX) and contracts for difference (CFDs) to
            enhance consumer protection. Key conditions include:
            <ul className="list-disc text-lg ml-6 pt-3">
              <li>
                Leverage Ratio Limits: ASIC has imposed maximum leverage ratios
                for retail clients, effective from 29 March 2021:
              </li>
              <li>30:1 for CFDs referencing major currency pairs.</li>
              <li>
                20:1 for CFDs referencing minor currency pairs, gold, or major
                stock market indices.
              </li>
              <li>
                10:1 for CFDs referencing commodities (excluding gold) or minor
                stock market indices. 
              </li>
              <li>2:1 for CFDs referencing crypto-assets.</li>
              <li>5:1 for CFDs referencing shares or other assets.</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default RestrictedCountriesPage;
