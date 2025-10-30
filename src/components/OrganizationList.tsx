import { Container, Row } from "react-bootstrap";
import vietnameseData from "../assets/vi.json"
import englishData from "../assets/en.json"
import ListCard from "../components/ListCard"

const lang = "en"; // "en" or "vi"

const List = () => {
    return (
        <>
            <section className="py-5 mt-2">
                <Container>
                    {vietnameseData.lang.trim() === lang.trim() ? // vietnameseData.organization
                        <Row className="text-center justify-content-center p-3">
                            <h2 className="mb-4" style={{ fontWeight: 'bold' }}>Thông tin về các tổ chức hỗ trợ nạn nhân của lạm dụng tình dục tại Việt Nam</h2>
                            <p className="mb-4" style={{ fontSize: '1.5rem' }}>Cùng tìm hiểu về quấy rối, bạo lực và xâm hại tình dục và các vấn đề liên quan</p>
                            <Row>
                                {vietnameseData.organization.map((item, _idx) => {
                                    return (
                                        <ListCard
                                            id={_idx}
                                            name={item.name}
                                            photo={item.photo}
                                            description={item.description}
                                            references={item.references}
                                            language={lang }
                                        />
                                    )
                                })}
                            </Row>
                    </Row>
                        : <Row className="text-center justify-content-center p-3">
                            <h2 className="mb-4" style={{ fontWeight: 'bold' }}>Information on organizations supporting victims of sexual abuse in Vietnam</h2>
                            <p className="mb-4" style={{ fontSize: '1.5rem' }}>Learn about sexual harassment, violence and abuse and related issues</p>
                            <Row>
                                {englishData.organization.map((item, _idx) => {
                                    return (
                                        <ListCard
                                            id={_idx}
                                            name={item.name}
                                            photo={item.photo}
                                            description={item.description}
                                            references={item.references}
                                            language={lang}
                                        />
                                    )
                                })}
                            </Row>
                        </Row>
                    }

                </Container>
            </section>
        </>
    );
}
export default List;

