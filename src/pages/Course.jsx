import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { LoaderCircle } from 'lucide-react';
import CourseArticle from "@/components/CourseArticle";

export default function Course(){
    const {code} = useParams()
    const [course,setCourse] = useState(null);
    useEffect(()=>{
        const fetchCourse = async()=>{
            const res = await fetch(`/data/113-1/detail/113-1_${code}.json`);
            if (!res.ok) throw new Error("資料讀取失敗");
            const json = await res.json();
            setCourse(json);
        }
        fetchCourse();
    },[])
    return(
        course!=null?(
            <CourseArticle {...course}></CourseArticle>
        ):(<Loading/>)
    )
}

const Loading = ()=>(
    <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
        <LoaderCircle className="animate-spin" size={100}/>
        <p className="text-7xl">Loading.....</p>
    </div>
)