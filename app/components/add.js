"use client"
import { setCookie } from "cookies-next";

import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
async function Add({data}) {
    function addToCart(){
        console.log(1,data)
        let cookie = Document.cookie
        document.cookie = "87=Yellow"
        document.cookie ="red=hawk"
        console.log("cookies:" + document.cookie)
        
    
    
     }
        
    


    useEffect(()=>{
        
        
    },[])

    
    return ( 
        <div onDoubleClick={addToCart} onClick={()=>console.log(document.cookie)} className="w-8/12 h-12 bg-gray-900 hover:bg-gray-950 mx-auto hover:cursor-pointer">
            <p className="text-center pt-4">Add to Cart</p>
        </div>
        
     );
}

export default Add;