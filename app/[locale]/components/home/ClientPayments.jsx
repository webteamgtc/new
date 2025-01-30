import React from "react";
import Image from "next/image";
import LiveAccountButton from "../liveAccountButton";

const ClientPayments = () => {
    return (
        <section className="py-10 lg:py-[40px] border-b border-t border-b-gray-300 bg-[#fff]">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    
                    {/* Left Section - Text and Button */}
                    <div className="basis-full md:basis-2/5">
                    <h2 className="HeadingH2 mb-5 bg-gradient-to-r from-primary via-secondary  from-10% to-primary to-90% font-medium inline-block text-transparent bg-clip-text text-left max-w-sm">
                    Method of Payment,
                            Card Types Accepted & Currency
        </h2>
                        <p className="text-gray-600 mb-6">
                            We accept payments online using Visa and MasterCard credit/debit card in AED 
                            (and/or any other available currency listed in the payments section).
                        </p>
                        
                    </div>

                    {/* Right Section - Client Testimonials */}
                    <div className="basis-full md:basis-3/5 relative w-full h-[350px]">
                      <Image src="/clientpayments.webp" fill alt="GTCFX Client Payments" className="object-contain" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ClientPayments