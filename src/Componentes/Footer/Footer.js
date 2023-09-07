import React from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ThemeContext from '../../Contexts/ThemeContext';
import { useContext } from 'react';

const Footer = () => {
    const { theme } = useContext(ThemeContext)
  return (
    <footer>
      <div className={`bg-${theme}`}>
        <Container style={{padding:'10px'}}>
        <Row>
          <Col md={6}>
            <h4>Suscríbete a nuestro boletín</h4>
            <p>Recibe las últimas novedades y ofertas especiales.</p>
            <Form>
              <Form.Group controlId="name" style={{margin:'10px'}}>
                <Form.Control type="text" placeholder="Tu nombre" />                
              </Form.Group>
              <Form.Group controlId="email" style={{margin:'10px'}}>                
                <Form.Control type="email" placeholder="Tu correo electrónico" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Suscribirse
              </Button>
            </Form>
          </Col>
          <Col md={3}>
            <h4>Síguenos en redes sociales</h4>
            <div className="d-flex justify-content-between">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={theme === 'dark' ? 'text-light' : 'text-dark'}>
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className={theme === 'dark' ? 'text-light' : 'text-dark'}>
                <FaTwitter size={30} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={theme === 'dark' ? 'text-light' : 'text-dark'}>
                <FaInstagram size={30} />
              </a>
            </div>
          </Col>
        </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
