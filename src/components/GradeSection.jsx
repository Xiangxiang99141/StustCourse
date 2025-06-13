import { useState } from "react"

export default function GradeSection(){
    const [gradeCheck,setGradeCheck] = useState([])
    const handleGrade = (value)=>{
        setGradeCheck(prev=>
            prev.includes(value)?prev.filter(v => v !== value)
            : [...prev, value]
        )
    }
    const grades = [
        { value: "first", label: "一年級" },
        { value: "second", label: "二年級" },
        { value: "third", label: "三年級" },
        { value: "fourth", label: "四年級" },
        { value: "fifth", label: "五年級" },
    ]
    return(
        <section className="mx-3 border-b dark:border-gray-100/15 last:border-b-0 lg:grid lg:grid-cols-[12%_auto] lg:items-center lg:py-1 border-t-2">
            <h3 className="pb-1 pt-2 text-center font-bold text-black/60 dark:text-white">類別</h3>
            <div className="grid grid-cols-[repeat(auto-fill,5.625rem)] justify-center pb-2 lg:justify-normal lg:pb-0">
                {grades.map(({value,label})=>{
                    return(
                        <label className="m-2 block min-w-[4.875rem] rounded-lg border border-blue-500 px-3.5 py-1.5 text-center text-blue-500 whitespace-nowrap hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:text-white max-lg:!row-start-auto" key={value}>
                            <input type="checkbox" name="grade" className="sr-only" checked={gradeCheck.includes(value)} value={value} onChange={()=>handleGrade(value)}/>{label}
                        </label>
                    )
                })}
            </div>
        </section>
    )
}