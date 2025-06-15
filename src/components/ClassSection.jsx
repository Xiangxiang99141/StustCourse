import { useSelector, useDispatch } from "react-redux";
// import classes from '@/assets/classes.json'
import { setClass, setIsOpen } from "@/store/module/filterSlice";
import { setClasses } from "@/store/module/dataSlice";
import { useEffect } from "react";

export default function ClassSection(){
    const classFilter = useSelector(state=>state.filter.class)
    const dispatch = useDispatch()
    const classes = useSelector(state=>state.data.classes)
    const handleClassToggle = (value)=>{
        dispatch(setClass(value))
        dispatch(setIsOpen(false))
    }
    const itemsPerRow = 9;
    return(
        <section className="mx-3 border-b dark:border-gray-100/15 last:border-b-0 lg:grid lg:grid-cols-[12%_auto] lg:items-center lg:py-1">
            <h3 className="pb-1 pt-2 text-center font-bold text-black/60 dark:text-white">系所</h3>
            <div className="grid grid-cols-[repeat(auto-fill,5.625rem)] justify-center pb-2 lg:justify-normal lg:pb-0">
            {
                classes.map(({value,label},index)=>{
                    const rowStart = Math.floor(index / itemsPerRow) + 1;
                    return(
                        <label className="m-2 block min-w-[4.875rem] rounded-lg border border-blue-500 px-3.5 py-1.5 text-center text-blue-500 whitespace-nowrap hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:text-white max-lg:!row-start-auto" style={{gridRowStart:rowStart}} key={value}>
                            <input type="radio" name="department" className="sr-only" value={value} checked={value===classFilter } onChange={()=>handleClassToggle(value)}/>{label}
                        </label>
                    )
                })
            }
            </div>
        </section>
    )
}