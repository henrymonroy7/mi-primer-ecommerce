import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>              
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item>Categoria 1</NavDropdown.Item>
                <NavDropdown.Item>
                  Categoria 2
                </NavDropdown.Item>
                <NavDropdown.Item>Categoria 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  Otras categorias
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <CardWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;