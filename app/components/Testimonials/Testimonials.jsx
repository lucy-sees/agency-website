"use client";
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  { name: 'Sarah Johnson', company: 'Tech Innovators', quote: 'Tera Creations transformed our online presence. Their team is creative, professional, and delivers outstanding results.' },
  { name: 'Michael Lee', company: 'Global Solutions', quote: 'Working with Tera Creations was a game-changer for our business. They truly understand digital marketing.' },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <Container>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col md={6} key={index}>
              <motion.div 
                className={styles.testimonialCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className={styles.quote}>"{testimonial.quote}"</p>
                <p className={styles.author}>- {testimonial.name}, {testimonial.company}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}