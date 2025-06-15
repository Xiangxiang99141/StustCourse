import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { setInfos } from "@/store/module/dataSlice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import 'tailwindcss'

function Home(){
    const dispatch = useDispatch();
    const infos = useSelector(state=>state.data.infos)
    const [classes,setClasses] = useState(25)
    const [courses,setCourses] = useState(3700)
    // const [infos,setInfos] = useState([])
    useEffect(()=>{
        const fetchInfos = async()=>{
            const res = await fetch('/data/info.json')
            if (!res.ok) throw new Error("資料讀取失敗");
            const json = await res.json();
            dispatch(setInfos(json))
            // setInfos(json);
        }
        fetchInfos()
    },[])
    return(
        <>
            <div className="mb-4 mt-4">
                <div className="h-14">
                    <h1 className="text-center text-3xl/10 font-bold ">課程科系大綱</h1>
                </div>
                <Card className="bg-gray-800 border-gray-100/15 border px-3">
                    <div className="grid grid-cols-2 gap-4 place-items-center">
                        <div>
                            <span className="font-bold text-2xl pe-1">{classes}</span>
                            <span className="font-bold text-lg">個科系</span>
                        </div>
                        <div>
                            <span className="font-bold text-2xl pe-1">{courses}+</span>
                            <span className="font-bold text-lg">個科目</span>
                        </div>
                    </div>
                </Card>
            </div>
            <div>
                <div className="h-14">
                    <h1 className="text-center text-3xl/10 font-bold ">選課時間與流程</h1>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                { infos.map(info=>{
                    return(<Card className="bg-gray-800 border-gray-100/15 border px-3" key={info["title"]} >
                        <CardTitle>
                            <h3 className="text-xl text-center pb-1">{info["title"]}</h3>
                            <p className="flex justify-center items-center gap-x-2">
                                <span className="flex gap-x-2">
                                    <span className="self-end text-sm text-gray-100/55">{info["time"][0]}</span>
                                    <span className="text-2xl">{info["date"][0]}</span>
                                </span>
                                <span className="text-lg">~</span>
                                <span className="flex gap-x-2">
                                    <span className="text-2xl">{info["date"][1]}</span>
                                    <span className="self-end text-sm text-gray-100/55">{info["time"][1]}
                                    </span>
                                </span>
                            </p>
                        </CardTitle>
                        <CardContent>
                            <p className="pt-2 border-t border-gray-100/15">在第一階段選課時，是以抽籤為主，同學們只要在選課系統中選擇課程。</p>
                        </CardContent>
                    </Card>)
                })}
                </div>
            </div>
        </>)
}

export default Home