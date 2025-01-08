import React, { useEffect, useRef, useState } from 'react';
import styles from '../page.module.scss';

const StickyDiv: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (divRef.current) {
      const offsetTop = divRef.current.getBoundingClientRect().top;
      setIsSticky(offsetTop <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={divRef}
      className={`${styles.stickyDiv} ${isSticky ? styles.fixed : ''}`}
    >
      This is a sticky div
    </div>
  );
};

export default StickyDiv;