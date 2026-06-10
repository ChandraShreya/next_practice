"use client"
import NoteContext from '@/components/contextTwo/createContextTwo';
// import NoteContext from '@/components/createContext/createContext'
import { log } from 'console'
import React, { useContext } from 'react'

export default function Child() {
    const data = useContext(NoteContext)
    console.log(data , "shreya");
    // console.log(data.products , "kkkk");
    
    
  return (
    <div>
        {data?.products.map((item)=>(
            <li key={item.id}>{item.description}</li>
        ))}
 
    </div>
  )
}
