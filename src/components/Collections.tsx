import { Container, Row } from "react-bootstrap";
import vietnameseData from "../assets/vi.json"
import CollectionCard from "../components/CollectionCard"

const lang = "vi"; // "en" or "vn"

const Collections = () => {

    return (
        <>
            {/* Key facts */}
            <section className="py-5 mt-2">
                <Container>
                    <Row className="text-center justify-content-center p-3">
                        <h2 className="mb-4" style={{ fontWeight: 'bold' }}>Thông tin cơ bản</h2>
                        <p className="mb-4" style={{ fontSize: '1.5rem' }}>Cùng tìm hiểu về quấy rối, bạo lực và xâm hại tình dục và các vấn đề liên quan</p>
                        {vietnameseData.lang.trim() === lang.trim() ?
                            <Row>
                                {vietnameseData.collectionKeyFacts.map((collection, _idx) => {
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
                        </Row> : null }
                    </Row>

            {/* Self-defense */}
                    <Row className="text-center justify-content-center p-3">
                        <h2 className="mb-4" style={{ fontWeight: 'bold' }}>Cách đối phó và tự vệ</h2>
                        <p className="mb-4" style={{ fontSize: '1.5rem' }}>Thực hành việc tự bảo vệ bản thân và hàn gắn trước hành vi quấy rối và xâm hại tình dục</p>
                        {vietnameseData.lang.trim() === lang.trim() ?
                            <Row>
                                {vietnameseData.collectionSelfDefense.map((collection, _idx) => {
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
                            </Row> : null}
                    </Row>

            {/* You are not alone */}
                    <Row className="text-center justify-content-center p-3">
                        <h2 className="mb-4" style={{fontWeight: 'bold'}}>Bạn không cô đơn</h2>
                        <p className="mb-4" style={{fontSize: '1.5rem'}}>Cùng lắng nghe người nổi tiếng chia sẻ về lạm dụng tình dục</p>
                        {vietnameseData.lang.trim() === lang.trim() ?
                            <Row>
                                {vietnameseData.collectionYouAreNotAlone.map((collection, _idx) => {
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
                            </Row> : null}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Collections;

