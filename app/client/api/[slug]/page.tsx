// "use client";


// import axios from 'axios';
// import { useParams , useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react'

// export default function Details() {
//     const [data, setData] = useState({});

//         let router = useParams();
//         let id = router.slug;
//         console.log(id, "id");
//         let {title , availabilityStatus } = data;

//        useEffect(() => {
//          async function fetchData () {
//                 try{
//                     const res = await axios.get(`https://dummyjson.com/products/${id}`);
//                     setData(res.data);
//                     return res.data;
//                 }catch{
//                     console.log("error");
//                 }
//             }
//             fetchData();
//        }, [id]);

//   return (
//    <>
//     <div>
//       <h1>{availabilityStatus}</h1>
//       <h2>{title}</h2>
//     </div>
//    </>
//   );
// }

import axios from "axios"

type Props = {
  params: Promise<{ slug: String }>
}

export default async function Details({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) return <p>product Id not found in url</p>

  const response = await axios.get(`https://dummyjson.com/products/${slug}`)
  const product = response.data
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>price: ${product.price}</p>
    </div>
  )
}