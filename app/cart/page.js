

import CartItems from "../components/cartItems";

export const metadata = {
    title: 'Cart',
    description: 'Ecommerce Cart Page',
  }

function CartPage() {
    return ( 
        <div>
            <h1 className="text-5xl text-center text-red-950">Cart</h1>
            <CartItems/>
        </div>
     );
}

export default CartPage;