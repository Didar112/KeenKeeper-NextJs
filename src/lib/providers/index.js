import { LogProvider } from '@/Context/LogContext';
import React from 'react';

const Provider = ({children}) => {
    return (

        <LogProvider>
            {children}
        </LogProvider>
        
    );
};

export default Provider;