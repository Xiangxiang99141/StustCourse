import ClassSection from "@/components/ClassSection";
import CourseTypeSection from "@/components/CourseTypeSection";
import GradeSection from "@/components/GradeSection";
import DateSection from "@/components/DateSection";

export default function CourseSearch(){
    return(
        <div className="mb-4 rounded-2xl border border-gray-100/15 bg-gray-800">
            <ClassSection/>
            <CourseTypeSection/>
            <GradeSection/>
            <DateSection/>
        </div>
    )
}