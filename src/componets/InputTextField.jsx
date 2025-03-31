
import React from 'react'

const InputField = ({type,placeholder,value , onChange,label,style}) => {
  return (
   <div>
    style{style}
    <label>{label}</label>
    <input  type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    />
   </div>
  )
}

export default InputField