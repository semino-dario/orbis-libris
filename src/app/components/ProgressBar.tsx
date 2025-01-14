import React, { useEffect, useState } from 'react';
import styles from '../page.module.scss';
import { useArticle } from './ArticleContext';

const ProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const articleContext = useArticle();
  const lightMode = articleContext ? articleContext.lightMode : false;

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / totalHeight) * 100;
    setScrollProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.progressBarContainer} ${lightMode ? styles.lightModeProgressBar
      : ''}`}>
      <div className={styles.progressBar} style={{ width: `${scrollProgress}%` }}></div>
    </div>
  );
};

export default ProgressBar;