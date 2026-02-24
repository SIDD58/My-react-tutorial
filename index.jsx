import {createRoot} from 'react-dom/client'
import { Fragment } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

const root=createRoot(document.getElementById('root'))
root.render(
    <Page/>
)
function Page()
{
    return (
        <>
            <Header/>
            <MainContent/>
            <Footer/>      
        </>
    )
}




