import { useState } from "react"
export default function Main()
{
    const [ingredients,setIngredients]=useState([])
    const ingredients_list_items=ingredients.map(
    (ingredient)=> <li key={ingredient}>{ingredient}</li>)
    const handle_submit= (form_data)=> {
        if (form_data.has('ingredient')){
            let ingredient_value=form_data.get('ingredient')
            setIngredients((prevState)=>[...prevState,ingredient_value])
        } 
    }
    return (
         <main>
            <form action={handle_submit} className="add-ingredient-form" >
                <input type="text" aria-label="Add ingredients" name="ingredient" id="" placeholder="Eg. Onions"/>
                <button>+ Add Ingredients</button>
            </form>
            <ul>
                {ingredients_list_items}
            </ul>
        </main>
    )
   
}