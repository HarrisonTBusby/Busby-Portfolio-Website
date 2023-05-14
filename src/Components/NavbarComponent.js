import {Container, Navbar, Nav} from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBarComponent() {
  return (
      <Navbar collapseOnSelect expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand className='navFontColor'>busbyharrison.dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav>
            <Nav.Link className='d-flex justify-content-end' href="#Summary">Summary</Nav.Link>
            <Nav.Link className='d-flex justify-content-end' href="#Skills">Skills</Nav.Link>
            <Nav.Link className='d-flex justify-content-end' href="#Projects">Projects</Nav.Link>
            <Nav.Link className='d-flex justify-content-end' href="#AboutMe">About Me</Nav.Link>
            <Nav.Link className='d-flex justify-content-end' href="#Socials">Socials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  );
}

