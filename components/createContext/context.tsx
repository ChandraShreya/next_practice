"use client";

import NoteContext from "./createContext";

// import NoteContext from "./createContext";


export default function NoteProvider({ data, children }) {
  return (
    <NoteContext.Provider value={data}>
      {children}
    </NoteContext.Provider>
  );
}