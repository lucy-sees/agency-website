/* Hero.js */
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <motion.div
        className={styles.backgroundAnimation}
        animate={{
          background: [
            "radial-gradient(circle, var(--color-primary) 0%, transparent 50%)",
            "radial-gradient(circle, var(--color-secondary) 0%, transparent 50%)",
            "radial-gradient(circle, var(--color-accent) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <div className={styles.heroContent}>
        <motion.div className={styles.heroTag}>
          <p>🚀 #1 Best Digital Agency</p>
        </motion.div>
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Where Vision Meets Precision
        </motion.h1>
        <motion.p
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to Tera Creations, your one-stop digital agency for innovative solutions.
        </motion.p>
        <motion.button
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
          <div className={styles.buttonGlow}></div>
        </motion.button>
      </div>
      <div className={styles.heroImageContainer}>
        <Image
          src="/images/banner.png"
          alt="Hero Image"
          width={500}
          height={500}
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default Hero;