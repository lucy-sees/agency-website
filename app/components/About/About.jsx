"use client";

import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <Container>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Tera Creations
        </motion.h2>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <motion.div
              className={styles.founderImageWrapper}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.img
                src="/images/founder.png"
                alt="Elvis Warutumo"
                layout="fill"
                objectFit="cover"
                className={styles.founderImage}
              />
              <div className={styles.founderInfo}>
                <h3>Elvis Warutumo</h3>
                <p>Founder & CEO</p>
              </div>
            </motion.div>
          </Col>
          
          <Col md={6}>
            <motion.div
              className={styles.aboutContent}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p>
                  Founded in 2019 by Elvis Warutumo, our mission is to empower
                  Micro, Small, and Medium Enterprises (MSMEs) by providing
                  affordable, computer-aided design services. From graphic
                  design to web development, we’ve got you covered.
                </p>
                <p>
                  Over the years, we’ve expanded our services to include logo
                  and brand identity design, digital marketing, and a variety of
                  website designs including ecommerce, personal, business,
                  institution, and portfolio websites.
                </p>
                <p>
                  We’re not just designers, we’re consultants too. We provide
                  digital marketing services like Search Engine Optimization,
                  Search Engine Marketing, Social Media Management, Content
                  Creation, website strategy, and SEO writing.
                </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className={styles.learnMoreBtn}>Learn More</Button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          className={styles.teamSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className={styles.subSectionTitle}>Our Team</h3>
          <p className={styles.teamDescription}>
            Our team is composed of 12 dedicated professionals, each
            specializing in their field. We have graphic designers, web
            designers, copywriters, website strategy experts, social media
            managers, virtual assistants, video editors, and creative
            professionals.
          </p>
          <Row>
            <Col md={4}>
              <Card className={styles.infoCard}>
                <Card.Body>
                  <Card.Title>Location</Card.Title>
                  <Card.Text>
                    Based in Westlands, Nairobi, our office is situated along
                    Karuna Road, Western Heights, 8th Floor at Skyrise business
                    centre. It's the perfect location for us to meet with
                    clients and discuss projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={styles.infoCard}>
                <Card.Body>
                  <Card.Title>Experience</Card.Title>
                  <Card.Text>
                    In the past 5 years, we have successfully completed over 45
                    websites and have ventured into skills training and personal
                    development.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={styles.infoCard}>
                <Card.Body>
                  <Card.Title>Training</Card.Title>
                  <Card.Text>
                    We have had over 10,000 students take classes through Tera
                    Creations on graphic design, web design, computer literacy,
                    digital literacy, digital marketing, among others.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;