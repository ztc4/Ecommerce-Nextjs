'use client';
import React, { useEffect, useState } from "react";

import CartSection from "./carts-section";
import Cookies from "js-cookie";
import Link from "next/link";

function CartItems() { 
    
let [info,setInfo] = React.useState();
let components;


let [total,setTotal] = useState(0)


React.useEffect(function(){
    getCartItems()
    console.log(info)

},[])
  async function getCartItems(){
    console.log(Cookies.get("id"))
    let data =  await fetch(`https://bnwvz86ty1.execute-api.us-east-1.amazonaws.com/dev/cart/${Cookies.get("id")}`)
    .then(res => res.json())
    .then(res => res)
    console.log(data)
    setTotal(data.totalprice)
    console.log(total)
    setInfo(data.items)
    return data}
    

function changeTotal(price){
    setTotal( current => current += price)

}
function removeDecimalPast2(number){

        number = number.toString()
  
        let array = number.split(".")
        console.log(8,array)
        console.log(array[1]?.length)
        if(array[1]?.length > 2){
            array[1] = array[1].slice(0,2)
        }
      return  array.join(".")
    

}
    
removeDecimalPast2(total)
    
 if(info){
    components = info.map((current,index) => {

    
    return <CartSection data={current} index={index} changeTotal={changeTotal}   key={index}/>})
    console.log("components" + components)
    console.log(typeof components == "object")

 }




    return ( 
        <div className="min-h-fit w-10/12 md:w-6/12 mx-auto p-5 border-y-2 border-gray-2500 my-5 " >
            <div className="border-gray-300 border-b-2">
                <h5 className="w-11/12  text-2xl  font-medium text-gray-950">Shopping Cart</h5>
                <div className="flex flex-row justify-between">
                    <p className="text-emerald-600">double click on items to delete</p>
                    <p className="text-gray-950"> Price</p>
                </div>
            </div>
            {components}
            {!components ? <p className="text-gray-950 text-xl mt-8"> There is currently nothing in the cart</p>: ""
            
            }

            <div className="border-gray-300 mt-8 border-t-2 w-full flex justify-end ">
                <p className="text-gray-950">Subtotal({info && info.length > 0 ?`${info.length} items` : "0 items" }): <span className="font-bold">${removeDecimalPast2(total)}</span></p>

            </div>
            {components &&
            <div className="flex flex-row justify-end">
                <Link href="/cart/checkout" className="text-gray-950 p-4 duration-500 hover:scale-110 mt-12 text-right bg-amber-200">Proceed to checkout</Link>
            </div>
            
            }
            
            
        

        </div>
     );
}

export default CartItems;