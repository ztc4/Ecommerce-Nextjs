"useClient"
import Image from "next/image";
import Link from "next/link";
import React from "react"

function CartSection({item}) {
    // const[setItem, Item] = React.useState({
    //     title: title,price: price, quantity
    // })

    return ( 
        <div className="h-24 mt-6 w-full flex-row flex border-2 border-gray-2500" onClick={()=>console.log("clicked")}>
            <div className="h-full p-4  basis-2/6 ">
                <Image
                src="/iphone14.jpg"
                width={50} height={50} 
                className="m-auto"
                alt={"alt"}
                />
                
            </div>
            <div className="flex-col justify-start pl-2 flex basis-4/6  text-gray-950">
                <div className="flex flex-row justify-between items-start basis-full">
                    <Link href="" className="text">This is the title of the object</Link>
                    <p className="font-light text-sm text-black uppercase tracking-tighter mr-1 mt-0">$34.00</p>
                </div>
                <div className="flex flex-row my-2 md:my-5">
                    <div className="subtract bg-gray-400 w-8 pl-3 rounded-l-3xl cursor-pointer hover:bg-gray-800">-</div>
                    <div className="bg-gray-400 w-12">QTY:{1 || 1}</div>
                    <div className="add bg-gray-400 w-8 pl-3 cursor-pointer rounded-r-3xl hover:bg-gray-800">+</div>
                </div>
            </div>

        </div>
     );
}

export default CartSection
