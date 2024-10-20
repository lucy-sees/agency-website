"use client";
import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className={styles.navbar} expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home" className={styles.brand}>
            <motion.img 
                src="/images/logo.svg" 
                alt="Tera Creations" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={styles.navLink}>Home</Nav.Link>
            <Nav.Link href="#services" className={styles.navLink}>Services</Nav.Link>
            <Nav.Link href="#projects" className={styles.navLink}>Projects</Nav.Link>
            <Nav.Link href="#about" className={styles.navLink}>About</Nav.Link>
            <Nav.Link href="#contact" className={styles.navLink}>Contact</Nav.Link>
          </Nav>
          <motion.button 
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}