"use client";
import NoteProvider from "@/components/contextCreateToggle/createContextProvider";
import { useState } from "react";

export default function ParentData({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    function toggleTheme() {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    const value = {
        theme,
        toggleTheme,
    };

    return (
        <NoteProvider value={value}>
            <div
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",   
                    alignItems: "center",       
                    backgroundColor: theme === "light" ? "beige" : "#111",
                    color: theme === "light" ? "#000" : "#fff",
                    
                }}
            >
                {children}
            </div>
        </NoteProvider>
    );
}
