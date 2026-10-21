import React, { useState } from 'react'

const Toggle = () => {
    const[theme, setTheme] = useState(false)
  return (
    <div style={{backgroundColor : theme ? 'black' : 'white', color : theme ? 'white' : 'black', justifySelf : 'center'}}>
        <h1>Q3</h1> 
      <h1>Light And Dark Mode</h1>
      <button onClick={() =>setTheme (!theme)} >Change</button>
    </div>
  )
}

export default Toggle
