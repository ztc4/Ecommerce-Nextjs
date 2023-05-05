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


async function ItemPage(props) {
    console.log(props)
    let data = await getData(props.params.item)
    
    
    return ( 
        <div className="flex-row ">
                {!data && 
                <div className="">
                        <h1 className="text-6xl text-blue-900">Error 404</h1>
                </div>}
                {data && 
                <div className="">
                        <h1 className="text-6xl text-blue-900">Error 404</h1>
                </div>}
            <div>

            </div>
            
        </div>
     );
}

export default ItemPage
