"use client"

import Cookies from "js-cookie";
import React,{ useEffect } from "react";

Cookies

async function Success() {

    async function deleteItems(){
        
        let data =  await fetch(`https://bnwvz86ty1.execute-api.us-east-1.amazonaws.com/dev//cart/${Cookies.get("id")}/success`,{
            method:"DELETE"
        })
        .then(res => console.log(res))
        
      
        return data}
    useEffect(()=>{
        deleteItems()


    },[])
    return ( 
        <div className=" bg-gray-300 flex min-h-screen  justify-center items-center">
            <h1 className="text-4xl text-gray-900 tracking-tighter uppercase font-light">Successfully Payed for Items</h1>

        </div>
     );
}

export default Success;