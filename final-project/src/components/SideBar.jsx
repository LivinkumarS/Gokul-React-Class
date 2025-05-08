import React from 'react'
import { LuLayoutTemplate } from "react-icons/lu";

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className="icon-cont">
        <LuLayoutTemplate/>
        <p>Template</p>
      </div>
      <div className="icon-cont selected">
        <LuLayoutTemplate/>
        <p>Template</p>
      </div>
      <div className="icon-cont">
        <LuLayoutTemplate/>
        <p>Template</p>
      </div>
      <div className="icon-cont">
        <LuLayoutTemplate/>
        <p>Template</p>
      </div>
      <div className="icon-cont">
        <LuLayoutTemplate/>
        <p>Template</p>
      </div>
      <div className="icon-cont">
        <LuLayoutTemplate/>
        <p>Template</p>
      </div>
    </div>
  )
}
