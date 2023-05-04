'use client';
import React from "react";
import cartsSection from "./carts-section";
import CartSection from "./carts-section";

function CartItems() {
    let itemsCount = false
    let total = 45 || 1
    return ( 
        <div className="min-h-fit w-10/12 md:w-6/12 mx-auto p-5 border-4 border-gray-2500 my-5 ">
            <div className="border-gray-300 border-b-2">
                <h5 className="w-11/12  text-2xl  font-medium text-gray-950">Shopping Cart</h5>
                <div className="flex flex-row justify-between">
                    <p className="text-emerald-600">Select all items</p>
                    <p className="text-gray-950"> Price</p>
                </div>
            </div>
            <CartSection/>
            <CartSection/>
            <CartSection/>
            <CartSection/>
            <div className="border-gray-300 mt-8 border-t-2 w-full flex justify-end ">
                <p className="text-gray-950">Subtotal{ itemsCount ? `(${itemsCount} items)` : `(0 items)`}: <span className="font-bold">${total}</span></p>

            </div>
            
            
        

        </div>
     );
}

export default CartItems;