
import React, { useState } from 'react'

const Login = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', padding : '10px'}}>
      <h1>Q4</h1>
      <h1>Login & Logout System</h1>

      {isLogin ? (
        <div>
          <h2>Welcome User!</h2>

          <button onClick={() => setIsLogin(false)}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => setIsLogin(true)}>
          Login
        </button>
      )}
    </div>
  )
}

export default Login
