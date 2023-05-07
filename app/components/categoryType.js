"use client";
import Link from "next/link";
import React from "react";
function CategoryType({category,type}) {
    let [hover,setHover] = React.useState(false)
  let data = type.map((current,index) => <Link href={`category/${category}`} key={index}><div className="h-6  text-center w-24 hover:cursor-pointer  bg-gray-900">{current}</div></Link>)
  setTimeout(()=> setHover(false),5000)

    return ( 
        <Link href={`/category/${category}`}>
            <div className="h-6 w-24  bg-gray-900 hover:bg-cyan-700 hover:cursor-pointer" onMouseEnter={()=> setHover(true)} >
                <p className="text-center">{category}</p>

            </div>
            {hover && data}

        </Link>
     );
}

export default CategoryType
