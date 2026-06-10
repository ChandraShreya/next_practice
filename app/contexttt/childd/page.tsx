"use client"
import NoteContext from '@/components/contextTwo/createContextTwo'
// import NoteContext from '@/components/createContext/createContext'
import React, { useContext } from 'react'

export default function Childd() {
   const data = useContext(NoteContext)
  return (
    <div>
        {data.products.map((item)=>(
            <li>{item.description}</li>
        ))}
      
    </div>
  )
}
