import Header from './components/Header'
import Entry from './components/Entry'
import Turtle from './components/Turtle'
import data from './data'

export default function App()
{
    const data_jsx=data.map(
        (data)=>{
        return(

        <Entry
        key={data.id}
        entry_obj={data}
        />
        //     <Entry 
        // img={{
        //     src:data.img.src, 
        //     alt:data.img.alt}}
        // key={data.key}
        // title={data.title}
        // country={data.country}
        // googleMapslink={data.googleMapsLink}
        // dates={data.dates}
        // text={data.text}
        // >
        // </Entry> 
        // We can also pass data.img directly 
        // Because property name and shape of data is same what entry component property name and shape are 

        // <Entry 
        // img={data.img}
        // title={data.title}
        // country={data.country}
        // googleMapslink={data.googleMapsLink}
        // dates={data.dates}
        // text={data.text}
        // >
        // </Entry> 

        )    
        }
    )

    return(
        <>
        <Header/>
        {data_jsx}
        {/* <Entry img={{
            src:"https://scrimba.com/links/travel-journal-japan-image-url", 
            alt:"Mount Fuji"}}
            title="Mount Fuji" country="Japan" googleMapslink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" 
            dates="12 Jan, 2021 - 24 Jan, 2021" 
            text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists">
        </Entry> */}
        <Turtle/>
        </>
    )
}