import {Container, Navbar, Nav} from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBarComponent() {
  return (
      <Navbar expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand className='navFontColor'>busbyharrison.dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end'>
          <Nav>
            <Nav.Link href="#Summary">Summary</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#AboutMe">About Me</Nav.Link>
            <Nav.Link href="#Socials">Socials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

