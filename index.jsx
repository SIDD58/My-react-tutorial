
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
        const description=formdata.get('description')
        const employment=formdata.get('employment')
        const fav_character=formdata.getAll('character')
        const location=formdata.get('worklocation')
        console.log(email,password,description,employment,fav_character,location)
    }

    return(
        <>
        <h1>Sign Up</h1>
        <form action={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="Email" aria-label="Type Email" defaultValue="a@a"/>
            <br />
            <label >Password: 
            <input type="password" name="password" placeholder="Password" aria-label="Type Password" defaultValue="a@a"/>
            </label>
            <br />
            <label htmlFor="description">Description: </label>
            <textarea name="description" id="description" defaultValue="I refuse to give description"></textarea>
            <br />
            <legend>Employment Status</legend>
            <fieldset>
                <label>
                    <input type="radio" name="employment" value="part time"  />
                    Part Time
                </label>
                <label>
                    <input type="radio" name="employment" value="full time" />
                    Full time
                </label>
                <label>
                    <input type="radio" name="employment" value="unemployed" defaultChecked={true} />
                    Unemployed
                </label>
            </fieldset>
            <br />
            <legend>Favourite Character</legend>
            <fieldset>
                <label htmlFor="Jesus">Jesus</label>
                <input type="checkbox" name="character" id="Jesus" value="Jesus" defaultChecked/>
                <label htmlFor="Naruto">Naruto</label>
                <input type="checkbox" name="character" id="Naruto" value="Naruto" />
                <label htmlFor="Bruce lee">Bruce Lee</label>
                <input type="checkbox" name="character" id="Bruce lee" value="Bruce lee" />
            </fieldset>
            <br />
            <label htmlFor="location">Location:</label>
            <select name="worklocation" id="location" required>
                <option value="" disabled selected>Select</option>
                <option value="remote">remote</option>
                <option value="hybrid">hybrid</option>
                <option value="onsite">onsite</option>
            </select>
            <br />
            <br />
            

            <button>Sign Up</button>
        </form>
        
        </>

    )
}
createRoot(document.getElementById('root')).render(<Signup/>)



