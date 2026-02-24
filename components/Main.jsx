import { Fragment } from 'react'
export default function Main()
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