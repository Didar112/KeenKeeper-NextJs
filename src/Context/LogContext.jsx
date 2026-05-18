'use client'

import { createContext, useContext, useState } from "react"

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
        
    }

    return (
        <LogContext.Provider value={{ logs, addLog }}>
            {children}
        </LogContext.Provider>
    )
}

export const useLogs = () => useContext(LogContext)