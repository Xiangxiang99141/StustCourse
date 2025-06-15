import { LoaderCircle } from 'lucide-react';

export default function Loading(){
    return(
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
            <LoaderCircle className="animate-spin" size={100}/>
            <p className="text-7xl">Loading.....</p>
        </div>
    )
}