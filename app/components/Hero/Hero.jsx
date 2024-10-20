"use client";
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Where Vision Meets Precision: Welcome to Tera Creations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your one-stop digital agency for all your digital marketing, web design, and graphic design needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button className={styles.ctaButton}>Let's Talk</button>
              <button className={styles.secondaryButton}>Our Projects</button>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.img
              src="/images/hero-image.jpg"
              alt="Tera Creations at work"
              className={styles.heroImage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}