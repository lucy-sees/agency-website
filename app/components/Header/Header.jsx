"use client";

import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    'Home', 'About Us', 'Services', 'Graphic Design', 
    'Web Design', 'Blog', 'Contact Us'
  ];

  return (
    <Navbar expand="lg" className={styles.navbar} expanded={expanded}>
      <Container className={styles.navContainer}>
        <Navbar.Brand href="#home" className={styles.brand}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src="/images/logo.png"
              alt="Tera Creations Logo"
              width={140}
              height={50}
              className={styles.logo}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")} 
        />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.navCollapse}>
          <Nav className={`ms-auto ${styles.nav}`}>
            {navItems.map((item) => (
              <Nav.Link 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className={`${styles.navLink} px-3`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.div>
              </Nav.Link>
            ))}
          </Nav>
          <motion.button
            className={styles.talkToUsButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Talk to us
          </motion.button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}