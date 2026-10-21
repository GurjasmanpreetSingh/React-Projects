import React from 'react'
import Counter from '../Pages/Counter'
import ShowPassword from '../Pages/ShowPassword'
import Toggle from '../Pages/Toggle'
import Login from '../Pages/Login'
import ShowContent from '../Pages/ShowContent'

const App = () => {
  return (
    <div>
      <Counter/>
      <br /><br />
      <ShowPassword/>
      <br /><br />
      <Toggle/>
      <br /><br />
      <Login/>
      <br /><br />
      <ShowContent/>
    </div>
  )
}

export default App

