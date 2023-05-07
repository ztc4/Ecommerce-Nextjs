

import Image from "next/image";
import Link from "next/link";

function Item({card ,border}) {
    

    return (  
        <Link href={`category/${card.category}/${card.id}`} className={ border ?`card h-56  w-48 md:w-56
        md:h-72 shrink-0 flex flex-col bg-gray-200  rounded-lg  m-4 hover:cursor-pointer hover:scale-105 overflow-hidden  border-y-4 border-y-rose-400 border-e-4 border-4 border-x-amber-400`: `card h-56  w-48 md:w-56
        md:h-72 shrink-0 flex flex-col bg-gray-200  rounded-lg  m-4 hover:cursor-pointer overflow-hidden hover:scale-105`} >
            <Image 
                    src={`/${card.image}.jpg` || `/${card.image}.avif`}
                    height={224}
                    width={192}
                    
                    style={{objectFit: "scale-down"}}
                    className="mx-auto actual-image basis-6/12 max-h-36 "
            alt={card.title}></Image>
            <div className="basis-6/12 flex flex-col bg-gray-300 p-4 ">
                <h5 className="text-gray-800 text-sm md:text-base font-light letter capitalize tracking-widest w-full whitespace-wrap">{card.title || "name"}</h5>
                <p className="text-gray-500 text-sm md:mt-4" >${card.price}</p>

            </div>
        

            

        </Link>
        
    )}

export default Item;