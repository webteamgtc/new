"use client";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { sanitize } from "isomorphic-dompurify";
import { useTranslations } from "next-intl";

const AccordionItem = ({ toggle, open, title, paragraphs }) => {
  return (
    <div>
      <div
        className={`py-[14px] px-[15px] lg:px-12 bg-white flex gap-2 justify-between items-center cursor-pointer`}
        onClick={toggle}
      >
        <p className={`text-[16px]  text-accent font-medium`}>{title}</p>
        <div className={`text-[24px] text-accent font-medium`}>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <div className="border-b border-gray-300 w-[90%] mx-auto" />
      <Collapse
        isOpened={open}
        className="border"
        style={{ border: "1px solid #D4D4D4" }}
      >
        <div className="bg-white px-2 md:px-[10px] py-[20px] lg:px-12 border-1 border-solid border-[#d4d4d4] space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base ltr:text-left rtl:text-right"
              dangerouslySetInnerHTML={{
                __html: sanitize(paragraph),
              }}
            />
          ))}
        </div>
      </Collapse>
    </div>
  );
};

const FrequentlyAskedQuestions = ({ data }) => {
  const t = useTranslations("prime-tech.pamm");
  if (!data || data?.length < 1) return <></>;
  const isOneElement = data.length === 1;
  const [openIndex, setOpenIndex] = useState(isOneElement ? 0 : null);
  const toggle = (index) =>
    isOneElement ? setOpenIndex(openIndex === 0 ? 1 : 0) : setOpenIndex(index);

  return (
    <section className="container pb-12 mb-28">
      <h2 className="HeadingH2 mb-5">
        {t("faq.faqHeading")}
      </h2>
      <div className="border border-gray-300">
        {data.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              open={index === openIndex ?? false}
              title={item.title}
              paragraphs={item.paragraphs}
              toggle={() => toggle(index)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
