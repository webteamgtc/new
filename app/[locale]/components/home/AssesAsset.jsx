import React from "react";
import Image from "next/image";

const AssesAsset = ({ assetData, title }) => {
    return (
        <section className="py-10 md:pt-[46px] md:pb-0 text-center bg-[url('/why-bg.webp')] bg-cover bg-center text-white">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    {/* Left Section - Mobile Trading Image */}
                    <div className="relative w-full h-72 md:h-[450px]">
                        <Image
                            src="/gtcfx-asset.webp" // Replace with actual path
                            alt="Trading Platform"
                           fill
                            className="object-contain"
                        />
                    </div>

                    {/* Right Section - Title and Asset Icons */}
                    <div className="text-center lg:text-left">
                    <h2 className="HeadingH2 mb-8 bg-gradient-to-r from-secondary via-[#dcc8b2]  from-10% to-secondary to-90% inline-block text-transparent bg-clip-text font-medium">{title}</h2>

                        {/* Asset Icons Grid */}
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                            {assetData.map((asset, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div className="relative h-20 w-20 flex items-center justify-center">
                                        <Image
                                            src={asset.imageUrl}
                                            alt={asset.alt}
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="text-xs md:text-sm font-medium mt-2 uppercase">{asset.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssesAsset;
