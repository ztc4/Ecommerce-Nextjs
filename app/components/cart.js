"use client"

import { CiShoppingCart} from "react-icons/ci";

async function Cart() {
    const [cart,setCart] = React.useState(false)
    return (
        <div className={!cart ?'cart p-4 m-4 md:mr-8  hover:bg-slate-600 bg-neutral-900 cursor-pointer  h-14 w-16 lg:ml-10 bg-opacity-50': ''} >
             <CiShoppingCart className="p-0 h-full w-full"/>
        </div>
      );
}

export default Cart;