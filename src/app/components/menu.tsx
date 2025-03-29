"use client"; 

import { useState, useEffect } from "react";
import styles from './menu.module.css'; 
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.noScroll); 
    } else {
      document.body.classList.remove(styles.noScroll); 
    }

    return () => document.body.classList.remove(styles.noScroll); 
  }, [isOpen]);

  return (
    <>

      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className={styles.menuButton}>
          ☰
        </button>
      )}


      <div className={`${styles.menuOverlay} ${isOpen ? styles.open : ''}`}>
        <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
          ✕
        </button>

        <nav className="list-menu">
          <ul>
            <li><a href="#home" onClick={() => setIsOpen(false)}>Accueil</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projets</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>À Propos</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
