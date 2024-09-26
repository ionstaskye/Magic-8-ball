import React, {useState} from "react"

const EightBall = (props) => {
    random = Math.floor(Math.random() * props.choices.length)
    randomMessage = props.choices[random]
    const [message, setMessage]  = useState("Think of a question")
    const [color, setColor] = useState ("black")
const changeMessage = ()=> {
    setMessage(randomMessage.message)
    setColor(randomMessage.color)
}
    return <>
    <span className = "ball" style = {{backgroundColor: color}} onClick={ changeMessage()}>{message}</span>
    </>
}

export default EightBall