import Loading from "@/components/Loading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { Link } from "react-router"


export default function ClassesLayout(){
    const [classes,setClssses] = useState([])
    
    useEffect(()=>{
        const fetchClasses = async()=>{
            const res = await fetch('/data/classes.json')
            if (!res.ok) throw new Error("資料讀取失敗");
            const json = await res.json()
            setClssses(json)
        }
        fetchClasses();
    },[])
    return(
        <>
            <div className="flex flex-row justify-between items-center top-0 border-b-4 pb-3 h-14 mb-2.5">
                <h2 className="text-xl font-bold">科系列表</h2>
            </div>
            {
                classes.length==0?
                <Loading/>:(
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {
                            classes.map(c=>(
                                <Button className={'md:h-20'} key={c.value} variant={'outline'}>
                                    <Link to={`${c.value}`} key={c.value} className="w-full h-full md:text-3xl/15 md:font-bold md:li">{c.label}</Link>
                                </Button>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}