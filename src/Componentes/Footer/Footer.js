import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ThemeContext from '../../Contexts/ThemeContext';
import { useContext } from 'react';

const Footer = () => {
    const { theme } = useContext(ThemeContext)
  return (
    <footer className={`bg-${theme}`}>
      <Container>
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
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaTwitter size={30} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaInstagram size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
