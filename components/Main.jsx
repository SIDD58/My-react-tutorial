import {useState} from 'react'
import CountHeader from './CountHeader'
export default function App() {
    console.log("rendered")
    const [counter,setCounter]=useState(0)
    const decrement= ()=>{
        setCounter((prevcount)=>prevcount-1)
        setCounter((prevcount)=>prevcount-1)

    }
    const increment= ()=>{
        setCounter(counter+1)
        setCounter(counter+1)
    }
    const [goout,setGoout]=useState(true)
    //  Return value from callback function is important


    const [myFavoriteThings,setMyFavoriteThings] = useState([])
    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
    "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

    function addFavoriteThing() {
        setMyFavoriteThings((prevState)=>[...prevState,allFavoriteThings[prevState.length]])
        // We'll work on this next, nothing to do here yet.
    } 

    return (
        <main className="container">
            <button onClick={addFavoriteThing}>Add item</button>
            <section aria-live="polite">
                {thingsElements}
            </section>

            <h1>How many times will iron man say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={decrement}>–</button>
                <CountHeader number={counter}/>
                {/* <h2 className="count">{counter}</h2> */}
                <button className="plus" aria-label="Increase count" onClick={increment}>+</button>
            </div>
            {/* exrecise 2 */}
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value" onClick={()=>setGoout(!goout)}>{goout?"Yes":"No"}</button>
        </main>
    )
}

// import { useState } from "react"
// export default function Main()
// {
//     const [ingredients,setIngredients]=useState(['onions','tomatoes','peas'])
//     const ingredients_list_items=ingredients.map(
//     (ingredient)=> <li key={ingredient}>{ingredient}</li>)
//     const handle_submit= (event)=> {
//         event.preventDefault()
//         console.log('Ok I am clicked')
//         const form_data=new FormData(event.currentTarget)
//         if (form_data.has('ingredient')){
//             let ingredient_value=form_data.get('ingredient')
//             ingredients.push(ingredient_value)
//             console.log(ingredient_value)
//             console.log(ingredients)
//             setIngredients(ingredients)
//         }
        
//     }
//     return (
//          <main>
//             <form action="" className="add-ingredient-form" onSubmit={handle_submit}>
//                 <input type="text" aria-label="Add ingredients" name="ingredient" id="" placeholder="Eg. Onions"/>
//                 <button>+ Add Ingredients</button>
//             </form>
//             <ul>
//                 {ingredients_list_items}
//             </ul>
//         </main>
//     )
   
// }