import starFilled from "../images/starfill.png"
import starEmpty from "../images/starempty.png"
export default function StarButton({isFilled,handleClick})
{
    return(
         <button
            onClick={handleClick}
            aria-pressed={isFilled}
            className="favorite-button">
        <img
            src={isFilled?starFilled:starEmpty}
            alt= {(isFilled?"Filled":"Empty")+" star icon"}
            className="favorite"
        />
        </button>
    )
}