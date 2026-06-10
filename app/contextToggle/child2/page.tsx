"use client";
import NoteContext from "@/components/contextCreateToggle/createContextToggle";
import { useContext } from "react";
// import NoteContext from "@/components/createContext/createContextToggle";


export default function Child2() {
  const { toggleTheme } = useContext(NoteContext);

  return (
    <button onClick={toggleTheme}

    style={{border:"2px solid #fff" , 
    borderRadius:"10px" ,
     padding:"10px"}}>
      
      Toggle Theme
    </button>
  );
}
