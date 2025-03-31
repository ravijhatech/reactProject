
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Responsive = () => {
    const isMobile = useMediaQuery({maxWidth:600});
    const isTablet = useMediaQuery({minWidth:601,maxWidth:1024})
    const isDesktop = useMediaQuery({minWidth:1025})

  return (
    <div>
        {isMobile?<h1>mobile screen</h1>:<h1>Tablet screen</h1>}{isDesktop?<h1>desktop screen</h1>:isTablet};
        
    </div>
  )
}

export default Responsive