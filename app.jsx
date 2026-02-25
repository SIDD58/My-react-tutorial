import Jokes from './components/Jokes'

export default function App()
{
    return(
        <>
        <Jokes setup="Why do programmers prefer dark mode?" punchline="Because light attracts bugs." count={1}/>
        {/* count we can pass non string data types also */}
        <Jokes setup="How do you comfort a JavaScript bug?" punchline="you console it" count={2}/>
        <Jokes setup="Why was the function sad?" punchline="It had too many arguments." count={3}/>
        <Jokes punchline=" A hip-hip-array!" count={4}/>
       
        </>
    )
}