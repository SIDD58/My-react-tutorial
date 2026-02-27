import { useState } from "react"
import AIRecipe from "./AIRecipe"
import IngredientsList from "./IngredientsList"
export default function Main()
{
    const [ingredients,setIngredients]=useState([])
    const [recipeShown,setRecipeShown]=useState(false)
    const ingredients_list_items=ingredients.map(
    (ingredient)=> <li key={ingredient}>{ingredient}</li>)
    const handle_submit= (form_data)=> {
        if (form_data.has('ingredient')){
            let ingredient_value=form_data.get('ingredient')
            setIngredients((prevState)=>[...prevState,ingredient_value])
        } 
    }
    const handle_show=()=>{
        setRecipeShown(!recipeShown)
    }
    return (
         <main>
            <form action={handle_submit} className="add-ingredient-form" >
                <input type="text" aria-label="Add ingredients" name="ingredient" id="" placeholder="Eg. Onions"/>
                <button>+ Add Ingredients</button>
            </form>
            {/* <ul>
                {ingredients_list_items}
            </ul> */}

            {
                ingredients_list_items.length !=0?
                <IngredientsList ingredients_list_items={ingredients_list_items} recipe_shown={handle_show}/>:null
            }
            {/* below is the ai response logic shown */}
                {recipeShown?<AIRecipe/>:null}
        </main>
    )
   
}