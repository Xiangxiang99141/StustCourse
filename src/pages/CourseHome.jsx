import { setClass } from "@/store/module/filterSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router";


export default function CourseHome(){
    const classesQuery = useParams().classes
    const dispatch = useDispatch()
    useEffect(()=>{
        if(classesQuery!=undefined){
            dispatch(setClass(classesQuery))
        }
    },[])
    return(
        
        <div className="grid grid-cols-1 md:grid-cols-3 p-3 gap-4 rounded-lg bg-gray-800">
            <Link to={"/course/113/1/search"} className="text-3xl text-center h-10 font-bold hover:border-b-1 border-white">113上學期</Link>
            <Link to={"/course/113/2/search"} className="text-3xl text-center h-10 font-bold hover:border-b-1 border-white">113下學期</Link>
            <Link to={"/course/113/3/search"} className="text-3xl text-center h-10 font-bold hover:border-b-1 border-white">113暑修</Link>
        </div>
    )
}