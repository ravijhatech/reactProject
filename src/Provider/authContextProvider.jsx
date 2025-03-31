import React, { createContext, useState } from 'react'


 const AuthContext = createContext
export default function AuthProvider({children}) {
    const [user ,setUser] = useState(null);

  return (
   <div>

   </div>
  )
}