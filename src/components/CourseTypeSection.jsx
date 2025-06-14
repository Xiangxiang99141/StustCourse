import { setType } from "@/store/module/filterSlice";
import { useDispatch, useSelector } from "react-redux";


export default function CourseTypeSection(){
    const courseType = useSelector(state=>state.filter.type)
    const dispatch = useDispatch();
    const handleToggle  = (value)=>{
        const updated = courseType.includes(value)
            ? courseType.filter(v => v !== value)
            : [...courseType, value];

        dispatch(setType(updated));
    }
    const types = [
        { value: "必修", label: "必修" },
        { value: "選修", label: "選修" },
        { value: "通識", label: "通識" },
    ];
    return(
        <section className="mx-3 border-b dark:border-gray-100/15 last:border-b-0 lg:grid lg:grid-cols-[12%_auto] lg:items-center lg:py-1 border-t-2">
            <h3 className="pb-1 pt-2 text-center font-bold text-black/60 dark:text-white">類別</h3>
            <div className="grid grid-cols-[repeat(auto-fill,5.625rem)] justify-center pb-2 lg:justify-normal lg:pb-0">
                {
                    types.map(({value,label})=>
                        <label className="m-2 block min-w-[4.875rem] rounded-lg border border-blue-500 px-3.5 py-1.5 text-center text-blue-500 whitespace-nowrap hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:text-white max-lg:!row-start-auto" key={value}>
                            <input 
                                type="checkbox" 
                                name="courseType"
                                className="sr-only" 
                                value={value} 
                                checked={courseType.includes(value)}
                                onChange={()=>handleToggle(value)}
                            />
                            {label}
                        </label>
                    )
                }
            </div>
        </section>
    )
}