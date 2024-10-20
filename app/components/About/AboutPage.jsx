/* Hero.js */
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from './AboutPage.module.css';

const About = () => {
    return (
        <section className={styles.aboutSection}>
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
            <div className={styles.aboutContent}>
                <motion.h1
                    className={styles.aboutTitle}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    About Tera Creations
                </motion.h1>
                <div className={styles.founderImageContainer}>
                <Image
                    src="/images/founder.png"
                    alt="Elvis Warutumo"
                    layout="responsive"
                    width={100}
                    height={400}
                    className={styles.founderImage}
                />
            </div>
                <motion.p
                    className={styles.heroSubtitle}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Founded in 2019 by Elvis Warutumo, our mission is to empower
                    Micro, Small, and Medium Enterprises (MSMEs) by providing
                    affordable, computer-aided design services. From graphic
                    design to web development, we’ve got you covered.
                </motion.p>
                <motion.p
                    className={styles.heroSubtitle}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}>
                    Over the years, we’ve expanded our services to include logo
                    and brand identity design, digital marketing, and a variety of
                    website designs including ecommerce, personal, business,
                    institution, and portfolio websites.

                </motion.p>
                <motion.p
                    className={styles.heroSubtitle}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    We’re not just designers, we’re consultants too. We provide
                    digital marketing services like Search Engine Optimization,
                    Search Engine Marketing, Social Media Management, Content
                    Creation, website strategy, and SEO writing.

                </motion.p>
                <motion.button
                    className={styles.learnMoreBtn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                     Learn More <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
                    <div className={styles.buttonGlow}></div>
                </motion.button>
            </div>
            
        </section>
    );
};

export default About;