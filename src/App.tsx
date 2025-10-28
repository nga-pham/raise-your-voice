import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail"
import Organization from "./pages/Organization"
import About from "./pages/About"

// use Vite-provided base at runtime
const base = import.meta.env.BASE_URL || "/";

const App = () => (
        <BrowserRouter basename={base}>
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/detail" element={<Index />} />
                <Route path="/detail/key-facts/:id" element={<Detail />} />
                <Route path="/detail/self-defense/:id" element={<Detail />} />
                <Route path="/detail/you-are-not-alone/:id" element={<Detail />} />
            {/* other */}
            <Route path="/organization" element={<Organization />} />
            <Route path="/about" element={<About /> } />
            <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
);

export default App
