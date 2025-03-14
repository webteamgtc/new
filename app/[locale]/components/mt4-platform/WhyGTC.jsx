import { useTranslations } from 'next-intl';
import React from 'react';
import { TiTick } from "react-icons/ti";


const WhyGTC = ({imgSrc}) => {
    const t = useTranslations("platform.mt4PlatformPage.whyGtcList")
    const whyGtcList = [
        {
            fact:t("one"),
            icon:<TiTick size={30} color=' #FFD300'/>
        },
        {
            fact:t("two"),
            icon:<TiTick size={30} color=' #FFD300'/>
        },
        {
            fact:t("three"),
            icon:<TiTick size={30} color=' #FFD300'/>
        },
        {
            fact:t("four"),
            icon:<TiTick size={30} color=' #FFD300'/>
        },
        {
            fact:t("five"),
            icon:<TiTick size={30} color=' #FFD300'/>
        }  
    ]
    
  return (
    <section className='py-12 bg-gray-200'>
    <div className='container flex flex-col md:flex-row justify-evenly items-center gap-2 md:px-16'>
        
        <div className='flex-1'>
            <h2 className='text-primary md:text-3xl text-2xl font-bold whitespace-nowrap md:text-left text-center my-10'>
            {t("heading")}
            </h2>
            <ul>
                {
                    whyGtcList.map((el,index)=>{
                        return(
                            <li 

                            key={index}
                            className='flex items-center h-12 gap-5'
                            ><span>{el.icon}</span><p>{el.fact}</p></li>
                        )
                    })
                }
               
            </ul>
        </div>
        <div className='flex-1'>
            <img
                src={imgSrc}
                alt='section image'
                className='w-[60%] mx-auto md:m-0 md:w-[90%]'
            />
        </div>
    </div>
</section>
  )
}

export default WhyGTC;