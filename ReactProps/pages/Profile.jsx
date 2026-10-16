import React from 'react'

const Profile = (props) => {
  return (
    <div>
      <h1>Name : {props.name} </h1>
      <img src="https://up.yimg.com/ib/th/id/OIP.V-iUPXL7-oSOAvR2dtdWiQHaHa?pid=Api&rs=1&c=1&qlt=95&w=121&h=121" alt="profile"/> {props.img}
      <h1>City : {props.city}</h1>
    </div>
  )
}

export default Profile
