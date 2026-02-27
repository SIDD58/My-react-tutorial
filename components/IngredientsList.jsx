export default function IngredientsList({ingredients_list_items,recipe_shown})
{
    return(
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredients_list_items}</ul>

            {ingredients_list_items.length>3?<div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={recipe_shown}>Get a recipe</button>
            </div>:null}
        </section>      
    )
}