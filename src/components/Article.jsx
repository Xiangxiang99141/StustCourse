import { Link } from "react-router";

export default function Article({code,name,credit,type,instructors,classes,schedule}){
    return(
        <article className="grid bg-white border-black/15 dark:bg-gray-800 dark:border-gray-100/15 relative rounded-2xl border px-4 pb-2 grid-cols-[1.3fr_1fr_1fr] grid-rows-3 gap-x-1.5 gap-y-2 md:grid-cols-[1.5fr_1fr_1fr]">
                <Link to={code} className="grid col-span-full row-span-full grid-cols-[1.3fr_1fr_1fr] grid-rows-3 gap-x-1.5 gap-y-2 md:grid-cols-[1.5fr_1fr_1fr]">
                    <h2 className="overflow-hidden text-ellipsis whitespace-nowrap col-span-full border-b border-black/15 py-2 font-bold dark:border-gray-100/15">{name}</h2>
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap before:block before:text-xs before:text-black/55 dark:before:text-gray-100/55 text-center text-sm before:content-['學分']">{credit}</p>
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap before:block before:text-xs before:text-black/55 dark:before:text-gray-100/55 text-center text-sm before:content-['類型']">{type}</p>
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap before:block before:text-xs before:text-black/55 dark:before:text-gray-100/55 text-center text-sm before:content-['教師']">{instructors}</p>
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap before:block before:text-xs before:text-black/55 dark:before:text-gray-100/55 text-center text-sm before:content-['班級']">{classes}</p>
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap before:block before:text-xs before:text-black/55 dark:before:text-gray-100/55 text-center text-sm before:content-['時間']">{schedule}</p>
                </Link>
        </article>
    )
}