import Header from "../components/Header";
import Footer from "../components/Footer";
import OrganizationList from "../components/OrganizationList";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />

            <OrganizationList />

            <Footer />
        </div>
    );
};

export default Index;