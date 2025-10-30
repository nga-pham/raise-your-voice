import Header from "../components/Header";
import Footer from "../components/Footer";
import OrganizationList from "../components/OrganizationList";

const Index = ({ language, sendDataToApp }) => {
    return (
        <div className="min-h-screen">
            <Header language={language} sendDataToIndex={sendDataToApp} />

            <OrganizationList language={language} />

            <Footer language={language} />
        </div>
    );
};

export default Index;