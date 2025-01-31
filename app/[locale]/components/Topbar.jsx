import React, { useContext } from 'react';
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";
import Link from "next-intl/link";
import { MdOutlineLogin } from "react-icons/md";
import Language from "./Language";
import { useLocationDetail } from "@/context/useLocationDetail";

const TopBar = ({ currentLanguage, isAr, href }) => {
    const t = useTranslations("navigation");
    const router = useRouter();
    const locale = useLocale();
    const location = useContext(useLocationDetail);
    const { countryCode } = useLocationDetail();

    // Define region-specific conditions
    const europeanCountries = ['AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'];
    
    const isEuropean = countryCode && europeanCountries.includes(countryCode);
    const isChilean = countryCode === 'CL'; // Check if the country is Chile
    const isJapanese = countryCode === 'JP';
    const isIranianOrFarsi = countryCode === 'IR' || locale === 'fa-IR'; // Check for Iran or Farsi language

    // Define base links for different regions
    const baseLink = (() => {
        if (isIranianOrFarsi) {
            return 'https://mygtcportal.com/getview?view=register&token=es8owwwwAowwwwww'; // Iranian or Farsi
        } else if (isEuropean) {
            return 'https://my.gtcfx.com/getview?view=register&token=exhowwwwe2owwwww'; // European
        } else if (isChilean) {
            return 'https://mygtcportal.com/getview?view=register&token=eKwpowwwAowwwwww'; // Chilean token
        } else if (countryCode === 'JP') {
            return 'https://mygtcportal.com/getview?view=register&token=e2v3owww2wowwwww'; // Japanese
        } else if (countryCode === 'PK') {
            return 'https://mygtcportal.com/getview?view=register&token=e9tcowwwjowwwwww'; // Pakistani
        } else if (countryCode === 'IN') {
            return 'https://mygtcportal.com/getview?view=register&token=e9t3owwwrowwwwww'; // Indian
        } else {
            return 'https://mygtcportal.com/getview?view=register&token=exhowwwwe2owwwww'; // Default
        }
    })();

    const baseLink2 = isEuropean ? 'https://my.gtcfx.com' : isJapanese ? 'https://mygtcportal.com' : 'https://mygtcportal.com';
    
    const newClientPortalLink = `${baseLink2}/`;
    const accountLink = `${baseLink}`;
    const registerLink = `${baseLink}`;

    return (
        <section className="hidden md:block border-b border-gray-200 bg-[#ECF3FD]" id="register1">
            <div className="container flex flex-row justify-between items-center">
                <div className="content-top border-l pl-2 flex flex-row gap-2">
                    <p className="text-[14px] font-[400] flex gap-2 py-4 ">
                        {t("tobbar.partner")}
                        <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/nasdaq.webp" width={24} height={18} />
                    </p>
                </div>
                <div className={`flex items-center gap-2 ${isAr ? "rtl:md:mr-4" : "ltr:md:ml-4"}`}>
                    <div className="flex flex-col lg:flex-row">
                        <Link href={newClientPortalLink} target="_blank" className="hidden text-primary hover:bg-primary hover:text-white text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center">
                            <MdOutlineLogin size={20} />
                            {t("new_client_portal")}
                        </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <Link href={accountLink} target="_blank" className="hidden text-white uppercase bg-[#29a643] hover:bg-primary hover:text-white text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center">
                            {t("tobbar.account")}
                        </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <Link href='/introductory-broker' className="hidden text-white uppercase bg-secondary hover:bg-primary hover:text-white text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center">
                            {t("tobbar.rgister")}
                        </Link>
                    </div>
                    <Language href={href} currentLanguage={currentLanguage}/>
                </div>
            </div>
        </section>
    );
};

export default TopBar;
