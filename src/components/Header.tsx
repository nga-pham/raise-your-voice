import { Navbar, Nav, Container} from "react-bootstrap";

const Header = () => {

    return (
        // collapse below lg (show in one row at lg+). In production, consider change to md
    <Navbar bg="light" className="border-bottom" expand="md" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
          <span className="fs-4 fw-bold m-0">Raise Your Voice</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center"> 
            <Nav.Link href="/facts">Hiểu về lạm dụng tình dục</Nav.Link>
            <Nav.Link href="/practices">Cách đối phó</Nav.Link>
            <Nav.Link href="/about">Về tôi</Nav.Link>
            </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;