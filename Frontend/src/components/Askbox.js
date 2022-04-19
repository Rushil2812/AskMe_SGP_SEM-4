import React from 'react'
import { Avatar } from "@material-ui/core";
import './Css/askbox.css'

function Askbox() {
  return (
    <div className='askbox'>
         <div className='askbox_info'> 
         <Avatar />
         </div>
         <div className='askbox_ask'>
         <h5>What is Your Question Or Link?</h5>
        </div>
    </div>
  )
}

export default Askbox