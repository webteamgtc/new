import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import Image from "next/image";

export default function TradingPlatform() {

  const t = useTranslations("home.accountType");

  const accountTypes = [
    {
      bgImage: "/stand.png", // Background Image
      iconSrc: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/standard.webp",
      heading: t("standardAccount.heading"),
    },
    {
      bgImage: "/pro.png", // Background Image
      iconSrc: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/pro.webp",
      heading: t("proAccount.heading"),
    },
    {
      bgImage: "/ecn.png", // Background Image
      iconSrc: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/ecn.webp",
      heading: t("ecnAccount.heading"),
    },
  ];

  return (
    <section className="py-10 lg:py-[70px]  bg-[url('/line-bg.jpg')] bg-cover bg-center">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Section - Asset Markets */}
          <div className="text-center md:text-left basis-full md:basis-2/4">
      
            <h2 className="HeadingH2 md:text-4xl mb-5 font-medium">
            +27,000  <span className="text-secondary font-normal  md:text-3xl">Trading Instruments</span>
        </h2>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3">
              <div className="relative w-full h-36 md:h-80">
                <Image
                  src="/assests.webp"
                  alt="8 Asset Markets"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="md:w-[690px] md:ml-[-140px]">
              <h2 className="HeadingH2 lg:text-[45px] mb-8 text-secondary font-medium md:text-left italic">
              Assets Markets
        </h2>
            
                <p className="text-lg md:text-sm text-secondary"> Forex | CFDs | Metals | Shares | Commodities | Stocks | Energies </p>
              </div>
            </div>
          </div>

          {/* Right Section - Account Types */}
          <div className="text-center basis-full md:basis-2/4">
           {/* Section Title */}
        <h2 className="HeadingH2 mb-5 font-medium">
          {t("heading")}
        </h2>
        <p className="text">{t("desc")}</p>

            {/* Account Type Boxes with Background Images */}
            <div className="flex flex-row justify-center items-center md:gap-4 mt-6">
              {accountTypes.map((account, index) => (
                <div
                  key={index}
                  className="w-[33%] h-[195px] md:w-36 md:h-36 flex flex-col items-center justify-center relative overflow-hidden gap-8"
                  style={{
                    backgroundImage: `url(${account.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Link href='/account-types' className="flex flex-col md:flex-row justify-start items-center hover:underline cursor-pointer gap-2">
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                      <Image
                        src={account.iconSrc}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text text-[10px] md:text-sm line-clamp-2 font-semibold uppercase md:w-20 text-left">{account.heading}</p>
                    </Link>
                  <Link
                    href="/account-types"
                    className="text-sm md:text-sm text-secondary px-2 md:py-1 rounded-lg hover:text-primary transition mt-2"
                  >
                      {t('view_more')}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
