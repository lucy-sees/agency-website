"use client";
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Services.module.css';

const services = [
  { title: 'Web Design', icon: '/icons/web-design.svg', description: 'Create stunning, responsive websites tailored to your brand.' },
  { title: 'Graphic Design', icon: '/icons/graphic-design.svg', description: 'Develop eye-catching visuals that communicate your message effectively.' },
  { title: 'Digital Marketing', icon: '/icons/digital-marketing.svg', description: 'Boost your online presence with targeted digital marketing strategies.' },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <Container>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index}>
              <motion.div 
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image src={service.icon} alt={service.title} width={64} height={64} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}