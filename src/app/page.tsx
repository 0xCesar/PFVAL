"use client";


import Background from "./components/background";
import ProjectList from "./components/projectMinia/project";
import Portfoliosvg from "./components/portfolio";
import localFont from 'next/font/local';
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollToPlugin); 
gsap.registerPlugin(ScrollTrigger);



  

const projects: {
  title: string;
  slug: string;
  ref: string;
  description: string;
}[] = [
  { title: "Moontain", slug: "Moontain", ref: "moontain", description: "Moontain est un site de type 'vlog' que j'ai créé dans le but d'apprendre à utiliser Figma pour concevoir des maquettes de sites web." },
  { title: "Web Marmottes agency", slug: "WebMarmotte", ref: "webmarmottes", description: "Durant ma licence professionnelle en webdesign, nous avons eu pour mission de créer une agence web. Mon rôle était de concevoir un visuel attrayant."},
  { title: "Projet J.O. 2024", slug: "JO2024" ,ref: "paris2024", description: "Conception d'une application destinée à assister les bénévoles dans diverses tâches pendant les Jeux Olympiques de Paris (projet de licence)."},
  { title: "Visuels / Posters",
     slug: "Visuels" ,
     ref: "visuel", 
     description: "Réalisation de divers projets visuels pour exercer ma créativité, originalité, rapidité, et bien plus encore, durant mon temps libre."},
];

const ClashDisplay = localFont({
    src: '../../public/fonts/ClashDisplay-Regular.woff2',

})

const ClashDisplayMedium = localFont({
  src: '../../public/fonts/ClashDisplay-Medium.woff2',

})

