import {useState} from "react"
import avatar from "./images/user.jpeg"
import StarButton from "./components/StarButton"
import Header from './components/Header'
import Body from './components/Body'

export default function App() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    const [userName,setUserName]=useState(contact.firstName+" "+contact.lastName)

    function toggleFavorite() {
        setContact((prevState)=>{
            const isFavorite=!prevState.isFavorite
            return (
                {...prevState,isFavorite}
            )
        })
    }

    return (
        <main>
            <Header name={userName} ></Header>
            <Body name={userName}></Body>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <StarButton isFilled={contact.isFavorite} handleClick={toggleFavorite}></StarButton>
                    {/* <button
                        onClick={toggleFavorite}
                        aria-pressed={false}
                        className="favorite-button"
                    >
                        <img
                            src={contact.isFavorite?starFilled:starEmpty}
                            alt= {(contact.isFavorite?"Filled":"Empty")+" star icon"}
                            className="favorite"
                        />
                    </button> */}
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}