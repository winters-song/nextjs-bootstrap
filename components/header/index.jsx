import {Container, Nav, Navbar} from "react-bootstrap";

export default function Index() {

  return <div className="page-header">
    <Navbar expand="lg">
      <Container>
        <div className="left">
          <div className="item link">
            <a href="/">Seller Centre</a>
            <a href="/">Download</a>
            <Nav.Link href="/shop">Sell on Shopee</Nav.Link>

          </div>
          <div className="item link">
            <a href="/shopee">Sell on Shopee</a>
          </div>
          <div className="item link"></div>
          <div className="item link"></div>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Seller Centre</Nav.Link>
            <Nav.Link href="/shop">Sell on Shopee</Nav.Link>
            <Nav.Link href="/download">Download</Nav.Link>
            <Nav.Item>Follow us on</Nav.Item>
            <Nav.Link href="/download">Follow us on</Nav.Link>
          </Nav>

        </Navbar.Collapse>

        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Notifications</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Help</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">English</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Signup</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Login</Nav.Link>
          </Nav.Item>

        </Nav>
      </Container>
    </Navbar>
  </div>
}
