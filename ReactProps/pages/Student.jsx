import React from 'react'

const Student = (props) => {

  return (
    <div>
      <h1>Student Name: {props.name}</h1>
      <h1>Student Age: {props.age}</h1>
      <h1>Student Course: {props.course}</h1>
    </div>
  )
    }

export default Student
