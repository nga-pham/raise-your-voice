import { Container, Row } from "react-bootstrap";

const About = () => {
    return (
        <section className="py-5 mt-2">
            <Container>
                <Row className="text-center p-3">
                    <h2>Về tôi</h2>
                    <p>Content here</p>
                </Row>
                <Row>Slideshow here</Row>
            </Container>
        </section>
    )
}

export default About