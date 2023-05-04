import Item from "../../components/item"
import Link from "next/link";

async function getData(params){
    let data = await fetch(`${process.env.PORT}`,{
        method: "GET",
        cache: 'no-cache'
    
      })
      .then( res => res.json())
      .then( data => data.filter( current => current.category == params))
      
    
   
    return data
    
  }





export default async function CategoryPage(prop) {
    const queryparam1 = prop.params.category;
    let data = await getData(queryparam1)
   let items = data.map((current,index) => <Item name={current.title} price={current.price} current={current.id} key={index}/>)
    console.log(items)
   
    
    
    return ( 
        <div className="flex min-h-screen flex-col">
            <h1 className="hello  text-center text-slate-900 text-4xl border-b-4">{queryparam1}</h1>
            <div className={`flex ${items.length > 0 ?"flex-row": "flex-col" } flex-wrap justify-center`}>
                {items.length > 0 ? items : 
                <div className="text-4xl md:text-6xl text-slate-900 m-auto my-36">
                    <h1>Page <span className="text-5xl md:text-7xl tracking-tighter text-red-700">{queryparam1}</span> exist</h1>
                </div>
                
                
                }
                {items.length == 0 &&
                <Link href={""} className="h-36 bg-blue-800 w-44 mx-auto flex justify-center">
                    <p className="m-auto  font-medium tracking-tighter from-neutral-900">Go to Home</p>
                </Link>
                }

            </div>
            
        </div>
     )
}

