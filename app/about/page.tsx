// const about = async ()=>{
//     return <h1>hello shreya</h1>
// }
// export default about

import Users from '@/components/customHooks/apicall/apiCom'
import CounterCusTom from '@/components/customHooks/counter/counterCom'
import axios from 'axios';
import React from 'react'

export default async function about() {
  const response = await axios.get("http://localhost:8000/api/v1/blog/display/")
  console.log(response);
  

  return (
    <div>
        {/* <h1>about</h1> */}
        {/* <CounterCusTom/> */}
        {/* <Users/> */}
      
    </div>
  )
}
