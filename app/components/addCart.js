"use client"
import Cookies from "js-cookie"
import React,{useEffect} from "react";


function AddCart({data}) {
    let item = {
        title: data.title,
        quantity: 1,
        id: data.id,
        add: true,
        image: data.image,
        price: data.price
        
    }
    
    async function handleClick(){
        await checkid(item)
    }
    async function checkid(item){
        try{
            console.log("checking id")
            console.log(Cookies.get("id"))
        let data = await fetch(`${"https://bnwvz86ty1.execute-api.us-east-1.amazonaws.com/dev"}/cart/${Cookies.get("id")}`,{
            method: "GET",
            cache: 'no-cache',
          
        
        })
        .then( res => {
            if(res.ok){
                
           return  res.json()}
           else throw new Error("Coudldn't get data")
           
        })
        
        if(item){
            console.log("adding item")
            await fetch(`${"https://bnwvz86ty1.execute-api.us-east-1.amazonaws.com/dev"}/cart/${Cookies.get("id")}/edit`,{
                method: "PUT", 
                cache: 'no-cache',
                headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                },
                body: JSON.stringify(item),

            })
        }
        return data
        }
    catch(e){
        
        let data = await fetch(`${"https://bnwvz86ty1.execute-api.us-east-1.amazonaws.com/dev"}/cart/create`,{
            method: "POST",
            cache: 'no-cache'
        
        })
        .then( res => res.json())
        .then(res => Cookies.set("id",res._id) )

        checkid(item)

        
    }

    }


        useEffect(()=>{

        },[])
        
    
    
     
        
    return (
        <div className="w-full mt-4">
            <div onClick={()=>checkid(item)} className="w-8/12 h-12 bg-gray-900 hover:bg-gray-950 mx-auto hover:cursor-pointer">
                <p className="text-center pt-4">Add to Cart</p>

            </div>
            <div onClick={handleClick} className="w-8/12 h-12 bg-gray-700 mx-auto mt-4 hover:cursor-pointer hover:bg-gray-800">
                <p className="text-center pt-4">Buy Now</p>

            </div>

        </div>

      );
}

export default AddCart;