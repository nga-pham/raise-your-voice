import Header from "../components/Header";
import Footer from "../components/Footer";
import Collections from "../components/Collections";
import type { PassDataToAppProps } from "../components/interfaceComponentProps";

// props contains language: "en" | "vi"
const Index: React.FC<PassDataToAppProps> = ({ language, sendDataToApp }) => {
    console.log("Index render with language:", language, localStorage.getItem('lang'))

    return (
        <div className="min-h-screen">
            <Header language={language} sendDataToIndex={sendDataToApp} />
            <Collections language={language} />

            <Footer language={language} />
        </div>
    );
};

export default Index;