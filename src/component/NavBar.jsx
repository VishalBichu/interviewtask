import React, { useState } from 'react'
import {BsTagFill} from 'react-icons/bs'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
function NavBar({hover,value}) {
  
  return (
    <div className='Navbar '>
        <div className='shop'
        onMouseEnter={()=>{
          hover(true)
          
        }}
        >
            <p>SHOP BY CATAGORY</p>
            {
              value==false ? <IoIosArrowUp className='arrow' /> : <IoIosArrowDown className='arrow'  />
            }

        </div>
        <div className='offer'>
            <BsTagFill className='arrow tag' />
            OFFERS
        </div>
    </div>
  )
}

export default NavBar;