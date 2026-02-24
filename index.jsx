import {createRoot} from 'react-dom/client'

const root=createRoot(document.getElementById('root'))
root.render( 
    //CreateBye()
    //OR
    <CreateBye/>
    // Both of these main the same thing we will use the second version
    // Most components are use slef closing tags 
)

function CreateBye()
{
    return(
        <main>
            <h1>Hello</h1>
            <p>use PASCAL case for components, for each word first letter capital</p>
        </main>
    )
}