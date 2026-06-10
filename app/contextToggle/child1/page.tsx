"use client";
import NoteContext from "@/components/contextCreateToggle/createContextToggle";
import { useContext } from "react";
// import NoteContext from "@/components/createContext/createContextToggle";

export default function Child1() {
  const { toggleTheme } = useContext(NoteContext);

  return (
    <button onClick={toggleTheme} >
      Toggle Theme
    </button>
  );
}
