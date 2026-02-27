
// myform=document.getElementById('my-form')
// myform.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     form_data=new FormData(event.currentTarget)
//     const first=form_data.get('firstName')
//     const last=form_data.get('lastName')
//     console.log(first,last)
// })
import { createRoot } from "react-dom/client";

function Signup()
{
    const handleSubmit=(formdata)=>{
        const email=formdata.get('email')
        const password=formdata.get('password')
        console.log(email,password)
    }

    return(
        <>
        <h1>Sign Up</h1>
        <form action={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="Email" aria-label="Type Email"/>
            <br />
            <label >Password: 
            <input type="password" name="password" placeholder="Password" aria-label="Type Password"/>
            </label>
            <br />
            <button>Sign Up</button>
        </form>
        
        </>

    )
}
createRoot(document.getElementById('root')).render(<Signup/>)



