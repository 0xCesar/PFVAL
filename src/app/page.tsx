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
import { useMenu } from "./MenuContext";

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
  const { setIsMenuOpen } = useMenu();

    const text1 = useRef<HTMLParagraphElement | null>(null);
    const text2 = useRef<HTMLParagraphElement | null>(null);
    const text3 = useRef<HTMLParagraphElement | null>(null);
    const text4 = useRef<HTMLParagraphElement | null>(null);


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
      { y: "0%", opacity: 1, duration: 1.5, stagger: 0.5, ease: "sine.Out" }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#me .bartodisplay",
      { width: "0%" }, 
      {
        width: "100%", 
        duration: 3,
        stagger: 2.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".info",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    const refs = [text1, text2, text3, text4];

    const animateWords = (el: HTMLElement) => {
      const text = el.textContent || "";
      const words = text.split(" ");
    
      el.innerHTML = words
        .map(word => `<span class="word">${word}</span>`)
        .join(" ");
    };
    
    setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".info",
          start: "top 80%",
        },
      });
    
      refs.forEach(ref => {
        const el = ref.current;
        if (!el) return;
    
        el.setAttribute("animate", "true"); // pour que [animate] fonctionne
        animateWords(el); // transforme le texte en spans .word
    
        tl.from(
          el.querySelectorAll(".word"),
          {
            y: "100%",
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
            stagger: 0.1,
          },
          
        );
      });
    }, 500);


   /* gsap.fromTo(
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
    );*/

    

  }, []);
  
  useEffect(() => {
  
    const projectSection = document.querySelector("#Projects");

  
    if (projectSection) {

      const scrollTrigger = ScrollTrigger.create({
        trigger: projectSection,          
        start: "top 70%",                 
        end: "bottom 80%",   
     
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
      return () => {
        if (scrollTrigger) {
          scrollTrigger.kill();
        }
      };
   
    }

 
  }, []);

  



  
  // Projet
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  
  const handleScrolll = () => {
    if (!containerRef.current) return;

    const containerBottom = containerRef.current.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;


    if (containerBottom <= windowHeight) {
      if (currentIndex < projects.length - 1) {
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    }

    if (currentIndex >= projects.length - 1) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
  };

  
  useEffect(() => {
    window.addEventListener('scroll', handleScrolll);

    return () => {
      window.removeEventListener('scroll', handleScrolll);
    };
  });


  useEffect(() => {
    if (currentIndex === projects.length - 1) {
      window.scrollTo(0, document.body.scrollHeight); 
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
        <Image src="/valentinphoto.png"   	height={400} 	width={350} alt="photo de profil de valentin" id="photoprofil"/>
        
    
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
              <p  ref={text1} className={`title ${ClashDisplay.className} text-descriptif`}>Hey, moi c&apos;est Valentin, un jeune webdesigner passionné, toujours en quête d&apos;amélioration pour créer des œuvres qui, un jour, seront reconnues dans le monde entier.</p>
            </li>
            <li>
              <p className={`title ${ClashDisplay.className}`}>02</p>
              <div className="bartodisplay"></div>
              <p ref={text2} className={`title ${ClashDisplay.className} text-descriptif`}>Ma passion pour le design est née au lycée. Depuis, j&apos;ai suivi un parcours en développement web jusqu&apos;à une licence pro en webdesign à La Rochelle.</p>
            </li>
            <li>
              <p className={`title ${ClashDisplay.className}`}>03</p>
              <div className="bartodisplay"></div>
              <p ref={text3} className={`title ${ClashDisplay.className} text-descriptif`}>Même après mes études, je reste autodidacte. Je maîtrise la suite Adobe, Figma, d&apos;autres outils créatifs, ainsi que le codage web.</p>
            </li>
            <li>
              <p className={`title ${ClashDisplay.className}`}>04</p>
              <div className="bartodisplay"></div>
              <p ref={text4} className={`title ${ClashDisplay.className} text-descriptif`}>Je crois en la force de l&apos;originalité, que j&apos;intègre dans chacun de mes projets pour offrir aux utilisateurs une expérience à la fois unique et satisfaisante.</p>
            </li>
          </ul>
        </footer>
      
        </section>

        </header>
        <section id="Projects" className={`${ClashDisplay.className}`}>
            <div className="projet-menu-bar">
                    <Link href="/"  className={`${ClashDisplay.className} projet-menu-name`} >Valentin touzinaud</Link>
                    <div className="projet-menu-open" onClick={() => setIsMenuOpen(true)}>⚌</div>
                  
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
