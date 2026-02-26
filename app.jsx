import Jokes from './components/Jokes'
import jokes_list from './jokesData'

export default function App()
{
    const joke_jsx_list=jokes_list.map(
        (joke,index)=>{
            return <Jokes
            setup={joke.setup}
            punchline={joke.punchline}
            count={index+1}
            />
        }
    )
    return(
        <>
        {joke_jsx_list}
        {/* <Jokes setup="Why do programmers prefer dark mode?" punchline="Because light attracts bugs." count={1}/>
        
        <Jokes setup="How do you comfort a JavaScript bug?" punchline="you console it" count={2}/>
        <Jokes setup="Why was the function sad?" punchline="It had too many arguments." count={3}/>
        <Jokes punchline=" A hip-hip-array!" count={4}/> */}
       
       {/* count we can pass non string data types also */}
        </>
    )
}