import NoteProvider from "@/components/createContext/context";
import axios from "axios";
import NoteContext from "@/components/createContext/createContext";




export default async function ParentData({ children }) {
  const response = await axios.get(`https://dummyjson.com/products`);

  return (
    <>
      <NoteProvider data={response.data}>{children}</NoteProvider>
    </>
  );
}
