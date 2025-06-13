import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link, Outlet } from "react-router"

export default function Header(){
    const [isOpen,setIsOpen] = useState(false);
    return(
        <>
            <header className="bg-gray-800 border-b-gray-500 border-b-2 sticky">
                <div className="container mx-auto h-14 flex justify-between items-center ps-3 pe-3">
                    <Button variant="outline" className="border-dashed me-auto">
                        <Link to="/">STUST Course</Link>
                    </Button>
                    <nav className={`bg-gray-800 absolute flex flex-col w-full left-0 top-14 max-h-fix justify-center items-center z-10 ${isOpen?'max-h-fix py-4 ':'max-h-0'} overflow-hidden ease-in-out transition-all duration-75 md:relative md:w-fit md:flex-row md:py-0 md:max-h-full`}>
                        <Button variant="link" className="w-full md:w-fit">
                            <Link to="/courses">查課程</Link>
                        </Button>
                        <Button variant="link" className="w-full md:w-fit">
                            <Link to="/teachers">查老師</Link>
                        </Button>
                        <Button variant="link" className="w-full md:w-fit">
                            <Link to="/about">關於作者</Link>
                        </Button>
                    </nav>
                    <Button className="w-10 h-10 grid place-items-center border border-gray-100/15 rounded-sm md:hidden cursor-pointer hover:bg-gray-700" variant="ghost" onClick={()=>setIsOpen(!isOpen)}>
                        <span data-v-3afe5ad9="" className="sr-only">打開選單</span>
                        <svg data-v-3afe5ad9="" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path data-v-3afe5ad9="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </Button>
                </div>
            </header>
            {/* <Outlet/> */}
        </>
    )
}