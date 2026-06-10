// "use client"
"use client"
import NoteContext from "@/components/createContext/createContext"
import { log } from "console"
import React, { useContext } from "react"

export default function ChildData() {
  const data = useContext(NoteContext);
  console.log(data, "dattaaaaaaa");

  return(
<>
 

    <h1>Child Data Component</h1>
    <div>
        {data.products && data.products.map((item)=>{
            return(
                <>
                <h1>{item.description}</h1>
                </>
            )

        })}
          
    </div>


</>

  )
}