export default function({setup,punchline,count})
{
    console.log(setup,punchline)
    return (
        <>
        <div className="joke-card">
            {/* conditonal rendering */}
            {setup && <p>Setup: {setup}</p>}
            <p>Punchline: {punchline}</p>
            <p>Count: {count}</p>
        </div>
        </>
    )
}