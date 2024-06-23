import { useState } from 'react'
import LearnComponents from './components/LearnComponents'
import LearnJSX from './components/LearnJSX'
import LearnProps from './components/LearnProps'
import LearnEvent from './components/LearnEvent'
import LearnLiftingStandUp from './components/LearnLiftingStandUp'
import LearnState from './components/LearnState'
import Zohaib from './components/Zohaib'
import LearnHook from './components/LearnHook'
import LearnConditionalRender from './components/LearnConditionalRender'
import LearnMap from './components/LearnMap'
import LearnCSS from './components/LearnCSS'


function App() {

  let Roll = 2323

  // leftingStandUP --> child to parent data
  const getData = (data)=>{
    console.log(data)
  }
  // leftingStandUP --> child to parent data
  const getData2 = (data2)=>{
    console.log(data2)
  }





  return (
    <>
    {/* <LearnComponents/> */}
    {/* <LearnJSX/> */}
    {/* <LearnProps name= "Zohaib" RollNumber={Roll}/> */}
    {/* <LearnEvent/> */}
    {/* <LearnLiftingStandUp  kuchbhi ={getData}/> */}
    {/* nichy wala b lifting Stand UP hi ha, child to Parent */}
    {/* <Zohaib axha ={getData2}/> */}
    {/* <LearnState/> */}
    {/* <LearnHook/> */}
    {/* <LearnConditionalRender/> */}
    {/* <LearnMap/> */}
    <LearnCSS/>

   
    
      
    </>
  )
}

export default App
