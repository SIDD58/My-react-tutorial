export default function Pad({color,on_status})
{
    return (
        (
            <button style={{backgroundColor:color}} className={on_status?"on":""}></button>)
        )
        
}