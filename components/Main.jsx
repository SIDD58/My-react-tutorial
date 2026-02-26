import { useState } from "react"
export default function Main()
{
    const [ingredients,setIngredients]=useState(['onions','tomatoes','peas'])
    const ingredients_list_items=ingredients.map(
    (ingredient)=> <li key={ingredient}>{ingredient}</li>)
    const handle_submit= (event)=> {
        event.preventDefault()
        console.log('Ok I am clicked')
        const form_data=new FormData(event.currentTarget)
        if (form_data.has('ingredient')){
            let ingredient_value=form_data.get('ingredient')
            ingredients.push(ingredient_value)
            console.log(ingredient_value)
            console.log(ingredients)
            setIngredients(ingredients)
        }
        
    }
    return (
         <main>
            <form action="" className="add-ingredient-form" onSubmit={handle_submit}>
                <input type="text" aria-label="Add ingredients" name="ingredient" id="" placeholder="Eg. Onions"/>
                <button>+ Add Ingredients</button>
            </form>
            <ul>
                {ingredients_list_items}
            </ul>
        </main>
    )
   
}