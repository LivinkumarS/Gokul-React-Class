import React from 'react'

export default function Student(props) {
  return (
    <div>
       <h4> name:{props.Name}</h4>
       <h4> Attendance:{props.IsPresent ? "yes" : "no"}</h4>
    </div>
  )
}
