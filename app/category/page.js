import Category from "../components/Category"
export const metadata = {
  title: 'Category',
  description: 'Sorting items by categories',
}

async function getData(){
    let data = await fetch(`${process.env.PORT}/data`,{
      method: "GET",
      cache: 'no-cache'
  
    })
    .then( res => res.json())
    
   
    return data
    
  }



async function getCategories(){
    let data = await getData()
    let categories = {

    }
    for(let i= 0; i < data.length; i++){
      //get categories
      let currentCategory =  data[i].category
      
      if(categories.hasOwnProperty([data[i].category]) == false){
      categories[data[i].category] = []
      }
      if(!categories[currentCategory].includes(data[i].type)){
        categories[currentCategory].push(data[i].type)
      }
    }
    
//  return categories
return categories

}



export default async function Home() {
    let data = await getCategories()
    data = Object.keys(data)
    data = data.map((current,index) => {
      return(<Category category={current} key={index}/>)
      })
  
   
    
    
    return ( 
        <div className="flex min-h-screen flex-col items-center justify-start p-2 lg:m m-8">
            <h1 className="text-6xl text-slate-900 tracking-tighter mb-8">Categories</h1>
            <div className="w-full rounded-3xl border-4 grid-flow-col  gap-4  ">
              {
              data
               }
            </div>
          
            

        </div>
     )
}


