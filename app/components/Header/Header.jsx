"use client";

import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';  // For hamburger and close icons

export default function Header() {
  const [expanded, setExpanded] = useState(false);  // State to track if menu is open

  const navItems = [
    'Home', 'About Us', 'Services', 'Graphic Design',
    'Web Design', 'Blog', 'Contact Us'
  ];

  return (
    <Navbar expand="lg" className={styles.navbar} expanded={expanded}>
      <Container className={styles.navContainer}>
        {/* Brand Logo */}
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

        {/* Hamburger Menu Toggle */}
        <div className={styles.hamburgerIcon} onClick={() => setExpanded(!expanded)}>
          {expanded ? <FaTimes /> : <FaBars />}  {/* Toggle between hamburger and close icon */}
        </div>

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav" className={`${styles.navCollapse} ${expanded ? styles.showMenu : ''}`}>
          <Nav className={`ms-auto ${styles.nav}`}>
            {navItems.map((item) => (
              <Nav.Link
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`${styles.navLink} px-3`}
                onClick={() => setExpanded(false)} 
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

          {/* CTA Button */}
          <motion.button
            className={styles.talkToUsButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setExpanded(false)}
          >
            Talk to us
          </motion.button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
