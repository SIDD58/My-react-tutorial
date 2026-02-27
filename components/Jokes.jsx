import {useState} from 'react'
export default function({setup,punchline,count})
{
    const [isShown,setIsShown]=useState(false)
    const [unreadMessages, setUnreadMessages] = useState([])

    console.log(isShown)
    console.log(setup,punchline)
    return (
        <>
        <div className="joke-card">
            {/* conditonal rendering */}
            {setup ? <p>Setup: {setup}</p>:null}
            {isShown ? <p>Punchline: {punchline}</p>:null}
            <p>Count: {count}</p>
            <button onClick={()=>{setIsShown(!isShown)}}>{isShown?"Hide":"Show"} Punchline</button>
        </div>
        {unreadMessages.length != 0 && <h1>You have {unreadMessages.length} unread messages!</h1> }
        {unreadMessages.length == 0 && <p>You have no messages to read</p>}
        </>
    )
}