import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>Tera Creations</h3>
              <p>Where Vision Meets Precision</p>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4>Quick Links</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4>Contact Us</h4>
              <p>Email: info@teracreations.com</p>
              <p>Phone: +1 (123) 456-7890</p>
              <div className={styles.socialIcons}>
                {/* Add social media icons here */}
              </div>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col>
            <motion.div
              className={styles.copyright}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p>&copy; 2023 Tera Creations. All rights reserved.</p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}