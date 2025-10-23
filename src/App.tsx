import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// use Vite-provided base at runtime
const base = import.meta.env.BASE_URL || "/";

const App = () => (
        <BrowserRouter basename={base}>
            <Routes>
                <Route path="/" element={<Index />} />
                {/* other */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
);

export default App
