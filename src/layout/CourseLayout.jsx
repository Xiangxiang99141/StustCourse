import { Link, Outlet, useParams } from "react-router"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function CourseLayout(){
    const {year,semester} = useParams();
    return(
        <div className="flex flex-col gap-4">
            {/* 這裡是共用區塊 */}
            <div className="flex flex-row justify-between items-center">
                <h2 className="text-xl font-bold">{year} 年第 {semester} 學期</h2>
                <nav className="mx-2 border border-blue-500 rounded-md">
                    <Button variant={'ghost'}><Link to='search/113/1'>113年上學期</Link></Button>
                    <Button variant={'ghost'}><Link to='search/113/2'>113年下學期</Link></Button>
                    <Button variant={'ghost'}><Link to='search/113/3'>113年暑修</Link></Button>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}