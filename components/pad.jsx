import {useState} from 'react'
export default function Pad({color,on_status})
{
    const [on_stat,setOnStat]=useState(on_status)
    return (
        (
            <button style={{backgroundColor:color}} className={on_stat?"on":""} onClick={()=>{setOnStat(!on_stat)}}></button>)
        )
        
}