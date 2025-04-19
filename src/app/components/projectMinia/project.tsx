"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from 'next/image';
import "./project.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const projects:{
  title: string;
  slug: string;
  ref: string;
  description: string;
}[]= [
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
  const [target, setTarget] = useState('/projects/Moontain')
  const [index, setIndex] = useState(0);
  const lastScroll = useRef(0);
  const router = useRouter();

  const isAnimating = useRef(false);
  function wrapLetters(elements: NodeListOf<Element>) {
    elements.forEach(el => {
      const text = el.textContent;
      if (!text) return;
  
      el.innerHTML = ''; // Clear element
      const letters = text.split('');
  
      letters.forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.display = 'inline-block';
        el.appendChild(span);
      });
    });
  }


 
  useEffect(() => {
    router.prefetch(target);
  }, [target]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    const infoblock = document.getElementById("infoblock");
  
    if (!infoblock) return;
  
    gsap.to(infoblock, {
      opacity: 0,
      y: -100,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        router.push(target); 
      },
    });
  };


  useEffect(() => {
    const descChildren = document.querySelectorAll('#projectdescription > *');
    const nameChildren = document.querySelectorAll('#projectname > *');
    const numberChildren = document.querySelectorAll('#numbered > *');

  
    wrapLetters(nameChildren);
    wrapLetters(numberChildren);
    wrapLetters(descChildren);

    const descChildrens = document.querySelectorAll('#projectdescription span');
    const nameChildrens = document.querySelectorAll('#projectname span');
    const numberChildrens = document.querySelectorAll('#numbered li span');
    console.log(numberChildrens)
    const numberOne = document.querySelectorAll('#un span');
    const spanElements = document.querySelectorAll('#numbered li span');

    let myIndex = 0;
    function handleScroll()  {
      console.log("scroll will be handle")
      const currentScroll = window.scrollY;
      if (isAnimating.current) return; // NE PAS animer si une anim est en cours
      if (currentScroll > lastScroll.current) {
        setIndex((prev) => {
          console.log(prev)
          if(prev > 5){
            if(myIndex == 0){
              console.log(myIndex)
              isAnimating.current = true;
              gsap.to(window, {
                duration: 2,
                scrollTo: { y: '#webmarmottes', offsetY: 0 }, 
                ease: "power2.out",
                onComplete: () => {
                  isAnimating.current = false;
                  myIndex = 1;
                }
              });
              gsap.to(descChildrens, {
                y: "-100%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
              gsap.to(nameChildrens, {
                y: "-100%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
              numberChildrens.forEach((span, i) => {
                gsap.to(span, {
                  opacity: 1,
                  y: 0,
                  delay: i * 0.1, // delay progressif
                  duration: 0.8,
                  ease: "power2.out"
                });
              });
           
             

              setTarget('/projects/WebMarmotte')
     
              
            }
            if(myIndex == 1){
              console.log(myIndex)
              isAnimating.current = true;
              gsap.to(window, {
                duration: 2,
                scrollTo: { y: '#paris2024', offsetY: 0 }, 
                ease: "power2.out",
                onComplete: () => {
                  isAnimating.current = false;
                  myIndex = 2;
                }
              });
              gsap.to(descChildren, {
                y: "-200%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
              gsap.to(nameChildren, {
                y: "-200%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
              gsap.to(numberChildren, {
                y: "-200%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
              setTarget('/projects/JO2024')
           
            }
            if(myIndex == 2){
              console.log(myIndex)
              isAnimating.current = true;
              gsap.to(window, {
                duration: 2,
                scrollTo: { y: '#visuel', offsetY: 0 }, 
                ease: "power2.out",
                onComplete: () => {
                  isAnimating.current = false;
                  myIndex = 3;
                }
                
              });
              gsap.to(descChildren, {
                y: "-300%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
              gsap.to(nameChildren, {
                y: "-300%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
              gsap.to(numberChildren, {
                y: "-300%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
              setTarget('/projects/Visuels');
            }
           
            return 0;
          }
          return prev + 1;
        });
        
      } else if (currentScroll < lastScroll.current) {
        setIndex((prev) => {
          if(index == 20){

          }
       
          if(prev < -5){
           
            console.log("#" + projects[myIndex].ref)
            if(myIndex == 1){
              console.log(myIndex)
              isAnimating.current = true;
              gsap.to(window, {
                duration: 2,
                scrollTo: { y: '#moontain', offsetY: 0 }, 
                ease: "power2.out",
                onComplete: () => {
                  isAnimating.current = false;
                  myIndex = 0;
                }
              });
              gsap.to(descChildren, {
                y: "0%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
              gsap.to(nameChildren, {
                y: "0%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
              gsap.to(numberChildren, {
                y: "0%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
            }
            if(myIndex == 2){
              console.log(myIndex)
              isAnimating.current = true;
              gsap.to(window, {
                duration: 2,
                scrollTo: { y: '#webmarmottes', offsetY: 0 }, 
                ease: "power2.out",
                onComplete: () => {
                  isAnimating.current = false;
                  myIndex = 1;
                }
              });
              gsap.to(descChildren, {
                y: "-100%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
              gsap.to(nameChildren, {
                y: "-100%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
              gsap.to(numberChildren, {
                y: "-100%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
            }
            if(myIndex == 3){
              console.log(myIndex)
              isAnimating.current = true;
              gsap.to(window, {
                duration: 2,
                scrollTo: { y: '#paris2024', offsetY: 0 }, 
                ease: "power2.out",
                onComplete: () => {
                  isAnimating.current = false;
                  myIndex = 2;
                }
              });
              gsap.to(descChildren, {
                y: "-200%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
              gsap.to(nameChildren, {
                y: "-200%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
              gsap.to(numberChildren, {
                y: "-200%",
                opacity: 1,
                duration: 2,
                stagger: 0.1,
                ease: "power3.out",
             
              });
            }
        
            return 0;
          }
          return prev - 1;
        });
      }
    
      lastScroll.current = currentScroll;
    };
    const infosSection = document.querySelector(".infos-section");
    const projectsSection = document.querySelector(".images-section");
   
    const menuBar = document.querySelector('.projet-menu-bar') as HTMLElement;
    const linkeded = document.querySelector('#linkeded');


    const handleBeforeScroll = () => {
      const projectElement = document.getElementById('Projects');
      const menuElement = document.querySelector('.projet-menu-bar') as HTMLElement;

      if (projectElement && menuElement) {
        const projectTop = projectElement.getBoundingClientRect().top;
        if((projectTop <= window.innerHeight)){
          menuElement.style.top =  `-${projectTop}px`
        }if((projectTop < 0)){
           
           menuElement.style.top =  `${projectTop * -1.0}px`
        }
       
        
      }
      if(linkeded){
        linkeded.addEventListener('click', () => { window.removeEventListener('scroll', handleScroll)})
      }
    };
   
    
    if (!infosSection || !projectsSection || !menuBar || !linkeded) return ;
    ScrollTrigger.create({
      trigger: projectsSection,
      start: "top 100%",
      onEnter: () => {
        window.addEventListener('scroll', handleBeforeScroll)
      }
    })


    ScrollTrigger.create({
      trigger: projectsSection,
      start: "top 0%",     
      end: "bottom 90%", 

      onEnter: () => {
        console.log('onEnter')
        infosSection.classList.add("fixed");
        infosSection.classList.remove("absolute");
        window.removeEventListener("scroll", handleBeforeScroll)
        window.addEventListener("scroll", handleScroll);
        menuBar.classList.add("fixed");
        menuBar.classList.remove("absolute");
      },
      onLeave: () => {
        console.log('onLeave')
        infosSection.classList.remove("fixed");
        infosSection.classList.add("absolute");    
        window.removeEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleBeforeScroll);
        menuBar.classList.remove("fixed");
        menuBar.classList.add("absolute");
        
      },
      onEnterBack: () => {
        console.log('onEnterBack')
        infosSection.classList.add("fixed");
        infosSection.classList.remove("absolute");
        window.removeEventListener("scroll", handleBeforeScroll);
        window.addEventListener("scroll", handleScroll);
        menuBar.classList.remove("fixed");
        menuBar.classList.add("absolute");
        
      },
      onLeaveBack: () => {
        console.log('onLeaveBack')
        infosSection.classList.remove("fixed");
        infosSection.classList.add("absolute");
        window.removeEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleBeforeScroll)
        menuBar.classList.remove("fixed");
        menuBar.classList.add("absolute");
      },
      
    });


  },);





  return (
    <>
      <div className="images-section" >
        {projects.map((project, index) => (
          <div
            key={project.slug}
            id={project.ref}
            className="image-block"
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            style={{ height: "100vh" }}
          >
            <Image 
              src={`/${project.ref}.png`}
              alt={project.title}
              className="mobile"
              height={500} 	width={500} 
              style={{ width: "100%", height: "100%" }}
              quality={100} 
            />
            <Image 
              src={`/${project.ref}-desktop.png`}
              alt={project.title}
              className="desktop"
              height={1920} 	width={1080} 
              unoptimized
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      <div className="infos-section">

          <div className="info-block" id="infoblock">
            <header>
              <div className="number">
                <ul id="numbered">
                    <li id="un">01</li>
                    <li id="deux">02</li>
                    <li id="3">03</li>
                    <li id="4">04</li>
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
            <Link href={target}  passHref legacyBehavior>
           
            <a  id="linkeded" onClick={handleClick}>
              <Image className="desktop arrow2" fill quality={100} src="/arrow2.png" alt="arrow" />
            </a>
            </Link>
              <div className="footer-mobile">
                
                    <ul id="projectdescription">
                        <li>Moontain est un site de type &apos;vlog&apos; que j&apos;ai créé dans le but d&apos;apprendre à utiliser Figma pour concevoir des maquettes de sites web.
                        </li>
                        <li>   
      Durant ma licence professionnelle en webdesign, nous avons eu pour mission de créer une agence web. Mon rôle était de concevoir un visuel attrayant.</li>
                        <li>Conception d&apos;une application destinée à assister les bénévoles dans diverses tâches pendant les Jeux Olympiques de Paris (projet de licence).                        </li>
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
