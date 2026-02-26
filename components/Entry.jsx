

export default function Entry(props)
{
    props=props.entry_obj
    // the below line is to access the object which is passed as prop
    // object is better to use as we do not have to type everything manually 
    return (
        <>
        <div className="card">
            <div className="image-container">
                <img src={props.img.src} alt={props.img.alt} className="image" />
            </div>
            {/* <img src="./images/globe.png" alt="" /> */}
            
            <div className="article">
                <div className="location-label">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>{props.country}</span>
                    <a href={props.googleMapsLink}>
                    View on Google Maps
                    </a>
                </div>
                <h1>{props.title}</h1>
                <div className="date">
                    {props.dates}
                </div>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
        </>
    )
}
// export default function Entry(props)
// {
//     return (
//         <>
//         <div className="card">
//             <div className="image-container">
//                 <img src={props.img.src} alt={props.img.alt} className="image" />
//             </div>
//             {/* <img src="./images/globe.png" alt="" /> */}
            
//             <div className="article">
//                 <div className="location-label">
//                     <i class="fa-solid fa-location-dot"></i>
//                     <span>{props.country}</span>
//                     <a href={props.googleMapsLink}>
//                     View on Google Maps
//                     </a>
//                 </div>
//                 <h1>{props.title}</h1>
//                 <div className="date">
//                     {props.dates}
//                 </div>
//                 <p>
//                     {props.text}
//                 </p>
//             </div>
//         </div>
//         </>
//     )
// }