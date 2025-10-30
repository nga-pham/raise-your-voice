import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Breadcrumb } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import vietnameseData from "../assets/vi.json"
import typeData from "../assets/type-of-articles.json"
import { useLocation } from 'react-router-dom';

const base = "/raise-your-voice"

const Detail = ({ language, sendDataToApp }) => {

    // get selected article from index
    const { id } = useParams(); // 'id' matches the parameter name in the Route path: detail/key-facts/vi/{id}
    // get type of articles
    const location = useLocation();
    const fullPath = location.pathname.split('/');
    const category = fullPath[2];
    let currentArticle
    // id is index of article in collection
    if (category === typeData[0]) {
        currentArticle = vietnameseData.collectionKeyFacts.find((item, index) => {
            if (index === Number(id)) return item
        })   
    } else if (category === typeData[1]) {
        currentArticle = vietnameseData.collectionSelfDefense.find((item, index) => {
            if (index === Number(id)) return item
        })  
    } else if (category === typeData[2]) {
        currentArticle = vietnameseData.collectionYouAreNotAlone.find((item, index) => {
            if (index === Number(id)) return item
        })
    }
    // If article not found, show a simple message
    if (!currentArticle) {
        return (
            <div className="min-h-screen">
                <Header language={language} sendDataToIndex={sendDataToApp} />

                <section className="py-5">
                    <Container>
                        {vietnameseData.lang.trim() === language ?
                        <Row className="text-start g-5 mt-2">
                            <h1 style={{ fontWeight: 'bold' }}>Không tìm thấy bài báo</h1>
                            <p>Bài báo bạn yêu cầu không tồn tại. Chúng tôi xin lỗi vì sự bất tiện này.</p>
                        </Row> 
                        : <Row className="text-start g-5 mt-2">
                            <h1 style={{ fontWeight: 'bold' }}>Sorry, article not found</h1>
                            <p>The requested article does not exist.</p>
                        </Row>
                    }
                    </Container>
                </section>
                <Footer language={language} />
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Header language={language} sendDataToIndex={sendDataToApp} />

            <section className="py-5 mt-2">
                <Container>
                    <Row className="text-center justify-content-center p-3"><Breadcrumb>
                        <Breadcrumb.Item href={base }>Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>{currentArticle.title}</Breadcrumb.Item>
                    </Breadcrumb>
                    </Row>
                    {/*Vietnamese content*/}
                    {vietnameseData.lang.trim() === language ? 
                        <Row className="text-center justify-content-center p-3">
                            {/*title*/}
                            <h2 className="mb-4" style={{ fontWeight: 'bold' }}>{currentArticle.title}</h2>
                            {/*author*/}
                            <p style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Tác giả: {currentArticle.author}</p>
                            {/*credit*/}
                            <p style={{ color: 'rgba(1, 0, 0, 0.8)', fontStyle: 'italic' }}>
                                Lược dịch từ <a href={currentArticle.references}>{currentArticle.references}</a>
                            </p>
                            <img src={currentArticle.photo} />
                        </Row>
                        : <Row className="text-center justify-content-center p-3">
                            {/*title*/}
                            <h2 className="mb-4" style={{ fontWeight: 'bold' }}>{currentArticle.title}</h2>
                            {/*author*/}
                            <p style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Author: {currentArticle.author}</p>
                            <img src={currentArticle.photo} />
                        </Row>
                    }
                    
                    <Row>
                        {/*content*/}
                        {currentArticle.content.map(paragraph => (
                            <p className="mb-4 text-start" style={{ fontSize: '1.25rem' }}>{paragraph}</p>
                        ))}
                    </Row>
                </Container>
            </section>
            <Footer language={language} />
        </div>
    );
}

export default Detail