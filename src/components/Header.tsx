import { Navbar, Nav, Container} from "react-bootstrap";
// use Vite-provided base at runtime
const base = import.meta.env.BASE_URL || "/";

const Header = () => {

    return (
        // collapse below lg (show in one row at lg+). In production, consider change to md
    <Navbar bg="light" className="border-bottom" expand="md" sticky="top">
      <Container>
        <Navbar.Brand href={base} className="d-flex align-items-center gap-2">
          <span className="fs-4 fw-bold m-0">Raise Your Voice</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center"> 
            <Nav.Link href={`${base}detail`}>Hiểu về lạm dụng tình dục</Nav.Link>
            <Nav.Link href={`${base}organization`}>Nơi hỗ trợ nạn nhân</Nav.Link>
            <Nav.Link href={`${base}about`}>Về tôi</Nav.Link>
            </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;