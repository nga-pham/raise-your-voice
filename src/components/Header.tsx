import { Navbar, Nav, Container, Dropdown, DropdownMenu } from "react-bootstrap";
import { Languages } from 'lucide-react';

// use Vite-provided base at runtime
const base = import.meta.env.BASE_URL || "/";

// props contains language: "en" | "vi"
const Header = ({ language, sendDataToIndex }) => {

    return (
        // collapse below lg (show in one row at lg+). In production, consider change to md
    <Navbar bg="light" className="border-bottom" expand="md" sticky="top">
      <Container>
        <Navbar.Brand href={base} className="d-flex align-items-center gap-2">
          <span className="fs-4 fw-bold m-0">Raise Your Voice</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
                    {language === "vi" ? 
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link href={`${base}detail` }>Hiểu về lạm dụng tình dục</Nav.Link>
                            <Nav.Link href={`${base}organization`}>Nơi hỗ trợ nạn nhân</Nav.Link>
                            <Nav.Link href={`${base}about`}>Về tôi</Nav.Link>
                            <Nav.Item><Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <Languages /> {language === "en" ? "English" : "Tiếng Việt"}
                                </Dropdown.Toggle>
                                <DropdownMenu>
                                    <Dropdown.Item as="button" onClick={() => { sendDataToIndex("en") } }>English </Dropdown.Item>
                                </DropdownMenu>
                            </Dropdown></Nav.Item>
                        </Nav>
                        : <Nav className="ms-auto align-items-center">
                            <Nav.Link href={`${base}detail`}>Learn about sexual abuse</Nav.Link>
                            <Nav.Link href={`${base}organization`}>Victim Support Centers</Nav.Link>
                            <Nav.Link href={`${base}about`}>About me</Nav.Link>
                            <Nav.Item><Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <Languages /> {language === "en" ? "English" : "Vietnamese"}
                                </Dropdown.Toggle>
                                <DropdownMenu>
                                    <Dropdown.Item as="button" onClick={() => { sendDataToIndex("vi") }}>Vietnamese</Dropdown.Item>
                                </DropdownMenu>
                            </Dropdown></Nav.Item>
                        </Nav>
                }
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;