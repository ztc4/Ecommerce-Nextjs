
import React from "react";
import { IoMdArrowDropright} from "react-icons/io"
import Link from "next/link";

function Category({category}) {

    
    return ( 
        <Link href={`/category/${category}`} className="accordion w-full h-24 p-8 justify-between bg-slate-950  cursor-pointer flex flex-row outline-4 outline-gray-950">
           <h5 className="md:text-3xl text-lg tracking-tight font-bold h-full ">Go to {category || "Electronics"}</h5>
           
            < IoMdArrowDropright className="text-3xl md:items-end "/>

    
        </Link>

        
     );
}

export default Category;