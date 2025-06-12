import { Button } from "@/components/ui/button"
import { Link, Outlet } from "react-router"

export default function Header(){
    return(
        <>
            <header className="bg-gray-800 h-14 flex justify-around items-center sticky ps-5 pe-3 top-0">
                <Button variant="outline" className="border-dashed me-auto"><Link to="/">STUST Course</Link></Button>
                <nav>
                    <Button variant="link">
                        <Link to="/courses">查課程</Link>
                    </Button>
                    <Button variant="link">
                        <Link to="/teachers">查老師</Link>
                    </Button>
                    <Button variant="link">
                        <Link to="/about">關於作者</Link>
                    </Button>
                </nav>
            </header>
            {/* <Outlet/> */}
        </>
    )
}