import axios from "axios"
import { log } from "console"

let cacheData = null
let cacheTime = 0
let REVALIDATE_TIMES = 60

export default async function ISR(){
    const date = Date.now()
    if(!cacheData || date - cacheTime > REVALIDATE_TIMES * 1000){
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        console.log(res);
        
         ((cacheData = res.data) , (cacheTime = date))
    }else{
        console.log("serve the cache data");
        
    }

    const  posts = cacheData
    return(
        <>
        <div style ={{padding:"2rem"}}>
            <h1>posts(Axios + Manual ISR)</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
                {posts.slice(0,5).map((post)=>(
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}