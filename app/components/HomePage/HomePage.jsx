"use client";

import Head from 'next/head'
import { motion } from 'framer-motion'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import RecentProjects from '../RecentProjects/RecentProjects'
import AboutPage from '../AboutPage/AboutPage'
// import Testimonials from '../Testimonials/Testimonials'
// import CallToAction from '../CallToAction/CallToAction'
import styles from './HomePage.module.css';

export const metadata = {
  title: 'Home - Tera Creations',
  description: 'Explore Tera Creations, Kenya’s leading digital and graphic design agency. Innovative solutions to elevate your brand.',
  link: '/favicon.ico',
  image: 'https://teracreations.com/wp-content/uploads/2024/07/Tera-Creations-a-leading-web-design-agency-graphic-design-agency-in-Kenya-003-scaled.webp',
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.link} />
        <meta property="og:image" content={metadata.image} />
      </Head>
      <div className={styles.container}>


        <main className={styles.main}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <RecentProjects />
            <AboutPage />
            <Services />
            {/* <Testimonials />
            <CallToAction /> */}
          </motion.div>
        </main>

      </div>
    </>
  )
}