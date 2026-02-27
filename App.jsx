import pads from "./pads"
import {useState} from 'react'
import Pad from './components/Pad'

export default function App({darkMode}) {
    const [pad_buttons,setPads]=useState(pads)
    const state_change=(id)=>{
       console.log(id)
    }
    const pad_list=pad_buttons.map((pad)=><Pad key={pad.id} color={pad.color} on_status={pad.on} id={pad.id} pad_click={state_change}/>)
    return (
        <main>
            <div className="pad-container">
                {pad_list}
            </div>
        </main>
    )
}