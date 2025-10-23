import { Navbar, Nav, Container} from "react-bootstrap";
import {base} from "../assets/url";

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
            <Nav.Link href={`${base}/facts`}>Hiểu về lạm dụng tình dục</Nav.Link>
            <Nav.Link href={`${base}/practices`}>Cách đối phó</Nav.Link>
            <Nav.Link href={`${base}/about`}>Về tôi</Nav.Link>
            </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;