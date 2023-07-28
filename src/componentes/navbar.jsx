import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScroll({logo, ruta1, nombre_ruta1, ruta2, nombre_ruta2,ruta3, nombre_ruta3, ruta4,nombre_ruta4,ruta5, nombre_ruta5}) {
  return (
    <Navbar fixed='top' variant='dark'  expand="md" style={{boxShadow:'0px 0px 3px rgb(100, 100, 100)',paddingTop:'12px',paddingBottom:'12px',background:'#0066b3'}}>
      <Container fluid>
        <Navbar.Brand style={{marginLeft:'15px'}} href="#">{logo}</Navbar.Brand>
        <Navbar.Toggle  style={{marginRight:'15px'}} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{color:'white'}} href={ruta1}>{nombre_ruta1}</Nav.Link>
            <Nav.Link style={{color:'white'}} href={ruta2}>{nombre_ruta2}</Nav.Link>
            <Nav.Link style={{color:'white'}} href={ruta3}>{nombre_ruta3}</Nav.Link>
            <Nav.Link style={{color:'white'}} href={ruta4}>{nombre_ruta4}</Nav.Link>
            <Nav.Link style={{color:'white'}} href={ruta5}>{nombre_ruta5}</Nav.Link>
           
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              
              className="me-2"
              aria-label="Search"
            />
            <Button style={{background:'white',color:'black',border:'none'}}>Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;