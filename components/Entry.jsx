export default function Entry(props)
{
    console.log(props)
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