"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./project.css";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

type Project = {
  title: string;
  slug: string;
  ref: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Moontain",
    slug: "Moontain",
    ref: "moontain",
    description:
      "Moontain est un site de type 'vlog' que j'ai créé dans le but d'apprendre à utiliser Figma pour concevoir des maquettes de sites web.",
  },
  {
    title: "Web Marmottes agency",
    slug: "WebMarmotte",
    ref: "webmarmottes",
    description:
      "Durant ma licence professionnelle en webdesign, nous avons eu pour mission de créer une agence web. Mon rôle était de concevoir un visuel attrayant.",
  },
  {
    title: "Projet J.O. 2024",
    slug: "JO2024",
    ref: "paris2024",
    description:
      "Conception d'une application destinée à assister les bénévoles dans diverses tâches pendant les Jeux Olympiques de Paris (projet de licence).",
  },
  {
    title: "Visuels / Posters",
    slug: "Visuels",
    ref: "visuel",
    description:
      "Réalisation de divers projets visuels pour exercer ma créativité, originalité, rapidité, et bien plus encore, durant mon temps libre.",
  },
];

export default function ProjectList() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [index, setIndex] = useState(0);
  const lastScroll = useRef(0);
  let projectslug = "Moontain"
  useEffect(() => {

    const descChildren = document.querySelectorAll('#projectdescription > *');
    const nameChildren = document.querySelectorAll('#projectname > *');
    const numberChildren = document.querySelectorAll('#numbered > *');
  
    const allElements = [...descChildren, ...nameChildren, ...numberChildren];
    

    const moontain = document.querySelector("#moontain");
    const webmarmottes = document.querySelector("#webmarmottes");
    const paris2024 = document.querySelector("#paris2024");
    const visuel = document.querySelector("#visuel");



  
    if (moontain) {
      ScrollTrigger.create({
        trigger: moontain,  // L'élément déclencheur
        start: "top 100%",    // Commence lorsque le top de 'moontain' atteint 85% de la hauteur de la fenêtre
        end: "bottom 100%",   // Finit lorsque le bottom de 'moontain' atteint 90% de la hauteur de la fenêtre
        markers: true,       // Affiche les marqueurs pour voir les positions de début et fin
        onEnter: () => {
          // Lorsque l'élément entre dans la zone de scrollTrigger, on scrolle vers la section suivante
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: "#webmarmottes", offsetY: 0 }, // Défile vers #webmarmottes
            ease: "power2.out",
            
          });
 
          console.log("test");
          window.addEventListener("scroll", handleScroll);
        },
        onLeave: () => {
          // Ajoute une action ici si nécessaire lorsque l'élément quitte l'écran
          window.removeEventListener("scroll", handleScroll);
        },
      });
    }

    // Tu peux également ajouter des ScrollTriggers pour les autres sections si tu veux scroller vers les autres
    
 
    let myIndex = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
  
      if (currentScroll > lastScroll.current) {
        setIndex((prev) => {
       
          if(prev > 70){
           
            console.log("#" + projects[myIndex].ref)
            if(myIndex == 0){
              console.log(myIndex)
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: '#webmarmottes', offsetY: 0 }, 
                ease: "power2.out",
                onEnter : () => {
                  console.log("ENFIN")
                
                  myIndex = 1;
                }
              });
              gsap.to(allElements, {
                y: "0%",
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
             
              });
            }
            if(myIndex == 1){
              console.log(myIndex)
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: '#paris2024', offsetY: 0 }, 
                ease: "power2.out",
                onEnter : () => {
               
                  console.log("ENFIN")
                  myIndex = 2;
                }
              });
            }
            if(myIndex == 2){
              console.log(myIndex)
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: '#visuel', offsetY: 0 }, 
                ease: "power2.out",
                onEnter : () => {
                  console.log("ENFIN")
                  myIndex = 3;
                }
              });
            }
            return 0;
          }
          return prev + 1;
        });
        
      } else if (currentScroll < lastScroll.current) {
        setIndex((prev) => {
          console.log(prev)
          if(prev < 10){
           
            console.log("#" + projects[myIndex].ref)
            if(myIndex == 1){
              console.log(myIndex)
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: '#moontain', offsetY: 0 }, 
                ease: "power2.out",
                onEnter : () => {
                  
                  myIndex = 0;
                }
              });
            }
            if(myIndex == 2){
              console.log(myIndex)
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: '#webmarmottes', offsetY: 0 }, 
                ease: "power2.out",
                onEnter : () => {
          
                  myIndex = 1;
                }
              });
            }
            if(myIndex == 3){
              console.log(myIndex)
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: '#paris2024', offsetY: 0 }, 
                ease: "power2.out",
                onEnter : () => {
          
                  myIndex = 2;
                }
              });
            }
            return 0;
          }
          return prev - 1;
        });
      }
    
      lastScroll.current = currentScroll;
    };



  }, []);
  
  useEffect(() => {


    const infosSection = document.querySelector(".infos-section");
    const projectsSection = document.querySelector("#Projects");
  
    if (!infosSection || !projectsSection) return;
 
    ScrollTrigger.create({
      trigger: projectsSection,
      start: "top top",     // quand le haut de #Projects touche le haut du viewport
      end: "bottom bottom", // jusqu'à la fin de la section
      markers: true,        // à retirer après test
      onEnter: () => {
        infosSection.classList.add("fixed");
        infosSection.classList.remove("absolute");
        console.log(infosSection.classList);
      },
      onLeave: () => {
        infosSection.classList.remove("fixed");
        infosSection.classList.add("absolute");
        console.log(infosSection.classList);
      },
      onEnterBack: () => {
        infosSection.classList.add("fixed");
        infosSection.classList.remove("absolute");
        console.log("fixed");
      },
      onLeaveBack: () => {
        infosSection.classList.remove("fixed");
        infosSection.classList.add("absolute");
        console.log("fixed");
      },
    });
  }, []);





  return (
    <>
      <div className="images-section" >
        {projects.map((project, index) => (
          <div
            key={project.slug}
            id={project.ref}
            className="image-block"
            ref={(el) => (sectionRefs.current[index] = el)}
            style={{ height: "100vh" }}
          >
            <img
              src={`${project.ref}.png`}
              alt={project.title}
              className="mobile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <img
              src={`${project.ref}-desktop.png`}
              alt={project.title}
              className="desktop"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      <div className="infos-section">

          <div className="info-block">
            <header>
              <div className="number">
                <ul id="numbered">
                    <li>01</li>
                    <li>02</li>
                    <li>03</li>
                    <li>04</li>
                </ul>
                <p>/04</p>
              </div>
              <p className="header-projet-untitle">Projet</p>
            </header>
            <div className="title-container" id="projectname">
                <h3>Moontain</h3>
                <h3>Web Marmottes agency</h3>
                <h3>Projet J.O. 2024</h3>
                <h3>Visuels / Posters</h3>
            </div>
            
            <footer>
            <Link href={`/projects/${projectslug}`} passHref>
              <img className="desktop arrow2" src="arrow2.png" alt="arrow" />
            </Link>
              <div className="footer-mobile">
                
                    <ul id="projectdescription">
                        <li>Moontain est un site de type 'vlog' que j'ai créé dans le but d'apprendre à utiliser Figma pour concevoir des maquettes de sites web.",
                        </li>
                        <li>   
      Durant ma licence professionnelle en webdesign, nous avons eu pour mission de créer une agence web. Mon rôle était de concevoir un visuel attrayant.</li>
                        <li>Conception d'une application destinée à assister les bénévoles dans diverses tâches pendant les Jeux Olympiques de Paris (projet de licence).                        </li>
                        <li>Réalisation de divers projets visuels pour exercer ma créativité, originalité, rapidité, et bien plus encore, durant mon temps libre.                        </li>
                    </ul>
              
                <p className="footer-textdescription">Description</p>
              </div>
            </footer>
          </div>
       
      </div>
    </>
  );
}
