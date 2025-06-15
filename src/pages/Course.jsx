import { useEffect, useState } from "react"
import { useParams } from "react-router"
import CourseArticle from "@/components/CourseArticle";
import Loading from "@/components/Loading";


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