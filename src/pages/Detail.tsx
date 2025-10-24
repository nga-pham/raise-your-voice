import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import vietnameseData from "../assets/vi.json"
import typeData from "../assets/type-of-articles.json"
import { useLocation } from 'react-router-dom';

const Detail = () => {

    // get selected article from index
    const { id } = useParams(); // 'id' matches the parameter name in the Route path: detail/key-facts/vi/{id}
    // get type of articles
    const location = useLocation();
    const fullPath = location.pathname.split('/');
    const category = fullPath[2];
    let currentArticle
    // id is index of article in collection
    if (category === typeData[0]) {
        currentArticle = vietnameseData.collectionKeyFacts.find((item, index) => index === Number(id))   
    } else if (category === typeData[1]) {
        currentArticle = vietnameseData.collectionSelfDefense.find((item, index) => index === Number(id))  
    } else if (category === typeData[2]) {
        currentArticle = vietnameseData.collectionYouAreNotAlone.find((item, index) => index === Number(id))
    }
    // If article not found, show a simple message
    if (!currentArticle) {
        return (
            <div className="min-h-screen">
                <Header />
                <section className="py-5">
                    <Container>
                        <Row className="text-start g-5 mt-2">
                            <h1 style={{ fontWeight: 'bold' }}>Sorry, article not found</h1>
                            <p>The requested article does not exist.</p>
                        </Row>
                    </Container>
                </section>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Header />
            <section className="py-5 mt-2">
                <Container>
                    <Row className="text-center justify-content-center p-3">Breadcrumb to back</Row>
                    <Row className="text-center justify-content-center p-3">
                        <h2 className="mb-4" style={{ fontWeight: 'bold' }}>Title here</h2>
                        <p style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Author here</p>
                        <p style={{ color: 'rgba(1, 0, 0, 0.8)', fontStyle: 'italic' }}>Credit here</p>
                        <p className="mb-4" style={{ fontSize: '1.5rem' }}>{currentArticle.title}</p>
                    </Row>
                </Container>
            </section>

            <Footer />
        </div>
    );
}

export default Detail