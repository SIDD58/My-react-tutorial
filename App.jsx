import pads from "./pads"
import {useState} from 'react'
import Pad from './components/Pad'

export default function App({darkMode}) {
    const [pad_buttons,setPads]=useState(pads)
    const state_change=(id)=>{
        console.log(id)
        setPads(prevState=>
            prevState.map(item=>{
                return item.id == id ? {...item,on:!item.on}:item
            })
        )
    }
    // const state_change=(id)=>{
    // console.log(id)

    //     setPads(
    //     (prevStat)=>{
    //         const pad_intial_state=prevStat[id-1]
    //         pad_intial_state.on=!pad_intial_state.on
    //         const newStat=prevStat.map(
    //             (state_object)=>{
    //                 if(state_object.id == pad_intial_state.id)
    //                 {
    //                     return pad_intial_state
    //                 }
    //                 else
    //                 {
    //                     return state_object
    //                 } 
    //             }
    //         )
    //         return (
    //             newStat
    //         )
    //     }
    // )}
    const pad_list=pad_buttons.map((pad)=><Pad key={pad.id} color={pad.color} on_status={pad.on} id={pad.id} pad_click={state_change}/>)
    return (
        <main>
            <div className="pad-container">
                {pad_list}
            </div>
        </main>
    )
}



