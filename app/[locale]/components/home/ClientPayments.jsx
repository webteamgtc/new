import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";


const ClientPayments = () => {
    const t = useTranslations("home")
    return (
        <section className="py-10 lg:py-[40px] border-b border-t border-b-gray-300 bg-[#fff]">
            <div className="container mx-auto lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    
                    {/* Left Section - Text and Button */}
                    <div className="text-center md:text-left text">
                        <h2 className="HeadingH2 mb-5 bg-gradient-to-r from-primary via-secondary from-10% to-primary to-90% font-medium inline-block text-transparent bg-clip-text md:text-left max-w-lg px-10 md:px-0">
                            {t("our-payment")}
                        </h2>
                        <p>
                        {t("our-payment2")}
                        </p>
                    </div>

                    {/* Right Section - Client Testimonials */}
                    <div className="relative w-full h-[200px] md:h-[400px]">
                        <Image src="/clientpayment.webp" fill alt="GTCFX Client Payments" className="object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientPayments;
