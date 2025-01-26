import { createTranslator } from "next-intl";
import React from "react";
import GlossaryFaqs from "../pages/GlossaryFaqs";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/glossary-faqs`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/glossary-faqs`;

  return {
    title: t("platform.glossary.metaData.title"),
    description: t("platform.glossary.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <GlossaryFaqs />;
};

export default Page;
