import React from 'react'
import WithHeaderStyledExample from './Library'
import BasicExample from './Library'
import { Row } from 'react-bootstrap'
import Carddesigin from '../componets/Card'

const Hostel = () => {
  return (
   
   <div className="p-9"  style={{display:"flex",justifyContent:"space-evenly",flexWrap:'wrap',}}>
   <Carddesigin cardtext={"Girls Rooms"}/>
   <Carddesigin cardtext={"Boys Rooms"}/>
    
   </div>
  )
}

export default Hostel