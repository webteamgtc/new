import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";
import Link from "next/link";
import { useLocationDetail } from "@/context/useLocationDetail";

const Button = () => {
  const t = useTranslations("common");
  const { countryCode } = useLocationDetail();
  const router = useRouter();
  const locale = useLocale();

  // Define region-specific conditions
  const europeanCountries = ['AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'];
  
  const isEuropean = europeanCountries.includes(countryCode);
  const isChilean = countryCode === 'CL'; // Only Chile is included
  const isJapanese = countryCode === 'JP';
  const isPakistani = countryCode === 'PK';
  const isIndian = countryCode === 'IN';
  const isIranianOrFarsi = countryCode === 'IR' || locale === 'fa-IR'; // Check for Iran or Farsi language

  // Define the registration link based on the locale and country code
  const registrationLink = isIranianOrFarsi ? 'https://mygtcportal.com/getview?view=register&token=es8owwwwAowwwwww' :
    isEuropean ? 'https://my.gtcfx.com/getview?view=register&token=exhowwwwe2owwwww' :
      isChilean ? 'https://mygtcportal.com/getview?view=register&token=eKwpowwwAowwwwww' : // Only Chile uses this token
      isJapanese ? 'https://mygtcportal.com/getview?view=register&token=e2v3owww2wowwwww' :
        isPakistani ? 'https://mygtcportal.com/getview?view=register&token=e9tcowwwjowwwwww' :
          isIndian ? 'https://mygtcportal.com/getview?view=register&token=e9t3owwwrowwwwww' :
            'https://mygtcportal.com/getview?view=register&token=exhowwwwe2owwwww'; // Default link


  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center relative">
      <Link
        className="bg-gradient-to-r from-[#263f8f] via-[#263f8f] to-[#263f8f] shine-button text-white text-sm 3xl:text-xl px-8 py-2 text-center md:w-auto uppercase w-[300px] md:m-0 mx-auto duration-500 transition-colors hover:bg-gradient-to-r hover:from-[#10122d]  hover:to-[#1b245e]"
        href={registrationLink}
        target="_blank"
      >
        {t("liveAccount")}
      </Link>
      <button
        className="bg-secondary text-white text-sm 3xl:text-xl px-8 py-2 text-center md:w-auto w-[300px] md:m-0 uppercase mx-auto transition-colors duration-900 hover:bg-gradient-to-r hover:from-[#10122d]  hover:to-[#1b245e] duration-500"
        onClick={() => {
          router.push("/free-demo-account", { locale: locale });
        }}
      >
        {t("demoAccount")}
      </button>
    </div>
  );
};

export default Button;
