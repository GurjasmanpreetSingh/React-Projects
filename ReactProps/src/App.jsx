import React from 'react'
import Student from '../pages/student'
import Profile from '../pages/Profile'
import ProductCard from '../pages/ProductCard'
import CustomButton from '../pages/CustomButton'
import EmployeeDetails from '../pages/EmployeeDetails'

const App = () => {
  return (
    <div>
    <Student name="Jasman" age={22} course="MERN"/>
    <br />

    {/* Profile Card */}
    <div>
      <Profile name="Rohan" city="Mohali"/>
    </div>
    <br />

    {/* Product Card */}
    <div>
      <ProductCard name="Wireless Headphones" price={1499} description="Comfortable headphones with clear sound and deep bass."/>
      <br />
      <ProductCard name="Smart Watch" price={2999} description="A smartwatch with fitness tracking and notifications."/>
      <br />
      <ProductCard name="Backpack" price={899} description="A lightweight backpack suitable for college and travel."/>

    </div>
    <br />
    {/* Custom Button */}
    <CustomButton name="Red" color="red" />
    <CustomButton name="Blue" color="blue" />
    <CustomButton name="Green" color="green" />

    {/* Employee Details */}
    <EmployeeDetails name="Jasman" role="Full Stack Developer" salary={150000}/>
    <EmployeeDetails name="Ishan" role="Front-End Developer" salary={140000}/>
    <EmployeeDetails name="Adesh" role="Back-End Developer" salary={120000}/>
    </div>
  )
}

export default App
