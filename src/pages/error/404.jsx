import { Button } from "@/components/ui/button"
import { Link } from "react-router"

function Error404(){
    return(
        <main class="flex min-h-fit px-6 py-24 sm:py-32 lg:px-8 justify-center items-center">
            <div class="text-center">
                <p class="text-base font-semibold text-indigo-200">404</p>
                <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-100 sm:text-7xl">找不到頁面</h1>
                <p class="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">抱歉，您找的網頁不存在，您可以使用下面的按鈕來尋求協助</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <Button><Link to="/">回首頁</Link></Button>
                    <Button variant="outline">聯絡...沒辦法&rarr;</Button>
                </div>
            </div>
        </main>
    ) 
}

export default Error404