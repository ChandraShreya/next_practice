"use client"
import { GetLandingPageList } from '@/api/functions/list.api'
import { useLandingPageList } from '@/components/customHooks/tanstackHooks/list.query.hooks'
import React from 'react'

export default function page() {
    const {data} = useLandingPageList()
  return (
    <>
    <h2>Landing page List</h2>
    {data?.map((item:any)=>(
       
            <p>{item.title}</p>
        
    ))}

      
    </>
  )
}
