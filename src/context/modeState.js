import { useState } from "react";
import { modeContext } from "./modeContext";

import React from 'react'

const ModeState = (props) => {
    
    const [darkMode, setDarkMode] = useState('light');

    const handleDarkMode = () => {
        if(darkMode === 'light'){
          setDarkMode('dark');
          document.body.style.backgroundColor = '#626060'; 
        }
        else{
          setDarkMode('light');
          document.body.style.backgroundColor = '#ffffff';
        }
    }

    return(
        <modeContext.Provider value={{ darkMode, handleDarkMode }}>
            {props.children}
        </modeContext.Provider>
    )
}

export default ModeState

