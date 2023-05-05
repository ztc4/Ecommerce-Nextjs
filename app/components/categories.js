

import Link from "next/link";
import { IoMdArrowDropright} from "react-icons/io"
import Item from "./item"

function Category(props) {
let row = props.data.map((current,index) =>{
    return(
        <Item card={current} border={true} key={index}/>
    )
})

    return ( 
        <section className="category flex flex-col w-10/12 mb-9 text-gray-950 md:w-8/12 divide-x">
            <div className="category-name-view-all flex flex-row justify-between border-b-2 mb-2">
                <h3 className="font-medium md:text-xl">{props.header || "Grab the best deals on"} <span className="category-type text-lg font-bold text-blue-700">{props.item || "Smartphone"}</span></h3>
                <Link href={`category/${props.category}`} className="flex flex-row md:text-xl justify-center">View all<IoMdArrowDropright className="m-auto text-blue-700 text-2xl animate-bounce"/></Link>
            </div>
            <div className="item-holder  flex flex-row overflow-hidden hover:overflow-x-auto p-2 shrink-0 outline-none border-none scroll-m-2">
              
               { row || prop.items}

                

            </div>

        </section>

     );
}

export default Category;