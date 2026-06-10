import axios from "axios";
import dynamic from "next/dynamic";

const Paginate = dynamic(() => import("./pagi/page"), {});

export default async function DataList() {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/comments`
  );

  console.log(response.data, "response");

  return (
    <>
      <Paginate itemsPerpage={20} data={response.data} />
    </>
  );
}