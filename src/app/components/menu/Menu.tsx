"use client";

import React, { useState, useRef, useEffect } from "react";
import "./menu.css";
import Link from "next/link";
import Background from "../background";
import localFont from "next/font/local";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useMenu } from "../../MenuContext";

// Typage du lien de menu
type MenuLink = {
  path: string;
  label: string;
};

const menuLinks: MenuLink[] = [
  { path: "/", label: "Accueil" },
  { path: "#Projects", label: "Projets" },
  { path: "#Contact", label: "Contact" },
];

const ClashDisplay = localFont({
  src: "../../../../public/fonts/ClashDisplay-Regular.woff2",
});

type MenuProps = {
    triggerFn?: () => void;
  };

const Menu: React.FC<MenuProps> = ({ triggerFn }) => {
    
  const container = useRef<HTMLDivElement | null>(null);
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const tl = useRef<gsap.core.Timeline | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const underlineRef = useRef<(HTMLSpanElement | null)[]>([]);

  // Animation barre underline
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    gsap.to(underlineRef.current[index], {
      width: "100%",
      duration: 0.5,
      ease: "power2.in",
    });

    if (
      hoveredIndex !== null &&
      index !== hoveredIndex &&
      index < hoveredIndex
    ) {
      gsap.to(`#nb${hoveredIndex}`, {
        top: "-6rem",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(`#nb${index}`, {
        top: "1rem",
        duration: 0.5,
        ease: "power2.in",
      });
    } else if (
      hoveredIndex !== null &&
      index !== hoveredIndex &&
      index > hoveredIndex
    ) {
      gsap.to(`#nb${hoveredIndex}`, {
        top: "6rem",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(`#nb${index}`, {
        top: "1rem",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    gsap.to(underlineRef.current[index], {
      width: "0%",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-links", { y: 75 });
      gsap.set(".right-cross, .left-cross", { rotation: 0 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-links", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        })
        .to(".right-cross, .left-cross", {
          rotation: 180,
          duration: 0.5,
          ease: "power4.inOut",
          delay: -0.5,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className={`menu-container ${ClashDisplay.className}`} ref={container}>
      <div className="menu-bar">
        <Link href="/" className="menu-name" id="valentin">
          Valentin touzinaud
        </Link>
        <div className="menu-open" onClick={toggleMenu}>
          ⚌
        </div>
      </div>

      <div className="menu-overlay">
        <Background />

        <div className="menu-bar">
          <Link href="/" className="menu-name" id="valentin">
            Valentin touzinaud
          </Link>
          <div className="menu-close" onClick={toggleMenu}>
            ✕
          </div>
        </div>

        <header>
          <div className="number">
            <ul>
              <li id="nb0">01</li>
              <li id="nb1">02</li>
              <li id="nb2">03</li>
            </ul>
            /03
          </div>
          <p className="header-menu-text">Menu</p>
        </header>

        <ul className="menu-links">
          {menuLinks.map((link, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Link
                href={link.path}
                className="menu-link-item"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
              <span
                className="underline-bar"
                ref={(el) => (underlineRef.current[index] = el)}
              />
            </li>
          ))}
        </ul>

        <footer>
          <div className="right-cross"></div>
          <ul>
            <li>
              <a>Linkedin</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
            <li>
              <a>Contra</a>
            </li>
          </ul>
          <div className="left-cross"></div>
        </footer>
      </div>
    </div>
  );
};

export default Menu;
