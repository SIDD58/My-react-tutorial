import pads from "./pads"
import {useState} from 'react'
import Pad from './components/Pad'

export default function App({darkMode}) {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    const [pad_buttons,setPads]=useState(pads)
    // const color=darkMode?"#222222":"#cccccc"
    const pad_list=pad_buttons.map((pad)=><Pad key={pad.id} color={pad.color} on_status={pad.on}/>)

    // <button key={pad.id} 
    // style={{backgroundColor:color}}></button

    return (
        <main>
            <div className="pad-container">
                {pad_list}
            </div>
        </main>
    )
}