import { Container, Row } from "react-bootstrap";
import jsonSection1 from "../assets/key-facts.json"
import jsonSection2 from "../assets/self-defense.json"
import jsonSection3 from "../assets/you-are-not-alone.json";
import CollectionCard from "../components/CollectionCard"

const lang = "vn"; // "en" or "vn"

const Collections = () => {

    return (
        <>
            {/* Key facts */}
            <section className="py-5 mt-2">
                <Container>
                    <Row className="text-center justify-content-center p-3">
                        <h2 className="mb-4" style={{ fontWeight: 'bold' }}>Thông tin cơ bản</h2>
                        <p className="mb-4" style={{ fontSize: '1.5rem' }}>Cùng tìm hiểu về quấy rối, bạo lực và xâm hại tình dục và các vấn đề liên quan</p>
                        {jsonSection1.map(item => {
                            if (item.lang.trim() === lang.trim()) {
                                return <Row>
                                    {item.collection.map((collection, _idx) => {
                                        return (
                                            <CollectionCard
                                                key={_idx}
                                                title={collection.title}
                                                photo={collection.photo}
                                                description={collection.description}
                                                references={collection.references}
                                                caption={collection.caption}
                                            />
                                        )
                                    })}
                                </Row>
                            }
                        })}
                    </Row>

            {/* Self-defense */}
                    <Row className="text-center justify-content-center p-3">
                        <h2 className="mb-4" style={{ fontWeight: 'bold' }}>Cách đối phó và tự vệ</h2>
                        <p className="mb-4" style={{ fontSize: '1.5rem' }}>Thực hành việc tự bảo vệ bản thân và hàn gắn trước hành vi quấy rối và xâm hại tình dục</p>
                        {jsonSection2.map(item => {
                            if (item.lang.trim() === lang.trim()) {
                                return <Row>
                                    {item.collection.map((collection, _idx) => {
                                        return (
                                            <CollectionCard
                                                key={_idx}
                                                title={collection.title}
                                                photo={collection.photo}
                                                description={collection.description}
                                                references={collection.references}
                                                caption={collection.caption}
                                            />
                                        )
                                    })}
                                </Row>
                            }
                        })}
                    </Row>

            {/* You are not alone */}
                    <Row className="text-center justify-content-center p-3">
                        <h2 className="mb-4" style={{fontWeight: 'bold'}}>Bạn không cô đơn</h2>
                        <p className="mb-4" style={{fontSize: '1.5rem'}}>Cùng lắng nghe người nổi tiếng chia sẻ về lạm dụng tình dục</p>
                        {jsonSection3.map(item => {
                            if (item.lang.trim() === lang.trim()) {
                            return <Row>
                                {item.collection.map((collection, _idx) => {
                                    return (
                                        <CollectionCard
                                            key={_idx}
                                            title={collection.title}
                                            photo={collection.photo}
                                            description={collection.description}
                                            references={collection.references}
                                            caption={collection.caption}
                                        />
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

