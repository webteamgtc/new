import React from "react";
import Image from "next/image";
import LiveAccountButton from "../liveAccountButton";
import JoinIBNetwork from "./JoinIBNetwork";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ClientsNetwork = () => {

    const t = useTranslations("home.home_IB")
    return (
        <>
        <section className="py-10 lg:py-[70px] border-b border-t border-b-gray-300">
            <div className="container mx-auto lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    
                    {/* Left Section - Text and Button */}
                    <div className="basis-full md:basis-2/5 text-center md:text-left" >
                    <h2 className="HeadingH2 mb-5 font-medium max-w-[200px] md:max-w-sm  text-left">
                  {t("title")}
        </h2>
                        <p className="text-gray-600 mb-6">
                        {t("des")}
                        </p>
                        <div className="mt-5">
                        <Link
                            href=""
                            target="_blank"
                            className={`bg-secondary text-white text-sm 3xl:text-xl px-8 capitalize py-2 text-center md:w-auto w-[300px] md:m-0 mx-auto transition-colors duration-900 hover:bg-primary duration-500`}
                            >
                            Become an Introducing Broker
                            </Link>
                            </div>
                    </div>

                    {/* Right Section - Client Testimonials */}
                    <div className="basis-full md:basis-3/5 relative w-full h-72 md:h-[400px]">
                      <Image src="/client-network.webp" fill alt="Client Network" className="object-contain" />
                    </div>

                </div>
                <JoinIBNetwork />
            </div>
        </section>
        <section className="py-5 text-center bg-primary">
                <div className="container">
                <h2 className="HeadingH2 bg-gradient-to-r from-secondary via-[#dcc8b2]  from-10% to-secondary to-90% inline-block text-transparent bg-clip-text font-semibold uppercase mb-0"> {t("label")}</h2>
                </div>
        </section>
        </>
    );
};

export default ClientsNetwork;
