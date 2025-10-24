import { Card, Col } from "react-bootstrap";

interface CollectionCardProps {
    key: number | undefined
    title: string | "";
    photo: string | "";
    description: string | "";
    references: string | "";
    caption: string | "";
    }

const CollectionCard = ({key, title, photo, description, references, caption}: CollectionCardProps) => {
    return (
        <Col md={4} key={key }>
            <Card className="m-2" style={{ minWidth: '18rem' }}>
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title>
                        <p style={{ color: '#000', textAlign: 'left' }}>{title}</p>
                    </Card.Title>
                    <Card.Text style={{ color: '#000', textAlign: 'left', fontSize: '1rem' }}>
                        {description}
                    </Card.Text>
                    <Card.Link href={references}>{caption}</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CollectionCard