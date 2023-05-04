
import Image from 'next/image'
import { CiShoppingCart} from "react-icons/ci";
import {BiSearch} from "react-icons/bi"
import Item from "./components/item"
import Category from './components/categories';
import Panel from './components/panel';

async function getData(){
  let data = await fetch(`https://nameless-sierra-64099.herokuapp.com/`,{
    method: "GET",
    cache: 'no-cache'

  })
  .then( res => res.json())
  console.log(data)
  
 
  return data
  
}
async function getElectronics(){
  let data = await getData()
  //get categories
  let clothing = []
  let electronics = []
  let jewelry = []
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
    //Choosing which catagery current index is and push to that variable
    switch(data[i].category){
      case "clothing": clothing.push(data[i]);break;
      case "jewelry": jewelry.push(data[i]);break;
      case "electronics": electronics.push(data[i]);break;
    }    
  }

   return {
    categories,
    clothing,
    jewelry,
    electronics
   }
}


export default async function Home(props,context) {
  
  let data = await getElectronics()
  
  
  

 
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-2 lg:m ">

      <div className='banner flex flex-row w-10/12 h-32 border md:w-8/12 mb-9 bg-sky-950 rounded-lg md:h-48 hover:scale-105 bg-gradient-to-r from-sky-300 to-indigo-500 justify-' >
        <h6 className='basis-3/5 p-4 m-2 md:basis-10/12 md:m-auto pl-16'><span>Electronics Discount</span><br></br><span className='text-xl font-bold md:text-4xl'> Smartphones</span><br></br><span className='indent-2 text-sm'> Up to 80% OFF</span></h6>
        <Image
        className='basis-2/5 p-4 m-2'
        src=""
        alt="phone image"
        
        ></Image>

      </div>
      <Category header="Grab the best deals on" category="electronics" item="Electronics" data={data.electronics}/>
      <Category header= "Summer" category="clothing" item="Shirts & Pants" data={data.clothing}/>
      <Panel />
      <Category header="Shop Mother's day" category="jewelry" item="Jewelry" data={data.jewelry}/>
      
      
      
        
        
    </main>
  )
}
