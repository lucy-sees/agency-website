"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Loading from './../../loading';
import styles from './RecentProjects.module.css';

const projects = [
  { id: 1, name: 'Sugarspice Cosmetics', image: '/images/sugarspice.png', url: 'https://www.sugarspicecosmetics.com/' },
  { id: 2, name: 'HR Associates', image: '/images/hr-associates.png', url: 'https://www.hrassociatesltd.com/' },
  { id: 3, name: 'Roadshub', image: '/images/roadshub.png', url: 'https://roadshub.org/' },
  { id: 4, name: 'Miss Muthoni Njoroge', image: '/images/miss-muthoni.png', url: 'https://www.muthoninjoroge.com/' },
  { id: 5, name: 'Structure Forms Construction', image: '/images/structure-forms.png', url: 'https://structureformsconstruction.com/' },
  { id: 6, name: 'Export Institute', image: '/images/export-institute.png', url: 'https://www.export-institute.co.ke/' },
  { id: 7, name: 'Kitchenhub Appliances', image: '/images/kitchenhub.png', url: 'https://www.kitchenhub.co.ke/' },
  { id: 8, name: 'ENSDA', image: '/images/ensda.png', url: 'https://ensda.go.ke/' },
  { id: 9, name: 'Broadlinks', image: '/images/broadlinks.png', url: 'https://www.broadlinktravelsagency.com/' },
];

const ProjectCard = ({ project, isActive, onClick, onMouseEnter, onMouseLeave }) => (
  <motion.div
    className={`${styles.projectCard} ${isActive ? styles.active : ''}`}
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Image src={project.image} alt={project.name} className={styles.projectImage} width={400} height={400} />
    <h3>{project.name}</h3>
    <motion.button
      className={styles.seeProjectButton}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      See Project
    </motion.button>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => {
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <motion.div
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.modalContent}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
      >
        <button className={styles.closeButton} onClick={onClose}>×</button>
        {loading && <Loading />}
        <iframe
          src={project.url}
          title={project.name}
          className={styles.projectIframe}
          onLoad={handleIframeLoad}
        />
      </motion.div>
    </motion.div>
  );
};

const RecentProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselRef = useRef(null);

  const nextProject = () => setActiveIndex((activeIndex + 1) % projects.length);
  const prevProject = () => setActiveIndex((activeIndex - 1 + projects.length) % projects.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 3000); // Change project every 3 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleMouseEnter = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.sectionTitle}>Recent Projects</h2>
      <div className={styles.carousel}>
        <button className={styles.carouselButton} onClick={prevProject}>‹</button>
        <div className={styles.carouselTrack} ref={carouselRef}>
          {[...projects, ...projects].map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isActive={index % projects.length === activeIndex}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
        <button className={styles.carouselButton} onClick={nextProject}>›</button>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default RecentProjects;