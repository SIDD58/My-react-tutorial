import {useState} from 'react'
export default function Pad({color,on_status,pad_click,id})
{
    return (
            <button style={{backgroundColor:color}} className={on_status?"on":""} onClick={()=>{pad_click(id)}}></button>
        )
        
}
