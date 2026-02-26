export default function Turtle()
{
    const turtles=['kato','sato','mato']
    const turtles_jsx=turtles.map(
        (turtle)=> <h3>{turtle}</h3>
    )
    return(
        <>
        {turtles_jsx}
        </>

    )
    // return(
    //     {'hello'}
    // )
    // above line causes error because it was not retruning a single JSX object


}