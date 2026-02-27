
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
    const handleSubmit=(event)=>{
        event.preventDefault()
        const formEl=event.currentTarget
        const form=new FormData(formEl)
        const email=form.get('email')
        const password = form.get('password')
        console.log(email,password)
        formEl.reset()
        // method reset function is on form element 
    }

    return(
        <>
        <h1>Sign Up</h1>
        <form action="" method="get" onSubmit={handleSubmit}>
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



