import { Card, Col } from "react-bootstrap";

const base = import.meta.env.BASE_URL || "/";

interface CollectionCardProps {
    id: number | undefined,
    type: string | "",
    title: string | "";
    photo: string | "";
    description: string | "";
    references: string | "";
    caption: string | "";
    }

const CollectionCard = ({id, type, title, photo, description}: CollectionCardProps) => {
    return (
        <Col md={4} key={id }>
            <Card className="m-2" style={{ minWidth: '18rem' }}>
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title>
                        <p style={{ color: '#000', textAlign: 'left' }}>{title}</p>
                    </Card.Title>
                    <Card.Text style={{ color: '#000', textAlign: 'left', fontSize: '1rem' }}>
                        {description}
                    </Card.Text>
                    <Card.Link href={`${base}/detail/${type}/${id}` }>Xem thêm</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CollectionCard