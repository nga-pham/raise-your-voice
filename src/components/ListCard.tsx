import { Card, Container } from "react-bootstrap";
interface ListCardProps {
    id: number | undefined,
    name: string | "";
    photo: string | "";
    description: string | "";
    references: string | "";
    }

const ListCard = ({ id, name, photo, description, references }: ListCardProps) => {
    return (
        <Container key={id }>
            {/* make card full width*/}
            <Card className="w-100 m-2"> 
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title>
                        <p style={{ color: '#000', textAlign: 'left' }}>{name}</p>
                    </Card.Title>
                    <Card.Text style={{ color: '#000', textAlign: 'left', fontSize: '1rem' }}>
                        {description}
                    </Card.Text>
                    <Card.Link href={references} target="_blank">Xem thêm</Card.Link>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ListCard