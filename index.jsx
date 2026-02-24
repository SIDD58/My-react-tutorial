import {createRoot} from 'react-dom/client'

const root=createRoot(document.getElementById('root'))
root.render(<h1>Hello</h1>)
console.log("React Element Javascript object")
console.log(<h1>Hello</h1>)
const h1=document.createElement('h1')
console.log("Actual browser DOM element")
console.log(h1)