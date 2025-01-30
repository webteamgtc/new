import React from "react";
import Image from "next/image";
import LiveAccountButton from "../liveAccountButton";
import JoinIBNetwork from "./JoinIBNetwork";

const ClientsNetwork = () => {
    return (
        <>
        <section className="py-10 lg:py-[46px] border-b border-t border-b-gray-300 bg-[url('/gtcfx-bg.webp')] bg-cover bg-center">
            <div className="container mx-auto lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    
                    {/* Left Section - Text and Button */}
                    <div className="basis-full md:basis-2/5 text-center md:text-left" >
                    <h2 className="HeadingH2 mb-5 bg-gradient-to-r from-primary via-secondary  from-10% to-primary to-90% font-medium inline-block text-transparent bg-clip-text max-w-[200px] md:max-w-sm  text-left">
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
                    <div className="basis-full md:basis-3/5 relative w-full h-72 md:h-[400px]">
                      <Image src="/client-network.webp" fill alt="Client Network" className="object-contain" />
                    </div>

                </div>
                <JoinIBNetwork />
            </div>
        </section>
        <section className="py-5 text-center bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90%">
                <div className="container">
                <h2 className="HeadingH2 bg-gradient-to-r from-secondary via-[#dcc8b2]  from-10% to-secondary to-90% inline-block text-transparent bg-clip-text font-semibold uppercase mb-0">Join our specialized ib program</h2>
                </div>
        </section>
        </>
    );
};

export default ClientsNetwork;
