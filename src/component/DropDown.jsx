import React from 'react'

function DropDown({data,HoverSetup,index,setIndex}) {
    
  return  (
    <div className='drop-down'
    onMouseEnter={()=>{
        HoverSetup(data)
        setIndex(index)
    }}
    >
        <p>{data}</p>
    </div>
  )
}

export default DropDown