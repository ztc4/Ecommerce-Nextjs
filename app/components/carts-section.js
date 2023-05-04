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
            <Image
            src="/iphone14.jpg"
            width={60}
            height={100}
            className="h-full   p-5 basis-2/6 "
            
            
            
            />
            <div className="flex-col justify-start flex basis-4/6 bg-sky-950 text-gray-950">
                <div className="flex flex-row justify-between items-start basis-full">
                    <Link href="" className="text">This is the title of the object</Link>
                    <p className="font-semibold mr-1 mt-1">34.00</p>
                </div>
            </div>

        </div>
     );
}

export default CartSection
