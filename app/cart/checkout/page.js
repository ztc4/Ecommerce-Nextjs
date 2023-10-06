'use client'
import React, {useEffect,useState} from "react"
import Cookies from "js-cookie"
import SummaryItem from "@/app/components/summaryItem"
import {IoMdArrowDropright,IoMdArrowDropdown} from "react-icons/io"


function Checkout() {
    // const navigate = useNavigate()
    //summary items
    let[summaryItems,setSummaryItems] = useState()
  
    
    React.useEffect(()=>{
        getCartItems()
        
       
        
    
    },[])
    //get Items function
      async function getCartItems(){
        console.log(Cookies.get("id"))
        let data =  await fetch(`https://bnwvz86ty1.execute-api.us-east-1.amazonaws.com/dev//cart/${Cookies.get("id")}`)
        .then(res => res.json())
        .then(res => res)
        console.log(data)
        
        setSummaryItems(data.items)
        
        return data
    }
    let [total,setTotal] = useState(0)
    let [items,setItems] = useState(0)
    let components
    if(summaryItems){
        components = summaryItems.map((current,index) => {
           total += current.price *current.quantity
           items += current.quantity
        
        return <SummaryItem data={current}  key={current.id}/>})
    }
    


    //form data
    let [summary,setSummary] = useState(false)
    let [tab,setTabOpen] = useState(true)
    let [info,setinfo] = useState({
        cardNumber: "",
        cardDate: "",
        cardCCV : "",
        zip: "",
        street: "",
        county: "",
        state : "",
        email: "",
        fname: "",
        lname:""
    })
    function handleChange(e){
        console.log(e.target.id)
        setinfo(current =>({...current,[e.target.id]:[e.target.value]}))

    }
    async function checkout(){
        console.log("checkout")
     
         let data= await fetch(`https://bnwvz86ty1.execute-api.us-east-1.amazonaws.com/dev//cart/${Cookies.get("id")}/checkout`,{
            method:"POST",
            headers:{
                Accept: "application/json"
            }

           })
            .then(res => res.json())
            .then(res => res)
            if(data.url){
                window.location = data.url
            }
            
            console.log(data)
            return data
        
    }
   
    

    return ( 
        <div className="text-gray-950 text-3xl text-center min-h-screen flex  flex-col-reverse items-center bg-gray-200" >
           
            <div className=" ml-8 w-10/12 min-4/5 rounded-md mb-8 shadow-xl items-center flex flex-col bg-gray-100 dark:bg-gray-100 py-8">
                
                <div className="flex flex-row justify-between w-7/12">
                    <p></p>
                    <h1 className="text-left capitalize  text-xl my-8 text-gray-700 tracking-tighter font-light">payment information</h1>
                    {tab && <IoMdArrowDropdown className="self-center text-red-500" onClick={()=>setTabOpen(false)}/>}
                    {!tab && <IoMdArrowDropright className="self-center text-red-500" onClick={()=>setTabOpen(true)}/>}

                </div>
                
               
               <div className="flex flex-col h-4/5 flex-wrap w-80 md:w-3/5 outline-2 rounded-xl mb-4 shadow-md">
                    
                    <input type="email" placeholder="Enter Email" id="email" className="placeholder:text-sm dark:bg-white group-[textColor]:text-red-400 tracking-tighter font-light text-base h-20 pl-4 focus:outline-none" onChange={handleChange} required></input>
                    <div className="flex flex-row justify-between ">
                    <input type="text" placeholder="First Name" name="fname" id="fname" className="w-32  grow placeholder:text-sm h-20 text-base pl-4 focus:outline-none"  required></input>
                    <hr/>
                    <input type="text" placeholder="Last Name" name="lname" id="lname" className="w-32 grow placeholder:text-sm pl-4 h-20 text-base focus:outline-none bl-1 border-gray-950" required></input>

                    </div>
                    
                    <input type="text" placeholder="Enter Street" id="street" className="placeholder:text-sm dark:bg-white group-[textColor]:text-red-400 tracking-tighter font-light text-base h-20 pl-4 focus:outline-none" required></input>
                    <div className="flex flex-row justify-between ">
                    <input type="text" placeholder="Zip" name="id" id="zip" className="w-32  grow placeholder:text-sm h-20 text-base pl-4 focus:outline-none" maxLength={8}  required></input>
                    <hr/>
                    <input type="text" placeholder="State" id="state" className="w-32 grow placeholder:text-sm pl-4 h-20 text-base focus:outline-none bl-1 border-gray-950" required ></input>

                    </div>


               
                    
                    <input type="text" placeholder="Enter your card Number" id="cardNumber" className="placeholder:text-sm tracking-tighter font-light text-base h-20 pl-4 focus:outline-none" required></input>
                    <div className="flex flex-row justify-between ">
                    <input type="text" placeholder="Date" id="cardDate" className="w-32 grow placeholder:text-sm h-20 text-base pl-4 focus:outline-none" maxLength={5}  required></input>
                    <hr/>
                    <input type="text" placeholder="ccv" id="cardCCV " className="w-32 grow placeholder:text-sm pl-4 h-20 text-base focus:outline-none bl-1 border-gray-950" maxLength={3} required></input>
                    

                    </div>
                    <button className="bg-rose-600 hover:bg-rose-800 font-light tracking-tighter dark:bg-rose-600 h-24" onClick={()=>checkout()}>
                        Sumbit Order
                    </button>


                </div>
            </div>
            
            <div className=" ml-8 w-10/12 min-4/5 rounded-md mb-8 shadow-xl items-center flex flex-col bg-gray-100 p-24">
                <div className="flex flex-row justify-between w-full">
                    <p></p>
                    <h6>Summary</h6>
                    {summary && <IoMdArrowDropdown className="self-center text-red-500" onClick={()=>setSummary(false)}/>}
                    {!summary && <IoMdArrowDropright className="self-center text-red-500" onClick={()=>setSummary(true)}/>}

                </div>
                
                {components && summary && components}
                <p className="text-end md:text-center md:mt-8 md:text-lg w-full text-sm mt-4">total:${total}</p>

            </div>
            
           
            <h1 className="text-gray-950 text-3xl text-center" >Checkout</h1>

           

        </div>
     );
}

export default Checkout;