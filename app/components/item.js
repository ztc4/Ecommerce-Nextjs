"use client";
import React from "react";
import Image from "next/image";

function Item(props) {
    const [price,setPrice ] = React.useState(1)
    function changePrice(){
        setPrice( current => current + 1)
    }
    return (  
        <div className="card h-56 w-48 md:w-56
        md:h-72 shrink-0 flex flex-col bg-gray-200  rounded-lg border-y-4 border-y-rose-400 border-e-4 border-4 border-x-amber-400 m-4 hover:cursor-pointer">
            <Image 
            src={""}
            className="basis-9/12 "
            alt={""}
            ></Image>
            <div className="basis-3/12 flex flex-col bg-gray-200 p-4">
                <h5 className="text-black font-extrabold letter tracking-widest">{props.name || "name"}</h5>
                <p className="text-gray-700 text-sm" onClick={changePrice}>Price: {props.price || price}</p>

            </div>
        

            

        </div>
    );
}

export default Item;