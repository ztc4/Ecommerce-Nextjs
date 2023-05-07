"useClient"
import Image from "next/image";
import Link from "next/link";
import React from "react"
import Cookies from "js-cookie";

function CartSection({data, changeTotal}) {
    const[item, setItem] = React.useState(data)

    function addQuantity(){
       setItem(current => ({...current,quantity: current.quantity += 1}))
       save()
    changeTotal(item.price)
       
       return console.log("add "+ item.quantity)

    }
     function subtractQuantity(){
       
        if(item.quantity >= 2){
            setItem(current => ({...current,quantity: current.quantity-=1}))
            save()
            changeTotal(-item.price)
        
        }
   
        
        return console.log("subtract " + item.quantity)

    }
    async function save(){
        await fetch(`${"https://nameless-sierra-64099.herokuapp.com"}/cart/${Cookies.get("id")}/edit`,{
                method: "PUT", 
                cache: 'no-cache',
                headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                },
                body: JSON.stringify(item),

            })
            .then( ()=> setItem(current => ({...current,quantity: current.quantity--})))

    }
    async function deleteItem(){
        let price = item.quantity * item.price
        setItem(current => ({...current,quantity: 0}))
        console.log(item)
        await fetch(`${"https://nameless-sierra-64099.herokuapp.com"}/cart/${Cookies.get("id")}/edit`,{
                method: "PUT", 
                cache: 'no-cache',
                headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                },
                body: JSON.stringify({...item,quantity: 0}),

            })
            .then( res => console.log(res))
            .then(()=> changeTotal(-price))

    }


    return ( 
        <div className={`h-24 mt-6 border-2 border-gray-2500 w-full flex flex-row`} id={item.quantity == 0 && "deleteItem"} onDoubleClick={deleteItem} >
            <div className="h-full p-4  basis-2/6 ">
                <Image
                src={`/${data.image}.jpg`}
                width={50} height={50} 
                className="m-auto"
                alt={data.title}
                />
                
            </div>
            <div className="flex-col justify-start pl-2 flex basis-4/6  text-gray-950">
                <div className="flex flex-row justify-between items-start basis-full">
                    <Link href={``} className="text">{item.title}</Link>
                    <p className="font-light text-sm text-black uppercase tracking-tighter mr-1 mt-0">${item.price}</p>
                </div>
                <div className="flex flex-row my-2 md:my-5">
                    <div className="subtract bg-gray-400 w-8 pl-3 rounded-l-3xl cursor-pointer hover:bg-gray-800" onClick={()=>subtractQuantity()}>-</div>
                    <div className="bg-gray-400 w-12" >QTY:{item.quantity}</div>
                    <div className="add bg-gray-400 w-8 pl-3 cursor-pointer rounded-r-3xl hover:bg-gray-800" onClick={()=>addQuantity()}>+</div>
                </div>
              
            </div>


        </div>
     );
}

export default CartSection
