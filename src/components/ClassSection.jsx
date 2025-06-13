import { useState } from "react";

const classes = [
    {'label': '工資系', 'value': 'imi'}, 
    {'label': '國企系', 'value': 'ib'}, 
    {'label': '財金系', 'value': 'fin'}, 
    {'label': '企管系', 'value': 'ba'}, 
    {'label': '資管系', 'value': 'mis'}, 
    {'label': '會資系', 'value': 'accinfo'}, 
    {'label': '休閒系', 'value': 'leisure'}, 
    {'label': '行流系', 'value': 'mim'}, 
    {'label': '餐旅系', 'value': 'hm'}, 
    {'label': '電機系', 'value': 'ee'}, 
    {'label': '機械系', 'value': 'mech'}, 
    {'label': '電子系', 'value': 'eecs'}, 
    {'label': '光電系', 'value': 'oe'}, 
    {'label': '資工系', 'value': 'csie'}, 
    {'label': '化材系', 'value': 'chem'}, 
    {'label': '生食系', 'value': 'bio'}, 
    {'label': '資傳系', 'value': 'ic'}, 
    {'label': '視傳系', 'value': 'vc'}, 
    {'label': '多樂系', 'value': 'mes'}, 
    {'label': '產設系', 'value': 'cpd'}, 
    {'label': '流音系', 'value': 'pmi'}, 
    {'label': '英語系', 'value': 'english'}, 
    {'label': '日語系', 'value': 'japan'}, 
    {'label': '幼保系', 'value': 'childcare'}, 
    {'label': '高福系', 'value': 'ss'}]

export default function ClassSection(){
    const [classCheck,setClassCheck] = useState('imi')
    const handleClassToggle = (value)=>{
        setClassCheck(value)
    }
    const itemsPerRow = 9;
    return(
        <section className="mx-3 border-b dark:border-gray-100/15 last:border-b-0 lg:grid lg:grid-cols-[12%_auto] lg:items-center lg:py-1">
            <h3 className="pb-1 pt-2 text-center font-bold text-black/60 dark:text-white">系所</h3>
            <div className="grid grid-cols-[repeat(auto-fill,5.625rem)] justify-center pb-2 lg:justify-normal lg:pb-0">
            {
                classes.map(({value,label},index)=>{
                    const rowStart = Math.floor(index / itemsPerRow) + 1;
                    return(
                        <label className="m-2 block min-w-[4.875rem] rounded-lg border border-blue-500 px-3.5 py-1.5 text-center text-blue-500 whitespace-nowrap hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:text-white max-lg:!row-start-auto" style={{gridRowStart:rowStart}} key={value}>
                            <input type="radio" name="department" className="sr-only" value={value} checked={value===classCheck } onChange={()=>handleClassToggle(value)}/>{label}
                        </label>
                    )
                })
            }
            </div>
        </section>
    )
}