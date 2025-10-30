import { Container, Row, Button, Carousel, CarouselItem, Modal } from "react-bootstrap";
import vietnameseData from "../assets/vi.json"
import proof00 from "../assets/proof00.jpg"
import proof01 from "../assets/proof01.jpg";
import proof02 from "../assets/proof02.jpg";
import proof03 from "../assets/proof03.jpg";
import proof04 from "../assets/proof04.jpg";
import proof05 from "../assets/proof05.jpg";
import qr from "../assets/qr_vpbank.jpg"
import { useState } from "react"
import type { NoPassDataProps } from "./interfaceComponentProps"; 

const proofs = [proof00, proof01, proof02, proof03, proof04, proof05];

const About: React.FC<NoPassDataProps> = ({ language }) => {

    // for opening donate popup
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section className="py-5 mt-2">
            {vietnameseData.lang.trim() === language ?
                //Vietnamese content
                <Container>
                    <Row className="text-center p-3">
                        <h2>Về tôi</h2>
                        <p style={{ textAlign: 'left' }}>Tên tôi là Nancy, quốc tịch Việt Nam. Từng là một người nỗ lực vươn lên với tấm bằng giỏi ngành CNTT, 2 ngoại ngữ và làm việc tại các công ty lớn nhỏ trong và ngoài nước (châu Âu).
                            Do nhiều biến cố (ly hôn, thất nghiệp), có thời gian tôi phải làm shipper để kiếm sống. Nhưng như vậy tôi cũng không được yên.
                            Trong thời gian làm shipper ở Linz, Cộng hòa Áo, tôi bị người chủ (gọi là Rider Captain) tên Stefan Leuko quấy rối tình dục và coi tôi như đồ chơi.
                            Khi tôi cự tuyệt, ông ta tìm đủ mọi cách, từ giả vờ tán tỉnh cho đến dọa nạt, tước đi điều kiện làm việc chính đáng. Phần lớn thông tin ông ta trao đổi trên phần mềm chat của công ty dù không được phép.
                            Cực chẳng đã, tôi phải phản ánh sự việc lên HR (xem slide). Chưa dừng lại ở đó, ông ta tiếp tục gửi mail xúc phạm tôi. Rất may tôi đã trở về VN.
                        </p>
                        <p style={{ textAlign: 'left' }}>
                            Hiện tại, tôi đang hợp tác với Hagar International Vietnam, tổ chức chuyên hỗ trợ người chịu ảnh hưởng của sang chấn do nạn mua bán, bạo lực và xâm hại gây ra.
                            Tôi lập blog này để cung cấp thông tin cho phụ nữ, đặc biệt là phụ nữ Việt Nam ở nước ngoài, kiến thức cũng như thông tin phòng tránh bị lạm dụng, xâm hại cũng như bị buôn bán bởi các tổ chức buôn người.
                        </p>
                    </Row>
                    <Row className="justify-content-center">
                        <Carousel>
                            {proofs.map((src, _idx) => {
                                return (
                                    <CarouselItem>
                                        <img key={_idx} src={src} alt={`Proof ${_idx + 1}`} height="600"/>
                                    </CarouselItem>
                                )
                            })}
                        </Carousel>
                    </Row>
                    <Row className="d-flex flex-row mt-4">
                        <p style={{ textAlign: 'left' }}>Nếu quý vị cảm thấy website này có ích, có thể ủng hộ tôi một khoản phí nho nhỏ để duy trì website nhé!</p>
                        <Button variant="info" onClick={handleShow}>Donate</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>QR code to donate</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Quét mã để ủng hộ tôi nhé!</p>
                                <img src={qr } width="300"/>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Row>
                </Container> : 
                <Container>
                    <Row className="text-center p-3">
                        <h2>About me</h2>
                        <p style={{ textAlign: 'left' }}>My name is Nancy. My nationality is Vietnamese. I used to be a hard-working person with a Bachelor degree in CS with distinction, 2 foreign languages ​​and worked for large and small companies in and outside Vietnam (Europe, for example). Due to many events in my life (divorced, unemployed), there was a time when I had to work as a shipper to earn for living. But even that did not give me peace. During my time as a shipper in Linz, Austria, my boss (called Rider Captain) named Stefan Leuko sexually harassed me and treated me like a toy. When I refused, he tried various way to let me down, from pretending to flirt to threatening, depriving me of proper working conditions. Most of the information he talk was on the company's chat platform without permission. In desperation, I had to report the incident to HR (see slide). Don't stop there, he continued to send me insulting emails. Luckily, I have returned to Vietnam.</p>
                        <p style={{ textAlign: 'left' }}>I am currently working with Hagar International Vietnam, an organization that supports people affected by the trauma of trafficking, violence and abuse. I created this blog to provide information to women, especially Vietnamese women abroad, on how to prevent abuse, violence and trafficking by human trafficking organizations.</p>
                    </Row>
                    <Row className="justify-content-center">
                        <Carousel>
                            {proofs.map((src, _idx) => {
                                return (
                                    <CarouselItem>
                                        <img key={_idx} src={src} alt={`Proof ${_idx + 1}`} height="600" />
                                    </CarouselItem>
                                )
                            })}
                        </Carousel>
                    </Row>
                    <Row className="d-flex flex-row mt-4">
                        <p style={{ textAlign: 'left' }}>If you find this website useful, please buy me a coffee to maintain the website!</p>
                        <Button variant="info" onClick={handleShow}>Donate</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Buy me a coffee!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Please scan the QR code below to donate</p>
                                <img src={qr} width="300" />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Row>
                </Container>
            }
        </section>
    )
}

export default About