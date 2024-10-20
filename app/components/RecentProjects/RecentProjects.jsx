"use client";
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './RecentProjects.module.css';

const projects = [
  { title: 'Sugarspice Cosmetics', image: '/images/project1.jpg', link: '#' },
  { title: 'HR Associates', image: '/images/project2.jpg', link: '#' },
  { title: 'Roadshub', image: '/images/project3.jpg', link: '#' },
];

export default function RecentProjects() {
  return (
    <section id="projects" className={styles.projects}>
      <Container>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recent Projects
        </motion.h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index}>
              <motion.div 
                className={styles.projectCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image src={project.image} alt={project.title} width={350} height={200} layout="responsive" />
                <h3>{project.title}</h3>
                <a href={project.link} className={styles.viewButton}>View Website</a>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}