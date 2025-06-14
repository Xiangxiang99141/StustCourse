import { Outlet, useNavigate, useParams } from "react-router"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import ClassSection from "@/components/ClassSection";
import CourseTypeSection from "@/components/CourseTypeSection";
import GradeSection from "@/components/GradeSection";
import DateSection from "@/components/DateSection";
import { Input } from "@/components/ui/input"
import { CircleArrowDown} from 'lucide-react'

import { useDispatch,useSelector } from "react-redux"
import { setIsOpen,setQuery } from "@/store/module/filterSlice"

export default function CourseLayout(){
    const state = useSelector(state=>state.filter.isOpen)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {year,semester} = useParams();
    const selectChange = (value)=>{
        const tt = value.split('-')
        navigate(`/course/${tt[0]}/${tt[1]}/search`)
    }
    const filterBtnClick = ()=>{
        dispatch(setIsOpen())
    }

    const handleChange = (e)=>{
        dispatch(setQuery(e.target.value))
    }

    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center sticky top-0">
                <h2 className="text-xl font-bold">{year} 年第 {semester} 學期</h2>
                <div className="flex flex-row gap-2 justify-center items-center h-full">
                    <div className="flex flex-col gap-2">
                        <Select 
                            onValueChange={(value)=>selectChange(value)}
                        >
                            <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder='請選擇學期' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="113-1">113年上學期</SelectItem>
                                <SelectItem value="113-2">113年下學期</SelectItem>
                                <SelectItem value="113-3">113年暑修</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input className={'w-50'} type={"text"} placeholder="可以用搜尋的呦" onChange={(e)=>handleChange(e)} />
                    </div>
                    <Button variant={'outline'} className={'cursor-pointer flex-col h-20'} onClick={filterBtnClick}>
                        <p>篩選</p>
                        <CircleArrowDown className={`transition duration-500 ease-in-out ${state?'rotate-180':'rotate-0'}`} size={60}/>
                    </Button>
                </div>
            </div>
            
            <div className={`mb-4 h-0 rounded-2xl border border-gray-100/15 bg-gray-800 ${state?'h-fit':'h-0'} overflow-hidden transition duration-300 ease-in-out`}>
                <ClassSection/>
                <CourseTypeSection/>
                <GradeSection/>
                <DateSection/>
            </div>
            <Outlet />
        </div>
    )
}