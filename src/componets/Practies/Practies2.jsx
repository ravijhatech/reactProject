import React from 'react'
import Practies0 from './Practies0'

export default function Practies2({name,children}) {
  return (
    <div>
      <Practies0 name={name}/>
      {children}
    </div>
  )
}
