import Image from "next/image"
import AddCart from "@/app/components/addCart"
import Item from "@/app/components/item"

export const metadata = {
    title: `items`,
    description: 'items page',
  }

async function getData(params){
    console.log(params)
    let data = await fetch(`${process.env.PORT}/${params}`,{
        method: "GET",
        cache: 'no-cache'
    
      })
      .then( res => res.json())
      .catch(res => "couldn't get data")
      
      
    
   
    return data[0]
    
  }
  
  async function getRecommend(type,name){
    
    let recommend;
    let data = await fetch(`${process.env.PORT}`,{
        method: "GET",
        cache: 'no-cache'
    
      })
      .then( res => res.json())
      .catch(res => "couldn't get data")
      if(data.length > 0){
        recommend = data.filter(current => current.type == type)
        recommend = recommend.filter(current => !current.title.includes(name))
      }

      return recommend
    
  }


async function ItemPage(props) {
    console.log(props)
    let data = await getData(props.params.item)
    console.log(data)
    let recommendData = await getRecommend(data.type,data.title)
    console.log(1,recommendData)
    let recommend = recommendData.map((current,index) => <Item card={current} border={false} hover={true} key={index}/>)
    
    
    return ( 
        <main className="md:flex-row flex flex-col min-h-screen md:p-10 w-full ">
                {!data && 
                <div className="">
                        <h1 className="text-6xl text-blue-900">Error 404</h1>
                </div>}
                {data && 
                <div className=" flex-col flex basis-8/12 justify-center md:flex-row">
                    <div>
                        <Image
                        src={`/${data.image}.jpg`}
                        width={300}
                        height={200}
                        alt={data.title}
                        className="w-72 m-auto md:m-10 md:mx-auto border-4 md:w-96"
                        quality={100}
                        >

                        </Image>
                        <p className="w-72 m-auto md:m-4  text-center md:text-2xl mt-4 text-lg tracking-tighter italic hover:cursor-pointer underline text-gray-950 md:mx-auto uppercase md:w-96">Desciption</p>
                        <p className="description text-gray-800 font-extralight md:tracking-wider tracking-tight p-4">Reprehenderit amet fugiat veniam cupidatat commodo enim ut pariatur proident eiusmod aliquip irure id aliqua. Incididunt laboris in velit aute. In deserunt reprehenderit mollit ex dolor sit minim cupidatat velit adipisicing dolor voluptate do. Amet quis ex proident eiusmod. Minim officia deserunt minim consectetur minim deserunt amet id.</p>
                        <section className="hidden md:flex flex-col">
                            <h6 className="text-gray-800 text-xl ml-4 mt-14 mb-6">Recommended for You:</h6>
                            <div className="flex flex-row overflow-x-auto">
                                {recommend ||
                                <p className="text-gray-500 text-xl tracking-wider ml-16 self-center font-light">Ops! Looks like there is Nothing to Recommend</p>
                                
                                }
                                

                            </div>
                            
                        </section>
                    </div>
                    <div className="flex-col flex basis-4/12 screenadd m-4 md:m-14 ">
                        <p className="text-gray-400 tracking-tighter -mb-1 lowercase">{data.seller}</p>
                        <p className="text-gray-950 text-lg  md:text-2xl whitespace-nowrap tracking-widest capitalize">{data.title}</p>
                        <p className=" text-gray-800 mt-8">${data.price}</p>
                        <p className="  text-gray-400 text whitespace-nowrap text-xs -mt-1 uppercase">Payment using stripe</p>
                        <p className="mt-8  text-gray-400 md:mt-20">Category:</p>
                        <p className="text-gray-800  uppercase">{data.category}</p>
                        <p className="  text-gray-400 mt-2">Type:</p>
                        <p className="text-gray-800 pb-8 border-b-2 uppercase">{data.type}</p>
                        <AddCart data={data}/>
                        

                    </div>
                </div>

                
                
                
                
                }
            <div>

            </div>
            
        </main>
     );
}

export default ItemPage
