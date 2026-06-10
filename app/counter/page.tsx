"use client"

import { increment } from '@/redux/slice/counterSlice'

import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const {count}=useSelector((state)=>state.counter)
    const dispatch =useDispatch()
  return (
    <>
    <h2>{count}</h2>
    <button onClick={()=>{dispatch(increment())}}>Button</button>
      
    </>
  )
}
