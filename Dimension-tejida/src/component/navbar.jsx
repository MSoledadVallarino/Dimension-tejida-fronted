import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export function Barra() {
  return (
<Navbar expand="lg" className="navbar navbar-expand-lg">
  <Container className="py-1"> {/* Reducir el padding vertical del Container */}
    <Navbar.Brand href="#home">Dimension tejida</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="Home"> Home </Nav.Link>
        <Nav.Link href="CalculadoraDeTejidos">Calculadora de tejidos</Nav.Link>
        <Nav.Link href="Puntos">Puntos</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
  );
}

export default Barra;