'use client';
import React from "react";
import { IoMdArrowDropright} from "react-icons/io"
import Link from "next/link";
import { useRouter } from 'next/navigation';

function Category({category}) {
    const { push } = useRouter()
    function redirect(){
        push(`/category/${category}`)

    }

    
    return ( 
        <div onClick={redirect} className="accordion w-full h-24 p-8 justify-between bg-slate-950  cursor-pointer flex flex-row outline-4 outline-gray-950">
           <h5 className="md:text-3xl text-lg tracking-tight font-bold h-full ">Go to {category || "Electronics"}</h5>
           
            < IoMdArrowDropright className="text-3xl md:items-end "/>

    
        </div>

        
     );
}

export default Category;