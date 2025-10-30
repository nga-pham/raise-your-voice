import Header from "../components/Header";
import Footer from "../components/Footer";
import OrganizationList from "../components/OrganizationList";
import type { PassDataToAppProps } from "../components/interfaceComponentProps"; 

const Index: React.FC<PassDataToAppProps> = ({ language, sendDataToApp }) => {
    return (
        <div className="min-h-screen">
            <Header language={language} sendDataToIndex={sendDataToApp} />

            <OrganizationList language={language} />

            <Footer language={language} />
        </div>
    );
};

export default Index;