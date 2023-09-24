import React from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ThemeContext from '../../contexts/ThemeContext';
import { useContext } from 'react';

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <footer className='footer-chirry'>
        <div className={`bg-${theme}`}>
          <Container>
            <Row className="justify-content-between align-items-center">
              <Col md={9}>
                <div className="d-flex justify-content-center">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={`mr-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                    <FaFacebook size={30} />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className={`mr-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                    <FaTwitter size={30} />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={theme === 'dark' ? 'text-light' : 'text-dark'}>
                    <FaInstagram size={30} />
                  </a>
                </div>
              </Col>
              <Col md={3} className="text-right">
                <div>
                  <p><i>Desarrollado por: </i>Henry Monroy</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>

  );
};

export default Footer;
