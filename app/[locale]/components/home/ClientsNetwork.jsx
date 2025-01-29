import React from "react";
import Image from "next/image";
import LiveAccountButton from "../liveAccountButton";

const ClientsNetwork = () => {
    return (
        <section className="py-10 lg:py-[46px] border-b border-t border-b-gray-300 bg-[url('/gtcfx-bg.webp')] bg-cover bg-center">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    
                    {/* Left Section - Text and Button */}
                    <div className="basis-full md:basis-2/5">
                    <h2 className="HeadingH2 mb-5 bg-gradient-to-r from-primary via-secondary  from-10% to-primary to-90% font-medium inline-block text-transparent bg-clip-text text-left max-w-sm">
                    GROW YOUR CLIENTS NETWORK WITH US!
        </h2>
                        <p className="text-gray-600 mb-6">
                            Unlock the potential for profit by opening a live account and trading 
                            our competitive financial products with the most favorable spreads. 
                            Seize opportunities in rate fluctuations to maximize your profits effectively.
                        </p>
                        <div className="mt-5">
                            <LiveAccountButton />
                            </div>
                    </div>

                    {/* Right Section - Client Testimonials */}
                    <div className="basis-full md:basis-3/5 relative w-full h-[500px]">
                      <Image src="/client-network.webp" fill alt="Client Network" className="object-contain" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ClientsNetwork;
