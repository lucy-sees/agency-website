"use client";

import React from 'react';
import Lottie from 'react-lottie';
import animationData from '@/public/lotties/loader.json';
import styles from './Spinner.module.css';

const Spinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className={styles.spinner}>
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
}

export default Spinner;