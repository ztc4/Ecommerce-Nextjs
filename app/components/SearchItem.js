"use client";
import { BiSearch } from "react-icons/bi";
import React from "react";

function SearchItem() {

    const [currentSearch,setSearch] = React.useState("r")
    const unfilteredItems = ["apple earbuds"]
    const items = unfilteredItems.filter(current =>{
        return current.includes(currentSearch)
    })

    let currentSearchItems = items.map((item,index)=>{
        return (
        <div key={Math.random() * 1000} className={`search flex-nowrap flex flex-col  justify-center   h-12  w-12/12 md:w-12/12 
        ${ (index == items.length -1 && index == 0) && "mt-4 mb-4" ||index == 0 && "mt-4" || index == items.length -1 && "mb-5"   }  hover:bg-slate-500`}>
                        <h1 className="ml-4">{item}</h1>
            </div> )  

    })


    return ( 
       
        <div className='w-10/12 justify-center content-center flex-nowrap flex-col rounded-full '>
                <div className="search flex-nowrap mx-auto flex flex-row bg-gray-500 h-12 m-4 w-11/12 md:w-8/12 rounded-full">
                  <input type="search" onChange={(e)=>setSearch( current=> e.target.value)} value={currentSearch} className='bg-transparent w-10/12 h-full p-3 placeholder:ml focus:outline-none ml-4  border-indigo-500' placeholder='Search for item'></input>
                  <BiSearch className='w-2/12 h-full m-auto bg-zinc-600 p-3 bg-transparent cursor-pointer rounded-full hover:bg-zinc-900 '/>
                </div>
                <div className="flex-nowrap flex mx-auto flex-col relative w-12/12 md:w-8/12 z-50 -mt-2  bg-blue-500 rounded-xl justify-center">

                        { currentSearch !==  "" && currentSearchItems}

                </div>
        </div> 
     );
}

export default SearchItem;