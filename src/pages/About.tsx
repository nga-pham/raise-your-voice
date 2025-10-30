import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import type { PassDataToAppProps } from "../components/interfaceComponentProps"; 

const AboutPage: React.FC<PassDataToAppProps> = ({ language, sendDataToApp }) => {
    return (
        <div className="min-h-screen">
            <Header language={language} sendDataToIndex={sendDataToApp} />

            <About language={language} />

            <Footer language={language} />
        </div>
    );
};

export default AboutPage;