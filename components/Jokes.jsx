import {useState} from 'react'
export default function({setup,punchline,count})
{
    const [isShown,setIsShown]=useState(false)

    console.log(isShown)
    console.log(setup,punchline)
    return (
        <>
        <div className="joke-card">
            {/* conditonal rendering */}
            {setup && <p>Setup: {setup}</p>}
            {isShown && <p>Punchline: {punchline}</p>}
            <p>Count: {count}</p>
            <button onClick={()=>{setIsShown(!isShown)}}>Show Punchline</button>
        </div>
        </>
    )
}