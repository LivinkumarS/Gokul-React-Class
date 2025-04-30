import React from 'react'

export default function GreatGrandChild(props) {
  return (
    <div className="cont">
      <h1>Great Grand Child</h1>
      <p>secret number:{props.Number}</p>
    </div>
  )
}
