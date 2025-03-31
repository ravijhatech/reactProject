
import React from 'react'
import Carddesigin from '../componets/Card'

const Library = () => {
  return (
<div>
<h1 className='text-center'>
    Library Management System
</h1>
<div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
<div  className='text-center' content='white'>
    <Carddesigin  height={"30%"} width={"20%"} cardtext={"Book Management"} src={"https://cdn-icons-png.flaticon.com/128/29/29302.png"} />
    
</div>
<div  className='text-center' content='white'>
    <Carddesigin  height={"30%"} width={"20%"} cardtext={"Student Management"} src={"https://cdn-icons-png.flaticon.com/128/17005/17005609.png"} />
    
</div>
<div  className='text-center' content='white'>
    <Carddesigin  height={"30%"} width={"20%"} cardtext={"Lending & Returning"} src={"https://cdn-icons-png.flaticon.com/128/14183/14183548.png"} />
    
</div>
<div  className='text-center' content='white'>
    <Carddesigin  height={"30%"} width={"20%"} cardtext={"Reporting"} src={"https://cdn-icons-png.flaticon.com/128/2912/2912773.png"} />
    
</div>
</div>
</div>
  )
}

export default Library