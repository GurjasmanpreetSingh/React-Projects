import React from 'react'

const EmployeeDetails = (props) => {
  return (
    <div>
      <h2>Employee Name : {props.name}</h2>
      <h2>Job Role : {props.role}</h2>
      <h2>Salary : {props.salary}</h2>
    </div>
  )
}

export default EmployeeDetails
