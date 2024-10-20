"use client";

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerWrapper}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
          <p className={styles.footerText}>Empowering businesses through innovative</p> 
          <p className={styles.footerText}>design and digital solutions.</p>
          <div className={styles.socialIcons}>
            <motion.a href="#" whileHover={{ scale: 1.2 }}><FaFacebookF /></motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }}><FaTwitter /></motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }}><FaInstagram /></motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }}><FaLinkedinIn /></motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.quickLinks}
        >
          <h4 className={styles.footerSubtitle}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <motion.li whileHover={{ x: 5 }}><a href="#">Home</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="#">About Us</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="#">Services</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="#">Portfolio</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="#">Contact</a></motion.li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className={styles.footerSubtitle}>Newsletter</h4>
          <p className={styles.footerText}>Stay updated with our</p>
          <p className={styles.footerText}>latest news and offers.</p>
          <Form className={styles.newsletterForm}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" className={styles.formInput} />
            </Form.Group>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="primary" type="submit" className={styles.submitButton}>
                Subscribe
              </Button>
            </motion.div>
          </Form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h4 className={styles.footerSubtitle}>Contact Us</h4>
          <ul className={styles.contactInfo}>
            <li><FaMapMarkerAlt /> Karuna Road, Western Heights, 8th Floor, Westlands, Nairobi</li>
            <li><FaPhone /> +254 123 456 789</li>
            <li><FaEnvelope /> info@teracreations.com</li>
          </ul>
        </motion.div>
        <div className={styles.mapSection}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className={styles.mapContainer}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176558905828!2d36.809194515233355!3d-1.2680812359700149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17c1dfb18e3f%3A0x4d15b1e2cf598810!2sWestern%20Heights%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1633544721023!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </Container>

      <Row>
          <Col>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className={styles.copyright}
            >
              <p>&copy; 2024 Tera Creations. All Rights Reserved.</p>
            </motion.div>
          </Col>
        </Row>
    </footer>
  );
};

export default Footer;