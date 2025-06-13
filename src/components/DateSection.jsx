import { useState } from "react";

export default function DateSection(){
    const [selectedTimes, setSelectedTimes] = useState([]);
    // const timeScheduleArray = [
        //     // 期間選擇 (全選按鈕 + 1-14期)
        //     ["P", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
        //     // 星期一 (Monday)
    //     ["M", "M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "M13", "M14"],
    //     // 星期二 (Tuesday)
    //     ["T", "T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12", "T13", "T14"],
    //     // 星期三 (Wednesday)
    //     ["W", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12", "W13", "W14"],
    //     // 星期四 (Thursday)
    //     ["R", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14"],
    //     // 星期五 (Friday)
    //     ["F", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14"],
    //     // 星期六 (Saturday)
    //     ["S", "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "S11", "S12", "S13", "S14"],
    //     // 星期日 (Sunday)
    //     ["U", "U1", "U2", "U3", "U4", "U5", "U6", "U7", "U8", "U9", "U10", "U11", "U12", "U13", "U14"]
    // ];
    // const chineseLabels = [
    //     ["全選", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
    //     ["一", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
    //     ["二", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
    //     ["三", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
    //     ["四", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
    //     ["五", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
    //     ["六", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
    //     ["日", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
    // ];
    //GPT 輔助生成
    const timeScheduleArray = [
    [
        {"key": "P","label": "全選"},
        {"key": "1","label": "1"},
        {"key": "2","label": "2"},
        {"key": "3","label": "3"},
        {"key": "4","label": "4"},
        {"key": "5","label": "5"},
        {"key": "6","label": "6"},
        {"key": "7","label": "7"},
        {"key": "8","label": "8"},
        {"key": "9","label": "9"},
        {"key": "10","label": "10"},
        {"key": "11","label": "11"},
        {"key": "12","label": "12"},
        {"key": "13","label": "13"},
        {"key": "14","label": "14"}
    ],
    [
        {"key": "M","label": "一"},
        {"key": "M1","label": "1"},
        {"key": "M2","label": "2"},
        {"key": "M3","label": "3"},
        {"key": "M4","label": "4"},
        {"key": "M5","label": "5"},
        {"key": "M6","label": "6"},
        {"key": "M7","label": "7"},
        {"key": "M8","label": "8"},
        {"key": "M9","label": "9"},
        {"key": "M10","label": "10"},
        {"key": "M11","label": "11"},
        {"key": "M12","label": "12"},
        {"key": "M13","label": "13"},
        {"key": "M14","label": "14"}
    ],
    [
        {"key": "T","label": "二"},
        {"key": "T1","label": "1"},
        {"key": "T2","label": "2"},
        {"key": "T3","label": "3"},
        {"key": "T4","label": "4"},
        {"key": "T5","label": "5"},
        {"key": "T6","label": "6"},
        {"key": "T7","label": "7"},
        {"key": "T8","label": "8"},
        {"key": "T9","label": "9"},
        {"key": "T10","label": "10"},
        {"key": "T11","label": "11"},
        {"key": "T12","label": "12"},
        {"key": "T13","label": "13"},
        {"key": "T14","label": "14"}
    ],
    [
        {"key": "W","label": "三"},
        {"key": "W1","label": "1"},
        { "key": "W2", "label": "2"},
        {"key": "W3", "label": "3"},
        {"key": "W4","label": "4"},
        {"key": "W5","label": "5"},
        {"key": "W6","label": "6"},
        {"key": "W7","label": "7"},
        {"key": "W8","label": "8"},
        {"key": "W9","label": "9"},
        {"key": "W10","label": "10"},
        {"key": "W11","label": "11"},
        {"key": "W12","label": "12"},
        {"key": "W13","label": "13"},
        {"key": "W14","label": "14"}
    ],
    [
        {"key": "R","label": "四"},
        {"key": "R1","label": "1"},
        {"key": "R2","label": "2"},
        {"key": "R3","label": "3"},
        {"key": "R4","label": "4"},
        {"key": "R5","label": "5"},
        {"key": "R6","label": "6"},
        {"key": "R7","label": "7"},
        {"key": "R8","label": "8"},
        {"key": "R9","label": "9"},
        {"key": "R10","label": "10"},
        {"key": "R11","label": "11"},
        {"key": "R12","label": "12"},
        {"key": "R13","label": "13"},
        {"key": "R14","label": "14"}
    ],
    [
        {"key": "F", "label": "五"},
        {"key": "F1","label": "1"},
        {"key": "F2","label": "2"},
        {"key": "F3","label": "3"},
        {"key": "F4","label": "4"},
        {"key": "F5","label": "5"},
        {"key": "F6","label": "6"},
        {"key": "F7","label": "7"},
        {"key": "F8","label": "8"},
        {"key": "F9","label": "9"},
        {"key": "F10","label": "10"},
        {"key": "F11","label": "11"},
        {"key": "F12","label": "12"},
        {"key": "F13","label": "13"},
        {"key": "F14","label": "14"}
    ],
    [
        {"key": "S","label": "六"},
        {"key": "S1","label": "1"},
        {"key": "S2","label": "2"},
        {"key": "S3","label": "3"},
        {"key": "S4","label": "4"},
        {"key": "S5","label": "5"},
        {"key": "S6","label": "6"},
        {"key": "S7","label": "7"},
        {"key": "S8","label": "8"},
        {"key": "S9","label": "9"},
        {"key": "S10","label": "10"},
        {"key": "S11","label": "11"},
        {"key": "S12","label": "12"},
        {"key": "S13","label": "13"},
        {"key": "S14","label": "14"}
    ],
    [
        {"key": "U","label": "日"},
        {"key": "U1","label": "1"},
        {"key": "U2","label": "2"},
        {"key": "U3","label": "3"},
        {"key": "U4","label": "4"},
        {"key": "U5","label": "5"},
        {"key": "U6","label": "6"},
        {"key": "U7","label": "7"},
        {"key": "U8","label": "8"},
        {"key": "U9","label": "9"},
        {"key": "U10","label": "10"},
        {"key": "U11","label": "11"},
        {"key": "U12","label": "12"},
        {"key": "U13","label": "13"},
        {"key": "U14","label": "14"}
    ]
    ]
    const toggleTime = (value) => {

        // 👉 特殊處理 row 0 col 0：「全域全選 / 清除」
        if (value === "P") {
            const allKeys = timeScheduleArray
            .slice(1) // 不包含第一列（標題列）
            .flatMap(row => row.slice(1)) // 不包含每列的 label 欄
            .map(cell => cell.key); // 取出每格的 key
            const alreadyAllSelected = allKeys.every(k => selectedTimes.includes(k));
            setSelectedTimes(alreadyAllSelected ? [] : allKeys);
        }
        // 👉 一般 toggle 行為
        else {
            setSelectedTimes(prev =>
                prev.includes(value)
                    ? prev.filter(v => v !== value)
                    : [...prev, value]
            );
        }
    };


    return(
        <section className="mx-3 border-b dark:border-gray-100/15 last:border-b-0 lg:grid lg:grid-cols-[12%_auto] lg:items-center lg:py-1 border-t-2">
            <h3 className="pb-1 pt-2 text-center font-bold text-black/60 dark:text-white">日期</h3>
            <div className="grid grid-cols-[repeat(auto-fill,5.625rem)] justify-center pb-2 lg:justify-normal lg:pb-0">
                <div className="grid grid-col-1 gap-y-3 py-2 px-2 md:grid-cols-8 md:gap-x-2 lg:grid-cols-1 lg:gap-y-2 col-span-full row-span-full">
                    {timeScheduleArray.map((days,rowIndex)=>{
                        return(
                            <div className="grid grid-cols-5 gap-2 first-of-type:hidden sm:grid-cols-7 md:first-of-type:grid md:grid-cols-1 md:gap-y-2 lg:grid-cols-[repeat(15,minmax(0,3.75rem))] lg:gap-x-2" key={rowIndex}>
                                {days.map(({key,label},colIndex)=>{
                                    if(rowIndex==0 || colIndex==0){
                                        return(key == 'P'?
                                            (
                                                <label className="grid place-items-center rounded-lg border border-blue-500 py-1.5 text-blue-500 hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:text-white first-of-type:col-span-full lg:first-of-type:col-auto" onClick={()=>toggleTime(key)} key={key}>
                                                    {label}
                                                </label>
                                            ):(
                                                <label className="grid place-items-center rounded-lg border border-blue-500 py-1.5 text-blue-500 hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:text-white first-of-type:col-span-full lg:first-of-type:col-auto" key={key}>
                                                    {label}
                                                </label>
                                            )
                                        )
                                    }
                                    else{
                                        return(
                                        <label className={`grid place-items-center rounded-lg border border-blue-500 py-1.5 text-blue-500 hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:text-white first-of-type:col-span-full lg:first-of-type:col-auto ${selectedTimes.includes(key) ? "bg-blue-500 text-white" : "text-blue-500"}`} key={key}>
                                            <input name="time" type="button" className="sr-only" value={key} onClick={()=>toggleTime(key)}/> {label}
                                        </label>
                                    )
                                    }
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}