import ClassSection from "@/components/ClassSection";
import CourseTypeSection from "@/components/CourseTypeSection";
import GradeSection from "@/components/GradeSection";
import DateSection from "@/components/DateSection";
import Article from "@/components/Article";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircleIcon } from "lucide-react";

export default function CourseSearch(){
    const {year,semester} = useParams()
    //使用fetch動態載入
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`/data/${year}-${semester}/${year}-${semester}_courses.json`)
            .then(res => res.json())
            .then(json => setData(json))
            .catch(err => console.error("Failed to load course data:", err));
        // console.log(data)
    }, []);
    
    return(
        <>
        <div className="mb-4 rounded-2xl border border-gray-100/15 bg-gray-800">
            <ClassSection/>
            <CourseTypeSection/>
            <GradeSection/>
            <DateSection/>
        </div>
        
        {data.length==0?(
            <Alert variant="destructive" className={"w-full mb-3"}>
                <AlertCircleIcon/>
                <AlertTitle>警告</AlertTitle>
                <AlertDescription>
                    You can add components and dependencies to your app using the cli.
                </AlertDescription>
            </Alert>
        ):(
            <div className="mb-4 rounded-2xl border-black/15 dark:border-gray-100/15 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
                <Articles data={data}/>
            </div>
        )}
        </>
    )
}

function Articles({data}){
    return(
        data.map((item, index) => (
            <Article
                key={index}
                code={item.code}
                name={item.name}
                credit={item.credit}
                type={item.type}
                instructors={item.instructors}
                classes={item.classes}
                schedule={item.schedule}
            />
        ))
    )
}