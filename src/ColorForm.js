import React, {useState} from 'react'

function ColorForm(props){
    let [input, setINput] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addColor(input)
    }
    return (
        <div>
            <form>
                <input type='text' onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}