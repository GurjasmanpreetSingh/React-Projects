import React, { useState } from 'react'

const ShowPassword = () => {
    const [password, setPassword] = useState(false)
  return (
    <div> <h1>Q2</h1> <br />
      <input type={password ? 'text' : 'password'} placeholder='Enter Password'  />
      <br /><br />
      <button onClick={()=> setPassword(!password)}>Show Password</button>
    </div>
  )
}

export default ShowPassword
