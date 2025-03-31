import React, { useContext } from 'react'
import Practies2 from './Practies2'
import { name } from '../../App'

export default function Practies6({name}) {
    const name = useContext(name);
  return (
    <div>
        <h1>My name is {name}</h1>
     
    </div>
  )
}
