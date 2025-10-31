import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail"
import Organization from "./pages/Organization"
import About from "./pages/About"
import { useState, useEffect } from "react"; 

// use Vite-provided base at runtime
const base = import.meta.env.BASE_URL || "/";

const App = () => {
    
    const [language, setLanguage] = useState(() => localStorage.getItem("lang") || "vi"); // initial language is Vietnamese

    useEffect(() => {
        localStorage.setItem("lang", language);
    }, [language]);

    const sendData = (lang: string) => {
        setLanguage(lang);
        localStorage.setItem("lang", lang);
    }

    return (
        <BrowserRouter basename={base}>
            <Routes>
                <Route path="/" element={<Index language={language} sendDataToApp={sendData} />} />
                <Route path="/detail" element={<Index language={language} sendDataToApp={sendData} />} />
                <Route path="/detail/key-facts/:id" element={<Detail language={language} sendDataToApp={sendData} />} />
                <Route path="/detail/self-defense/:id" element={<Detail language={language} sendDataToApp={sendData} />} />
                <Route path="/detail/you-are-not-alone/:id" element={<Detail language={language} sendDataToApp={sendData} />} />
                {/* other */}
                <Route path="/organization" element={<Organization language={language} sendDataToApp={sendData} />} />
                <Route path="/about" element={<About language={language} sendDataToApp={sendData} />} />
                <Route path="*" element={<NotFound language={language} />} />
            </Routes>          
        </BrowserRouter>
    )
}

export default App
