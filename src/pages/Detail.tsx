import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import vietnameseData from "../assets/vi.json"

const Detail = () => {

    // get selected article from index
    const { id } = useParams(); // 'id' matches the parameter name in the Route path: /key-facts/vi/{id}
    const currentArticle = vietnameseData.collectionKeyFacts.find((item, index) => index === Number(id))   // id is index of article in collection

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
                        <p className="mb-4" style={{ fontSize: '1.5rem' }}></p>
                    </Row>
                </Container>
            </section>

            <Footer />
        </div>
    );
}

export default Detail