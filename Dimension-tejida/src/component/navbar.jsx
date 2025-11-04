import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../fotos/nuevologo.jpg'


export function Barra() {
  return (
    <>
    
     <div className='banner'>
     <h1 className='titulo'>Sole tejido a máquina</h1>
     </div>
 
 <div className='barra'>
 
<Navbar expand="lg"  className="navbar navbar-expand-lg">
  <Container fluid> 
    <Navbar.Brand href="#home"><img className='logo' src={logo} alt="logo" width="50"
              height="50"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="Home"> Home </Nav.Link>
        <Nav.Link href="CalculadoraDeTejidos">Calculadora de tejidos</Nav.Link>
        <Nav.Link href="Tutoriales">Tutoriales</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

</div>

</>
  )
}

export default Barra;