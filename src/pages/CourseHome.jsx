import { Link } from "react-router";

export default function CourseHome(){
    return(
        <div className="grid grid-cols-3 p-3 rounded-lg bg-gray-800">
            <Link to={"113/1"} className="text-3xl text-center h-10 font-bold hover:border-b-1 border-white">113上學期</Link>
            <Link to={"113/2"} className="text-3xl text-center h-10 font-bold hover:border-b-1 border-white">113下學期</Link>
            <Link to={"113/3"} className="text-3xl text-center h-10 font-bold hover:border-b-1 border-white">113暑修</Link>
        </div>
    )
}