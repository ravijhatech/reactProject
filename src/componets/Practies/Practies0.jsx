import React from 'react'
import Practies2 from './Practies2'

export default function Practies0({name,children}) {
  return (
    <div>
      <Practies2 name={name}/>
      {children}
    </div>
  )
}
