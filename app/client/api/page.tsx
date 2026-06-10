// import axios from 'axios'
// import Link from 'next/link';

// import React from 'react'

// export default async function Api() {

//   const response = await axios.get(`https://dummyjson.com/products`)
//   console.log(response);

//   console.log(response.data.products);
//   const products = response.data.products


//   return (
//     <>
//       <ul>
//         {products.map((item) => (
//           <li key={item.id}>{item.title}
//             <Link href={`/client/api/${item.id}`}>
//               <button>details</button>
//             </Link>
//           </li>

//         ))}

//       </ul>


//     </>
//   )
// }

// import axios from "axios";
// import Link from "next/link";

// export default async function Api() {
//   const response = await axios.get(`https://dummyjson.com/products`);
//   console.log(response.data.products, "response");

//   return (
//     <>
//       <div>
//         <ul>
//           {response?.data.products.map((item) => {
//             return (
//               <>
//                 <li key={item.id}>{item.title}</li>
//                 <Link href={`/client/api/${item.id}`}>
//                   <button>Details</button>
//                 </Link>
//               </>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// }

import axios from 'axios';
import Link from 'next/link';
import React from 'react'

export default async function Api() {

  const response = await axios.get(`https://dummyjson.com/products`);

  console.log(response.data.products, "response");
  return (
    <>
      <div>
        <ul>
          {response.data.products.map((item) => {
            return (
              <>
                <li key={item.id}>{item.title}</li>
                <Link href={`/client/api/${item.id}`}>
                  <button style={{backgroundColor:"#fff" , borderRadius:"6px" , color:"#000" , padding:"2px"}}>Details</button>
                </Link>
              </>
            );
          })}
        </ul>
      </div>
    </>

  );
}

