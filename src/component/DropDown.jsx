import React from 'react'

function DropDown({data,HoverSetup,index,setIndex,setTird}) {
    
  return  (
    <div className='drop-down'
    onMouseEnter={()=>{
        HoverSetup(data)
        setIndex(index)
        setTird("")
    }}
    >
        <p>{data}</p>
    </div>
  )
}

export default DropDown