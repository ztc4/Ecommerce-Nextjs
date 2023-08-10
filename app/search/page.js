
import { Link } from "react-router-dom"
import Category from "../components/Category"
import Item from "../components/item"
export const metadata = {
  title: 'Search',
  description: 'Sorting items by categories',
}

async function getSearch(query){
    let items = await fetch(`https://nameless-sierra-64099.herokuapp.com/query/?search=${query}`,{
      method: "GET",
      cache: 'no-cache'
  
    })
    .then(res=> {return res})
    .then(res=> {    return res.json()})
    return items
      
    
}







export default async function findResults(prop) {
  console.log(prop)
    
    const queryparam1 = prop.searchParams.search;


    let data = await getSearch(queryparam1)
    let items = data.map((current,index) => <Item card={current} border={false} hover={true} key={index}/>)
   
    
    
    return ( 
        <div className="flex min-h-screen flex-col">
            <p className="text-gray-600 text-xs text-center tracking-tighter uppercase"> Results for:</p>
            <h1 className="hello  text-center text-slate-900 text-4xl mt-2 tracking-tight uppercase pb-4 border-b-4">{queryparam1}</h1>
            <div className={`flex ${items.length > 0 ?"flex-row": "flex-col" } flex-wrap justify-center`}>
                {items.length > 0 && items}
                {items.length == 0 &&
                 <div className="text-4xl md:text-6xl text-slate-900 m-auto my-36">
                    <h1>No search Results</h1>
                </div>
             

                }
                

            </div>
            
        </div>
     )
}