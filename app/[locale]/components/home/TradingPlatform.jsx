import Image from "next/image";
import { useTranslations } from "next-intl";
import { MdSwitchAccount } from "react-icons/md";
import Link from "next-intl/link";

export default function TradingPlatform() {
  const t = useTranslations("home.accountType");

  const accountTypes = [
    {
      iconSrc: "/account1.webp",
      heading: t("standardAccount.heading"),
      bgImage: "/account1.webp", // Dynamic background
    },
    {
      iconSrc: "/account2.webp",
      heading: t("proAccount.heading"),
      bgImage: "/account2.webp", // Dynamic background
    },
    {
      iconSrc: "/account3.webp",
      heading: t("ecnAccount.heading"),
      bgImage: "/account3.webp", // Dynamic background
    },
  ];

  return (
    <section className="py-10 lg:py-[90px] bg-[#ECF3FD] bg-[url('/gtcfx-bg.webp')] bg-cover bg-center">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="HeadingH2 mb-5 bg-gradient-to-r from-primary via-secondary to-primary font-medium inline-block text-transparent bg-clip-text">
          {t("heading")}
        </h2>
        <p className="text max-w-6xl mx-auto mb-8">{t("desc")}</p>

        {/* Account Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {accountTypes.map((account, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 h-80 p-8 bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${account.bgImage})` }} // Dynamic Background
            >
              {/* Heading at the Top */}
              <h4 className="text-primary text-lg uppercase font-medium">
                {account.heading}
              </h4>

              {/* Spacer to push button to the bottom */}
              <div className="flex-grow"></div>

              {/* Button at the Bottom */}
              <Link href="/account-types" className="bg-[#263f8f] text-white font-medium uppercase w-36 block py-2 hover:bg-secondary hover:text-white transition">
           
                 {t('view_more')}
                
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
