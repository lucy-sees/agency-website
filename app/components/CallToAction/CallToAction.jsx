"use client";
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  return (
    <section className={styles.cta}>
      <Container>
        <motion.div 
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Ready to Boost Your Brand's Digital Impact?</h2>
          <p>Let's create something amazing together!</p>
          <motion.button 
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}