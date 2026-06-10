"use client"
import React from 'react'
import NoteContext from './createContextTwo'

export default function ContextProvider({data , children}) {
  return (
    <div>
        <NoteContext.Provider value={data}>
            {children}

        </NoteContext.Provider>

      
    </div>
  )
}
