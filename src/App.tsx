import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail"
import Organization from "./pages/Organization"
import About from "./pages/About"
import { useState } from "react"; 

// use Vite-provided base at runtime
const base = import.meta.env.BASE_URL || "/";

const App = () => {
    const [lang, setLang] = useState("vi"); // initial language is Vietnamese
    const handleLanguageSettingFromChild = (language: string) => {
        setLang(language);
    }
    console.log("App language prop:", lang);


    return (
        <BrowserRouter basename={base}>
            <Routes>
                <Route path="/" element={<Index language={lang} sendDataToApp={handleLanguageSettingFromChild} />} />
                <Route path="/detail" element={<Index language={lang} sendDataToApp={handleLanguageSettingFromChild} />} />
                <Route path="/detail/key-facts/:id" element={<Detail language={lang} sendDataToApp={handleLanguageSettingFromChild} />} />
                <Route path="/detail/self-defense/:id" element={<Detail language={lang} sendDataToApp={handleLanguageSettingFromChild} />} />
                <Route path="/detail/you-are-not-alone/:id" element={<Detail language={lang} sendDataToApp={handleLanguageSettingFromChild} />} />
                {/* other */}
                <Route path="/organization" element={<Organization language={lang} sendDataToApp={handleLanguageSettingFromChild} />} />
                <Route path="/about" element={<About language={lang} sendDataToApp={handleLanguageSettingFromChild} />} />
                <Route path="*" element={<NotFound language={lang} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
