"use client";
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>About Tera Creations</h2>
              <p>Founded in 2019 by Elvis Waruingi, our mission is to empower Micro, Small, and Medium Enterprises (MSMEs) by providing affordable, computer-aided design services. From graphic design to web development, we've got you covered.</p>
              <p>Over the years, we have expanded our services to include logo and brand identity design, digital marketing, and a variety of website designs including ecommerce, personal, business, institution, and portfolio websites.</p>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image src="/images/about-image.jpg" alt="About Tera Creations" width={500} height={300} layout="responsive" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}