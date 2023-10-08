import './globals.css'
import { Inter, IBM_Plex_Mono, Cormorant_Garamond, Fira_Sans_Condensed, Comme } from 'next/font/google'
import { CiShoppingCart} from "react-icons/ci";
import {BiSearch} from "react-icons/bi"
import Link from 'next/link';
import CategoryType from './components/categoryType';
import SearchItem from './components/SearchItem';

const inter = Comme({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce',
  description: 'Ecommerce Portfolio home',
}

async function getData(){
  let data = await fetch(`${process.env.PORT}/data`,{
    method: "GET",
    cache: 'no-cache'

  })
  .then(res=> {
    
    return res
  })
  .then( res => res.json())
 
 
  return data
  
}
async function getCategories(){
  let data = await getData()
  //get categories

  let categories = {

  }

  for(let i= 0; i < data.length; i++){
    //get categories
    let currentCategory =  data[i].category;
   
   if(categories.hasOwnProperty([data[i].category]) == false){
    categories[data[i].category] = []
    }
    if(!categories[currentCategory].includes(data[i].type)){
      categories[currentCategory].push(data[i].type)
    }

  }
 

   return categories
}


export default async function RootLayout({ children }) {
  let data = await getCategories()
  let category = Object.keys(data)
 let categories = category.map((current,index) => <CategoryType category={current} type={data[current]} key={index} />)
  
  return (
    <html lang="en">
      
      
      <body className={inter.className}>
      <div className="min-w-full h-fit mb-6">
          <div className='flex w-full flex-row justify-between bg-gray-700 align-top content-center h-20'>
              <div className='logo p-4 m-4 hover:bg-slate-600 bg-neutral-900 cursor-pointer h-14 w-16 lg:ml-10 bg-opacity-50 md:ml-20' ></div>
               <SearchItem/>
              <Link href="/cart">

                <div className='cart p-4 m-4 md:mr-8
                  hover:bg-slate-600 bg-neutral-900 hover:cursor-pointer  
                  h-14 w-16 lg:ml-10 bg-opacity-50' >
                <CiShoppingCart className="p-0 h-full w-full"/>
                </div>
              </Link>
          </div>
          <div className='w-full bg-gray-500 h-6 flex flex-row '>
            <Link href="" className='mx-3 pr-3 border-r-gray-800 border-r-2'>Home</Link>
            <Link href="category">Categories</Link>


          </div>
          <div className='w-full  min-h-6 flex flex-row z-10 hover:bg-opacity-0'>
            {categories}



          </div>


        
            
      </div>
        
        
        {children }
        </body>
    </html>
  )
}
