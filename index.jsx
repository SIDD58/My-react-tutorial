import {createRoot} from 'react-dom/client'
import { Fragment } from 'react'

const root=createRoot(document.getElementById('root'))
root.render(
    <>
    <Header/>
    <MainContent/>
    <Footer/>
    </>
)
function Header()
{
    return(
        <>
        <header>
            <h1>Header component , this is independent custom component</h1>
        </header>
        </>
    )
}
function MainContent()
{
    return(
        <Fragment>
            <ol>
                <li>Fragment Component does not add extra div</li>
                <li>Hence it does not break CSS layout styles , parent child realtionship of 
                    elements like table - tr - td  </li>
                <li>It does not add any extra DOM node like Div</li>
            </ol>
            <p> Fragment Component has shorthand syntax which we use for our header</p>
        </Fragment>
    )
}

function Footer()
{
    return(
        <small>Copyright</small>
    )


}
