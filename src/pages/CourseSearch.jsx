import Article from "@/components/Article";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircleIcon } from "lucide-react";
import { useSelector } from "react-redux";


export default function CourseSearch(){
    const {year,semester} = useParams();
    const filter = useSelector(state=>state.filter)
    
    //使用fetch動態載入
    const [data, setData] = useState([]);
    const [filterData, setFilteredData] = useState([]);
    
    // Fetch 課程資料
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/data/${year}-${semester}/${year}-${semester}_courses.json`);
                if (!res.ok) throw new Error("資料讀取失敗");
                const json = await res.json();
                setData(json);
                // setError(false);
            } catch (err) {
                // console.error("Failed to load course data:", err);
                setData([]);
                // setError(true);
            }
        };

        fetchData();
    }, [year, semester]);

    // 根據 filter 篩選
    useEffect(() => {
            if (!data.length) {
                setFilteredData([]);
                return;
            }
            const hasQuery = filter.query?.trim() !== "";
            const hasClass = filter.class?.trim() !== "";
            let result;
            if (hasQuery) {
                result = data.filter(item =>
                    item.name.toLowerCase().includes(filter.query.trim())
                );
            }else if(hasClass){
                result = data.filter(item =>
                    item.classes.includes(filter.class.trim())
                );
            }
            setFilteredData(result);
    }, [data, filter]);
    
    return(
        <>
            {data.length==0?(
                <Alert variant="default" className={"w-full mb-3"}>
                    <AlertCircleIcon/>
                    <AlertTitle>資訊</AlertTitle>
                    <AlertDescription>
                        找不到這學期資料
                    </AlertDescription>
                </Alert>
            ):(
                filterData.length==0?(
                    <Alert variant="default" className={"w-full mb-3"}>
                        <AlertCircleIcon/>
                        <AlertTitle>資訊</AlertTitle>
                        <AlertDescription>
                            <p>
                                找不到 <span className="font-bold text-lg">{filter.class}系 </span>的課程
                            </p>
                        </AlertDescription>
                    </Alert>
                ):(
                    <div className="mb-4 rounded-2xl border-black/15 dark:border-gray-100/15 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
                        {filterData.map(course=><Article key={course.code} {...course}/>)}
                    </div>
                )
            )}
        </>
    )
}