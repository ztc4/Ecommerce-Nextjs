import Link from "next/link";

function Panel(props) {
    return (  
        <div className=" w-10/12 md:w-8/12 bg-slate-700 h-64 max-h-80 p-8 text-center mb-12">
            <h1 className="text-3xl tracking-tighter font-medium rounded-sm">{props.title || "Signup"}</h1>
            <p className="description break-words hover:overflow-y-auto overflow-hidden h-28 text-ellipsis">{props.description || "Deserunt incididunt ut est ullamco pariatur officia. Non proident culpa nulla sunt officia. Fugiat quis in elit anim mollit non aliquip enim in. Est quis et elit aute sit dolore cillum. Exercitation in ipsum voluptate adipisicing elit enim adipisicing voluptate nostrud consectetur consectetur dolor quis excepteur. Consectetur excepteur id enim anim anim id elit."}</p>
            <Link href={props.link ||""}><button className="bg-gray-900 p-4 mt-2">Signup</button></Link>

        </div>


    );
}

export default Panel;