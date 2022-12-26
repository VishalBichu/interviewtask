import { hover } from '@testing-library/user-event/dist/hover';
import React, { useEffect, useState } from 'react'
import './App.css';
import DropDown from './component/DropDown';
import NavBar from './component/NavBar'
import { data } from './data'
function App() {
  const [firstHover, setHover] = useState(false)
  const [secondHover, setSecondHover] = useState(false)
  const [firstIndex, setIndex] = useState("")
  const [ThirdHover,setTghirdHover]=useState(false)
  const [SecondIndex,setSecondIndex]=useState("")
  const [secondData,setSecondData]=useState([])
  const [thirdData,setThirdData]=useState([])
  console.log("change",firstIndex);
 
  useEffect(()=>{
    if(firstIndex !== ""){
       setSecondData(data[firstIndex]?.firstHover)
    }
  },[firstIndex])

  useEffect(()=>{
    setThirdData(secondData[SecondIndex]?.firstHover)
  },[SecondIndex])

  return (
    <div className='main'>
      <NavBar hover={setHover} value={firstHover} />
      <div className='Hover'>
        <div className='first-hover'>
          {
            firstHover == true && data &&  data.map((item, index) => <DropDown data={item.catogery} index={index} setIndex={setIndex} HoverSetup={setSecondHover} />)
          }
        </div>

        <div>
        {
           secondData && firstIndex !== "" && secondData.map((item,index)=> <DropDown data={item.catogery} index={index} setIndex={setSecondIndex} HoverSetup={setTghirdHover} /> )
        }
      </div>

      <div>
        {
           thirdData && SecondIndex !== "" && thirdData.map((item,index)=> <DropDown data={item.catogery} index={index} setIndex={setSecondIndex} HoverSetup={setTghirdHover} /> )
        }
      </div>

      </div>
    </div>
  )
}

export default App
