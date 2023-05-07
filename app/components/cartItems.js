'use client';
import React, { useEffect, useState } from "react";

import CartSection from "./carts-section";
import Cookies from "js-cookie";

function CartItems() { 
    
let [info,setInfo] = React.useState();
let components;
let total = 0;
let items = 0;
let [render,rerender] = useState(0)
function newRender(){
    console.log(render)
   rerender(current => current += 1)
}

React.useEffect(function(){
    getCartItems()

},[])
  async function getCartItems(){
    console.log(Cookies.get("id"))
    let data =  await fetch(`https://nameless-sierra-64099.herokuapp.com/cart/${Cookies.get("id")}`)
    .then(res => res.json())
    .then(res => res)
    setInfo(data.items)
    return data}
    
    
    
    
  
    // rr =data.items
    
 if(info){
    components = info.map((current,index) => {
       total += current.price *current.quantity
       items += current.quantity
    
    return <CartSection data={current} newRender={newRender} key={index}/>})

 }


console.log(total)


    return ( 
        <div className="min-h-fit w-10/12 md:w-6/12 mx-auto p-5 border-y-2 border-gray-2500 my-5 " >
            <div className="border-gray-300 border-b-2">
                <h5 className="w-11/12  text-2xl  font-medium text-gray-950">Shopping Cart</h5>
                <div className="flex flex-row justify-between">
                    <p className="text-emerald-600">Select all items</p>
                    <p className="text-gray-950"> Price</p>
                </div>
            </div>
            {components}

            <div className="border-gray-300 mt-8 border-t-2 w-full flex justify-end ">
                <p className="text-gray-950">Subtotal({ items + " items"}): <span className="font-bold">${total}</span></p>

            </div>
            
            
        

        </div>
     );
}

export default CartItems;