'use client'

import { createContext, useContext, useState } from "react"
import { toast } from "react-toastify";

const LogContext = createContext()

export const LogProvider = ({ children }) => {

    const [logs, setLogs] = useState([])

    const addLog = (type, person) => {

        const newLog = {
            id: Date.now(),
            type: type,
            person: person,
            date: new Date().toLocaleDateString()
        }

        setLogs([newLog, ...logs])

        if(type==="Call"){
            toast.success(`Call with ${person}`)
        }
        else if(type==="Text")
        {
            toast.success(`Texted ${person}`)
        } else if(type==="Video")
        {
            toast.success(`Video chat with ${person}`)
        }
    }

    return (
        <LogContext.Provider value={{ logs, addLog }}>
            {children}
        </LogContext.Provider>
    )
}

export const useLogs = () => useContext(LogContext)