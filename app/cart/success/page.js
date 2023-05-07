"use client"

import Cookies from "js-cookie";
import React,{ useEffect } from "react";

Cookies

async function Success() {

    async function deleteItems(){
        
        let data =  await fetch(`https://nameless-sierra-64099.herokuapp.com/cart/${Cookies.get("id")}/success`,{
            method:"DELETE"
        })
        .then(res => res)
        
      
        return data}
    useEffect(()=>{
        deleteItems


    },[])
    return ( 
        <div className=" bg-gray-300 flex justify-center items-center">
            <h1 className="text-4xl text-gray-900 tracking-tighter uppercase font-light">Successfully Payed for Items</h1>

        </div>
     );
}

export default Success;