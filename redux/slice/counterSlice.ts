"use client"
import { createSlice } from "@reduxjs/toolkit"

const initialState={
    count : 0
}

const counterSlice = createSlice({
    name:"createSlice",
    initialState,
    reducers :{
        /*action creator method*/
        increment:(state)=>{
            state.count+=1
        }

    },
    extraReducers :()=>{

    } 
})
export const{increment}=counterSlice.actions
export default counterSlice