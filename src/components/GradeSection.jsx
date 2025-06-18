import { setGrade } from "@/store/module/filterSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function GradeSection(){
    // const [gradeCheck,setGradeCheck] = useState([])
    const grade = useSelector(state=>state.filter.grade)
    const dispatch = useDispatch()
    const handleGrade = (value)=>{
        dispatch(setGrade(value==grade?"":value))
    }
    const grades = [
        { value: "一", label: "一年級" },
        { value: "二", label: "二年級" },
        { value: "三", label: "三年級" },
        { value: "四", label: "四年級" },
        { value: "五", label: "五年級" },
    ]
    return(
        <section className="mx-3 border-b dark:border-gray-100/15 last:border-b-0 lg:grid lg:grid-cols-[12%_auto] lg:items-center lg:py-1 border-t-2">
            <h3 className="pb-1 pt-2 text-center font-bold text-black/60 dark:text-white">年級</h3>
            <div className="grid grid-cols-[repeat(auto-fill,5.625rem)] justify-center pb-2 lg:justify-normal lg:pb-0">
                {grades.map(({value,label})=>{
                    return(
                        <label className="m-2 block min-w-[4.875rem] rounded-lg border border-blue-500 px-3.5 py-1.5 text-center text-blue-500 whitespace-nowrap hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:text-white max-lg:!row-start-auto" key={value}>
                            <input type="checkbox" name="grade" className="sr-only" checked={grade.includes(value)} value={value} onChange={()=>handleGrade(value)}/>{label}
                        </label>
                    )
                })}
            </div>
        </section>
    )
}