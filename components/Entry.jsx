export default function Entry()
{
    return (
        <>
        <div className="card">
            <div className="image-container">
                <img src="./images/globe.png" alt="" className="image" />
            </div>
            {/* <img src="./images/globe.png" alt="" /> */}
            
            <div className="article">
                <div className="location-label">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>Japan</span>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">
                    View on Google Maps
                    </a>
                </div>
                <h1>Japan</h1>
                <div className="date">
                    Dates: 12 Jan, 2021 - 24 Jan, 2021
                </div>
                <p>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists
                </p>
            </div>
        </div>
        </>
    )
}