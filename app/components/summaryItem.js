"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";

function SummaryItem({data}) {
    return ( 
        <div className="h-24 px-4 py-2 w-full md:w-10/12 flex-row border-t-2 flex border-b-2 pb-2 hover:bg-white md:border-2 border-gray-2500" >
            <div className="h-full p-4  basis-2/6 ">
                <Image
                src={`/${data.image}.jpg`}
                width={50} height={50} 
                className="m-auto p-1"
                alt={data.title}
                />
                
            </div>
            <div className="flex-col justify-start p-2 flex basis-4/6  text-gray-950">
                <div className="flex flex-row justify-between items-start basis-full">
                    <Link href={``} className="text-sm capitalize md:text-base">{data.title}</Link>
                    <p className="font-light text-sm uppercase text-black tracking-tighter mr-1 mt-0">${data.price}</p>
                </div>
                <div className="flex flex-row my-2 md:my-5">
                    
                    <div className="w-6 text-sm md:text-base capitalize font-semibold" >quantity:{data.quantity}</div>
                    
                </div>
            </div>

        </div>
     );
}

export default SummaryItem;