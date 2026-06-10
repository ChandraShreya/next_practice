
import ContextProvider from '@/components/contextTwo/contextProvider'
import axios from 'axios'
import { log } from 'console'
import React from 'react'


export default async function Parent({children}) {
    const response = await axios.get("https://dummyjson.com/products")
    console.log(response);
    
    
  return (
    <>
    <ContextProvider data={response.data}>
        {children}

    </ContextProvider>
    
    
        
      
    </>
  )
}
