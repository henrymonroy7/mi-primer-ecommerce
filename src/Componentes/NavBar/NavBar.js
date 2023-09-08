import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getCategories } from '../../mocks/mockCategories';
import ThemeContext from '../../Contexts/ThemeContext';
import { Button } from 'react-bootstrap';
import { FaRegMoon, FaSun } from "react-icons/fa";


const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(response => {
      setCategories(response)
    }).catch(error => {
      console.log("Error", error)
    })
  }, [categories])


  return (
    <Navbar bg={theme} variant={theme} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          E-Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categories?.map((cat, index) => (
                <NavDropdown.Item key={index} >
                  <NavLink to={`/category${cat.url}`} className="dropdown-item">
                    {cat.name}
                  </NavLink>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button bg={theme} variant={theme} className="button-navbar" onClick={toggleTheme}>
          {theme === 'dark' ? <FaSun /> : <FaRegMoon />}
        </Button>
        <CardWidget />
      </Container>
    </Navbar>


  )
}

export default NavBar;