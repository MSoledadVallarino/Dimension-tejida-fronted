import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../fotos/logo.jpg'


export function Barra() {
  return (
    <>
    <h1 className='titulo'>DIMENSION TEJIDA</h1>
     <div className='banner'>
  </div>
 
 <div className='barra'>
 
<Navbar expand="lg"  className="navbar navbar-expand-lg">
  <Container className='container-fluid'> 
    <Navbar.Brand href="#home"><img src={logo} alt="logo" width="75"
              height="75"/></Navbar.Brand>
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

</div>

</>
  )
}

export default Barra;