export default function Home() {
 
  // Cursor
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
          ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  


  // Arrow Landing
  useEffect(() => {
    const arrow = document.getElementById("arrow-landing");
    const meSection = document.getElementById("me");

    if (!arrow || !meSection) return;

    arrow.addEventListener("click", () => {
      gsap.to(window, {
        duration: 1, 
        scrollTo: { y: "#me", offsetY: 50 }, 
        ease: "power2.out",
      });
    });

    return () => {
      arrow.removeEventListener("click", () => {});
    };
  }, []);
 
  // Reveal Landing
  useEffect(() => {
    const h2Elements = gsap.utils.toArray(".landing-container h2"); 

    gsap.fromTo(
      h2Elements,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, stagger: 0.3, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#me .bartodisplay",
      { width: "0%" }, 
      {
        width: "100%", 
        duration: 1,
        stagger: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".info",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".text-descriptif",
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0, 
        duration: 1,
        stagger: 0.9, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".info", 
          start: "top 80%", 

        },
      }
    );

    

  }, []);
  
  useEffect(() => {
  
    const projectSection = document.querySelector("#Projects");

  
    if (projectSection) {
   /*   const handleScroll = () => {
        const scrollPosition = projectSection.scrollTop;
        if (scrollPosition > 0) {
              gsap.to(projectSection, {
                scrollTo: { y: projectSection.scrollHeight},
                duration: 1, 
              });
          }
      };*/

      ScrollTrigger.create({
        trigger: projectSection,          
        start: "top 70%",                 
        end: "bottom 80%",   
        markers: true,
        onEnter: () => { 
      
          gsap.to(window, {
            duration: 1, 
            scrollTo: { y: "#Projects", offsetY: 0 }, 
            ease: "power2.out",
          });
            
        //  projectSection.addEventListener("scroll", handleScroll);
        },
        onLeave: () => {
      
          // Ajoutez ici toute action à effectuer lorsque la section quitte l'écran
        },
      });
    }

    // Nettoyer ScrollTrigger lorsque le composant est démonté
    
  }, []);

  



  {/*useEffect(() => {
    const handleScroll = () => {
      const projectElement = document.getElementById('Projects');
      const menuElement = document.querySelector('.projet-menu-bar') as HTMLElement;

      if (projectElement && menuElement) {
        const projectTop = projectElement.getBoundingClientRect().top;
        if((projectTop <= window.innerHeight)){
          menuElement.style.top =  `-${projectTop}px`
        }if((projectTop < 0)){
           
           menuElement.style.top =  `${projectTop * -1.0}px`
        }
       // console.log((projectTop))
        
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Nettoyer l'event listener quand le composant est démonté
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);*/}

  // Projet
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Pour gérer le défilement et l'index
  const handleScrolll = () => {
    if (!containerRef.current) return;

    const containerBottom = containerRef.current.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // Si l'utilisateur est proche du bas de la page, on met à jour l'index
    if (containerBottom <= windowHeight) {
      if (currentIndex < projects.length - 1) {
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    }

    // Si l'on est au dernier index, on bloque le scroll
    if (currentIndex >= projects.length - 1) {
      document.body.style.overflow = 'hidden'; // Désactive le défilement
    } else {
      document.body.style.overflow = 'auto'; // Réactive le défilement si on n'est pas au dernier index
    }
  };

  // Utiliser useEffect pour écouter les changements de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScrolll);

    return () => {
      window.removeEventListener('scroll', handleScrolll);
    };
  });

  // Si l'index change, on va scrollTo au bas de la page
  useEffect(() => {
    if (currentIndex === projects.length - 1) {
      window.scrollTo(0, document.body.scrollHeight); // Scroll au bas de la page lorsque l'index est au dernier projet
    }
  });

  
  return (

    <div>
      <div id="cursor" ></div>
        <Background></Background>
         <header>
    

        <section id="landing">
          <div className="landing-container">
            <div>
              <h2  className={`title  ${ClashDisplay.className}` }>UI/UX DESIGNER</h2>
              <Image alt="nuage" 	height={500}	width={500} src="/rect.png" className="desktop nuages"/>
            </div>
            <div>
              <Portfoliosvg></Portfoliosvg>
              <h2 className={`title ${ClashDisplay.className}`}>INFOGRAPHISTE</h2>
            </div>
            <div>
              <h2 className={`title ${ClashDisplay.className}`}>& FREELANCER</h2>
              <Image alt="arrow" src="/arrow.png" 	height={250} 	width={250}  id="arrow-landing" className="arrow-landing"/>
            </div>
          </div>  
        </section>



        <section id="me">
        <h1 className={`${ClashDisplayMedium.className}`}>VALENTIN <br></br> TOUZINAUD</h1>
        <Image src="/valentinphoto.png"   	height={500} 	width={500} alt="photo de profil de valentin" id="photoprofil"/>
        
    
        <div className="carrou12">
          <ul className={` susutitle ${ClashDisplay.className}`} id="carrou1">
            
            <li>
            Graphic design
            </li>
            <li>
            Webdesign
            </li>
            <li>
              UI/UX design
            </li>
            <li>
            Graphic design
            </li>
            <li>
            Webdesign
            </li>
            <li>
              UI/UX design
            </li>
            <li>
            Graphic design
            </li>
            <li>
            Webdesign
            </li>
            <li>
              UI/UX design
            </li>
            <li>
            Graphic design
            </li>
            <li>
            Webdesign
            </li>
            <li>
              UI/UX design
            </li>
            <li>
            Graphic design
            </li>
            <li>
            Webdesign
            </li>
            <li>
              UI/UX design
            </li>
            <li>
            Graphic design
            </li>
          </ul>
        </div>


        <div className="carrou11">
          <ul className={` susutitle ${ClashDisplay.className}`} id="carrou2">
            
            <li>
            Webdesign
            </li>
            <li>
              UI/UX design
            </li>
            <li>
            Graphic design
            </li>
            <li>
            Webdesign
            </li>
            <li>
              UI/UX design
            </li>
            <li>
            Graphic design
            </li>
            <li>
            Webdesign
            </li>
            <li>
              UI/UX design
            </li>
            <li>
            Graphic design
            </li>
            <li>
            Webdesign
            </li>
            <li>
              UI/UX design
            </li>
            <li>
            Graphic design
            </li>
            <li>
            Webdesign
            </li>
            <li>
              UI/UX design
            </li>
            <li>
            Graphic design
            </li>
            <li>
            Webdesign
            </li>
            <li>
              UI/UX design
            </li>
            <li>
            Graphic design
            </li>
          </ul>
        </div>
        
        
        <footer>  
          <ul className="info">
            <li>
              <p className={`title ${ClashDisplay.className}`}>01</p>
              <div className="bartodisplay"></div>
              <p className={`title ${ClashDisplay.className} text-descriptif`}>Hey, moi c&apos;est Valentin, un jeune webdesigner passionné, toujours en quête d&apos;amélioration pour créer des œuvres qui, un jour, seront reconnues dans le monde entier.</p>
            </li>
            <li>
              <p className={`title ${ClashDisplay.className}`}>02</p>
              <div className="bartodisplay"></div>
              <p className={`title ${ClashDisplay.className} text-descriptif`}>Ma passion pour le design a commencé au lycée, où j&apos;ai suivi l&apos;option ISN. J&apos;ai ensuite poursuivi une licence en informatique, spécialisée en développement web, pour finir sur une licence professionnelle en webdesign, le tout à La Rochelle.</p>
            </li>
            <li>
              <p className={`title ${ClashDisplay.className}`}>03</p>
              <div className="bartodisplay"></div>
              <p className={`title ${ClashDisplay.className} text-descriptif`}>Bien que mes études soient terminées, je reste une personne autodidacte. Aujourd&apos;hui, je maîtrise la suite Adobe, Figma, ainsi que divers autres logiciels dédiés à la création visuelle. J&apos;ai également des compétences en codage web.</p>
            </li>
            <li>
              <p className={`title ${ClashDisplay.className}`}>04</p>
              <div className="bartodisplay"></div>
              <p className={`title ${ClashDisplay.className} text-descriptif`}>Je suis convaincu que l&apos;originalité apporte beaucoup, et je m&apos;efforce d&apos;appliquer ce principe dans chacun de mes projets. Mon objectif est d&apos;apporter une expérience différente pour les utilisateurs afin qu&apos;ils puissent être satisfait.</p>
            </li>
          </ul>
        </footer>
      
        </section>

        </header>
        <section id="Projects" className={`${ClashDisplay.className}`}>
            <div className="projet-menu-bar">
                    <Link href="/"  className={`${ClashDisplay.className} projet-menu-name`} >Valentin touzinaud</Link>
                    <div className="projet-menu-open">☰</div>
                  
            </div>
          <div className="projects-container" >
    

        <ProjectList></ProjectList>

          </div>
        </section>
        <section id="Contact">
          <h2 className={`${ClashDisplay.className} contact-title`}>créons <span>votre</span> design</h2>
          <div className="form-container">
            <form>
              <input className={`${ClashDisplay.className}`} type="text" placeholder="votre nom*"/>
              <input className={`${ClashDisplay.className}`} type="text" placeholder="votre mail*"/>
              <input className={`${ClashDisplay.className} message`} type="text" placeholder="votre message*"/>
              <button className={`${ClashDisplay.className}`} type="submit">Envoyer</button>
            </form>  

            <Image  src="/rectcontact.png"  	height={500} 	width={500} alt="rectcontact"/> 
          </div>
    
         
        </section>
        <div className="borderradius-footer"></div>
        <footer className="footing">
          <p className={`${ClashDisplay.className} starting`}>2024 © édition </p>
          <p className={`${ClashDisplay.className} subtitle`}>Réseaux</p>
          <p className={`${ClashDisplay.className}`} >Linkedin</p>
          <p className={`${ClashDisplay.className}`} >Instagram</p>
          <p className={`${ClashDisplay.className}`} >Contra</p>
        </footer>
    </div>
  );
}
