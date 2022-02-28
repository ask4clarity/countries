import React from 'react' 

const Button = ({click, country}) => {
    return (
        <button onClick={() => click({country})}>show</button>
    )
}

export default Button 