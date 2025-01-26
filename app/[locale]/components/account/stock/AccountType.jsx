"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import AccountTable from "../AccountTable";
import ButtonTabs from "../ButtonTabs";
import TrendingDetail from "./Trending";
import { useLocale, useTranslations } from "next-intl";
import { enAccountTableData } from "../constent/enConstentData";
import { arAccountTableData } from "../constent/arConstentData";
import { zhAccountTableData } from "../constent/zhConstentData";

export default function AccountTypeStock() {
  const [currentTab, setCurrentTab] = useState(0);
  const t = useTranslations("Instruments");
  const locale = useLocale();
  const tabs = [
    {
      label: t("stock.tab1.tabName"),
    },
    {
      label: t("stock.tab2.tabName"),
    },
    {
      label: t("stock.tab3.tabName"),
    },
    {
      label: t("stock.tab4.tabName"),
    },
  ];

  const getHeader = (index) => {
    switch (locale) {
      case "en":
        return enAccountTableData?.[index];
      case "ar":
        return arAccountTableData?.[index];
      case "zh-hans":
        return zhAccountTableData?.[index];
      default:
        return [];
    }
  };

  const getData = (index) => {
    switch (locale) {
      case "en":
        return enAccountTableData?.stockData?.[index];
      case "ar":
        return arAccountTableData?.stockData?.[index];
      case "zh-hans":
        return zhAccountTableData?.stockData?.[index];
      default:
        return [];
    }
  };
  return (
    <div className="w-full container">
      <ButtonTabs />
      <p className="text-base text-primary font-normal pb-3">
        {t("stock.heading")}
      </p>
      <Tab.Group>
        <Tab.List className="border-b border-gray-200">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              onClick={() => setCurrentTab(index)}
              className={`${
                currentTab === index
                  ? "bg-secondary text-primary border border-secondary"
                  : "bg-white text-gray-400 border border-gray-200 border-b-0"
              } py-2 px-6 cursor-pointer font-semibold hover:text-primary hover:bg-secondary hover:border hover:border-secondary mr-3`}
            >
              {tab.label}
            </Tab>
          ))}
        </Tab.List>
        <div className="bg-gray-50 p-3">
          <p className="text-base text-primary font-normal">
            {t("stock.tab1.type")}
          </p>
          <div className="tab-content ">
            <div className="reason-content py-1">
              <h2 className="font-semibold text-2xl text-primary pb-3">
                {currentTab == 3
                  ? t("stock.tab4.subHeading")
                  : t("stock.tab1.subHeading")}
              </h2>
            </div>
          </div>
          <Tab.Panels>
            {tabs.map((tab, index) => (
              <Tab.Panel key={index}>
                {index == 0 ? (
                  <AccountTable
                    header={getHeader("standardHeader")}
                    data={getData("standard") || []}
                  />
                ) : index == 1 ? (
                  <AccountTable
                    header={getHeader("standardHeader")}
                    data={getData("rawSpread") || []}
                  />
                ) : index == 2 ? (
                  <AccountTable
                    header={getHeader("standardHeader")}
                    data={getData("zero") || []}
                  />
                ) : index == 3 ? (
                  <AccountTable
                    header={getHeader("proHeader")}
                    data={getData("pro") || []}
                  />
                ) : null}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
      <TrendingDetail />
    </div>
  );
}
