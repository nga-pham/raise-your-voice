import { Container, Row, Col, Card, Button } from "react-bootstrap";
import jsonData from "../assets/you-are-not-alone.json";
import { useNavigate } from 'react-router-dom';

const lang = "vn"; // "en" or "vn"

const Collections = () => {


    return (
        <>
            {/* You are not alone */}
            <section className="py-5 mt-2 ">
                <Container>
                    <Row className="text-center justify-content-center p-3">
                        <h2 className="mb-4" style={{fontWeight: 'bold'}}>Bạn không cô đơn</h2>
                        <p className="mb-4" style={{fontSize: '1.5rem'}}>Cùng lắng nghe người nổi tiếng chia sẻ về lạm dụng tình dục</p>
                        {jsonData.map(item => {
                            if (item.lang.trim() === lang.trim()) {
                            return <Row>
                                {item.collection.map((collection, _idx) => {
                                    return (
                                        <Col md={4} key={_idx} >
                                            <Card className="m-2" style={{ minWidth: '18rem' }}>
                                        <Card.Img variant="top" src={collection.photo} />
                                        <Card.Body>
                                            <Card.Title>
                                            <p style={{ color: '#000', textAlign: 'left' }}>{collection.title}</p>
                                            </Card.Title>
                                            <Card.Text style={{ color: '#000', textAlign: 'left', fontSize: '1rem' }}>
                                                {collection.description}
                                            </Card.Text>
                                            <Card.Link href={collection.references}>{collection.caption}</Card.Link>
                                        </Card.Body>
                                            
                                    </Card>
                                        </Col>
                                    )
                                })}
                            </Row>
                            }
                        })}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Collections;

