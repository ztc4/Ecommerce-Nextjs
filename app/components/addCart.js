"use client"

function AddCart() {
    function handleClick(){
        console.log("added to cart")
    }
    return (
        <div className="w-full mt-4">
            <div onClick={handleClick} className="w-8/12 h-12 bg-gray-900 hover:bg-gray-950 mx-auto hover:cursor-pointer">
                <p className="text-center pt-4">Add to Cart</p>

            </div>
            <div onClick={handleClick} className="w-8/12 h-12 bg-gray-700 mx-auto mt-4 hover:cursor-pointer hover:bg-gray-800">
                <p className="text-center pt-4">Buy Now</p>

            </div>

        </div>

      );
}

export default AddCart;