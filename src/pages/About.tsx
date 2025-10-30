import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";

const AboutPage = ({ language, sendDataToApp }) => {
    return (
        <div className="min-h-screen">
            <Header language={language} sendDataToIndex={sendDataToApp} />

            <About language={language} />

            <Footer language={language} />
        </div>
    );
};

export default AboutPage;