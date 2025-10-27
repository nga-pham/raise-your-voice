import { Container, Row } from "react-bootstrap";
import vietnameseData from "../assets/vi.json"
import ListCard from "../components/ListCard"

const lang = "vi"; // "en" or "vi"

const List = () => {
    return (
        <>
            <section className="py-5 mt-2">
                <Container>
                    <Row className="text-center justify-content-center p-3">
                        <h2 className="mb-4" style={{ fontWeight: 'bold' }}>Thông tin về các tổ chức hỗ trợ nạn nhân của lạm dụng tình dục tại Việt Nam</h2>
                        <p className="mb-4" style={{ fontSize: '1.5rem' }}>Cùng tìm hiểu về quấy rối, bạo lực và xâm hại tình dục và các vấn đề liên quan</p>
                        {vietnameseData.lang.trim() === lang.trim() ? // vietnameseData.organization
                            <Row>
                                {vietnameseData.organization.map((item, _idx) => {
                                    return (
                                        <ListCard
                                            id={_idx}
                                            name={item.name}
                                            photo={item.photo}
                                            description={item.description}
                                            references={item.references}
                                        />
                                    )
                                })}
                            </Row> : null}
                    </Row>

                </Container>
            </section>
        </>
    );
}
export default List;

