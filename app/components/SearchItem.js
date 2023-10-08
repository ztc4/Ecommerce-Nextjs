"use client";
import { BiSearch,BiCollapse } from "react-icons/bi";
import React from "react";
import { useRouter } from 'next/navigation';

function SearchItem() {


     let [items,setItems] = React.useState([]);
     let [active,setActive] = React.useState(false)

     function Activate(e){
      console.log(e.target)
      setActive(true)
     }
     function Deactivate(){
      setActive(false)
     }
 
      const { push } = useRouter()
      function redirect(card){
          push(`category/${card.category}/${card.id}`)
  
      }



    const [currentSearch,setSearch] = React.useState("")

    function query(){
      push(`search?search=${currentSearch}`)

    }

    async function getData(){
        items = await fetch(`https://bnwvz86ty1.execute-api.us-east-1.amazonaws.com/dev/search/?search=${currentSearch}`,{
          method: "GET",
          cache: 'no-cache'
      
        })
        .then(res=> {
          
          return res
        })
        .then(res=> {    
            return res.json()
          })


         

          setItems(current=> [...items])
          
        
    }
    React.useEffect(()=>{
        if(currentSearch !== ""){
        getData()
         }  
}, [currentSearch])
  console.log(items)
    
    
    

    let currentSearchItems = items.map((item,index)=>{
      
        return (
        <div key={item.title} className={`search flex-nowrap flex flex-col  justify-center hover:cursor-pointer  h-12  w-12/12 md:w-12/12 
        ${(items.length == 1 && index == 0) && "mt-4 mb-4" || 
        index == 0 && "mt-4" }
          hover:bg-slate-500`} onClick={item.Itemtype == "item" ?()=> redirect(item): ()=> query() } >
            <h1 className="ml-4">{item.Itemtype == "type" ? "Go to ": ""}{item.title}</h1>
        </div> 
          )  

    })
    console.log(currentSearchItems)


    return ( 
       
        <div className='w-10/12 justify-center content-center flex-nowrap flex-col rounded-full '>
                <div onClick={Activate} className="search flex-nowrap mx-auto flex flex-row bg-gray-500 h-12 m-4 w-11/12 md:w-8/12 rounded-full" id="searchbar">
                  <input type="search" onChange={(e)=>setSearch( current=> e.target.value)} value={currentSearch} className='bg-transparent w-10/12 h-full p-3 placeholder:ml focus:outline-none ml-4  border-indigo-500' placeholder='Search for item'></input>
                  <BiSearch onClick={query} className='w-2/12 h-full m-auto bg-zinc-600 p-3 bg-transparent cursor-pointer rounded-full hover:bg-zinc-900 '/>  
                </div>
                
                <div className="flex-nowrap flex mx-auto flex-col relative w-12/12 md:w-8/12 z-50 -mt-2  bg-blue-500 rounded-xl justify-center">

                        { currentSearch !==  ""&& active && currentSearchItems}
                        { currentSearch !==  ""&& active &&

                        <div  className={`search flex-nowrap flex flex-col  justify-center hover:cursor-pointer  h-12  w-12/12 md:w-12/12`}
                          onClick={Deactivate} >
                            <h1 className="ml-4 hover:text-red-900 uppercase">Close</h1>
                          </div>  
                        
                        }
                        
                            


                </div>
        </div> 
     );
}

export default SearchItem;