import NoteContext from "./createContextToggle";

export default function NoteProvider({value , children}){

    return(

        <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
    )
}