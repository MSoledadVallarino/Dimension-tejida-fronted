import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export function BasicExample() {
  return (
<Navbar expand="lg" className="navbar navbar-expand-lg">
  <Container className="py-1"> {/* Reducir el padding vertical del Container */}
    <Navbar.Brand href="#home">Dimension tejida</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home"> Home </Nav.Link>
        <Nav.Link href="#calculadora">Calculadora de tejidos</Nav.Link>
        <Nav.Link href="#puntos">Puntos</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
  );
}

export default BasicExample;