"use client";
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Team.module.css';

const teamMembers = [
  { name: 'Elvis Waruingi', role: 'Founder & CEO', image: '/images/elvis.jpg' },
  { name: 'Jane Doe', role: 'Lead Designer', image: '/images/jane.jpg' },
  { name: 'John Smith', role: 'Senior Developer', image: '/images/john.jpg' },
];

export default function Team() {
  return (
    <section className={styles.team}>
      <Container>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Team
        </motion.h2>
        <Row>
          {teamMembers.map((member, index) => (
            <Col md={4} key={index}>
              <motion.div 
                className={styles.teamMember}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image src={member.image} alt={member.name} width={200} height={200} className={styles.memberImage} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}