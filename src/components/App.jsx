import React, {useState, useEffect} from "react"
import {LanguageContext} from "./Context"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index"
import Mission from "./Mission"
import News from "./News"
import Blog from "./Blog"
import Contacts from "./Contacts"
import Innovation from "./Innovation"

function App(props) {
    const [language, setLanguage] = useState(localStorage.getItem("language"))

    useEffect(() => {
      localStorage.setItem("language", language)

    }, [language])
   
    let value = {language, setLanguage}
    
    return (  
        <LanguageContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            
            <Route index path="/" element={<Index />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/news" element={<News />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/innovation" element={<Innovation />} />
            
            
        
          </Routes>
        </BrowserRouter>
        </LanguageContext.Provider>
    )
}


export default App