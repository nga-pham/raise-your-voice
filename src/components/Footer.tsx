import { Container, Row, Col } from "react-bootstrap";
import { AtSign } from 'lucide-react';

const Footer = () => {
    return (
        <section style={{ backgroundColor: "#F8F9FA" }}>
            <Container className="text-center pt-4" >
                <Row>
                    <Col lg={4}>
                        <span className="fs-4 fw-bold m-0">Raise Your Voice</span>
                        <p>Một blog đơn giản để hỗ trợ các nạn nhân bị tấn công tình dục, đặc biệt là phụ nữ Việt Nam ở nước ngoài, giúp họ đối phó với vấn đề này và chấn thương sau đó</p>
                        <p><AtSign size={10} className="ms-3" /> <a href="mailto:ngapt.fit@gmail.com" className="text-decoration-none text-dark">ngapt.fit@gmail.com</a></p>
                    </Col>
                    <Col lg={4}>
                        <h3>Tìm kiếm</h3>
                        <a href="/facts" className="d-block mb-2 text-decoration-none text-dark">Hiểu về lạm dụng tình dục</a>
                        <a href="/practices" className="d-block mb-2 text-decoration-none text-dark">Cách đối phó</a>
                    </Col>
                    <Col lg={4}>
                        <a href="/policy" className="text-decoration-none text-dark d-block mb-2">Chính sách bảo mật</a>
                        <a href="/terms" className="text-decoration-none text-dark d-block mb-2">Điều khoản dịch vụ</a>
                        <a href="/about" className="d-block mb-2 text-decoration-none text-dark">Về tôi</a>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <p className="center-text">2025@RaiseYourVoice. All rights reserved.</p>
                </Row>
            </Container>
        </section>
    )
};

export default Footer;