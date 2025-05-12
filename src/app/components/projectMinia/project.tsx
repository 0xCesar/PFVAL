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
  // eslint-disable-next-line prefer-const
  let [index, setIndex] = useState(0);
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

  function scrambleText(element: HTMLElement, newText: string) {
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    const duration = 350; 
    const frameRate = 30; 
  
    let frame = 0;
    let interval: NodeJS.Timeout | null = null;
  
    const originalLength = element.textContent?.length || 0;
    const maxLength = Math.max(originalLength, newText.length);
  
    const scramble = () => {
      const displayedText = [];
      for (let i = 0; i < maxLength; i++) {
        if (i < frame && i < newText.length) {
          displayedText.push(newText[i]);
        } else {
          displayedText.push(chars[Math.floor(Math.random() * chars.length)]);
        }
      }
      element.textContent = displayedText.join("");
  
      frame++;
      if (frame > newText.length) {
        if (interval) clearInterval(interval);
        element.textContent = newText; 
      }
    };
  
    if (interval) clearInterval(interval);
    interval = setInterval(scramble, duration / frameRate);
  }


 
  useEffect(() => {
    router.prefetch(target);
  }, [target, router]);

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


    const nameChildren = document.querySelectorAll('#projectname > *');
    const numberChildren = document.querySelectorAll('#numbered > *');


    
    function animTextTo(nextIndex : number, currentIndex : number){


              const nameChildren = document.querySelectorAll('#projectname > *');
              const numberChildren = document.querySelectorAll('#numbered > *');
          
              // Vérif currentIndex
              const currentTitleElement = nameChildren[currentIndex];
              const nextTitleElement = nameChildren[nextIndex];

       

              const currentNumberElement = numberChildren[currentIndex];
              const nextNumberElement = numberChildren[nextIndex];
              const percentageSetup = nextIndex * -100;
             // console.log(percentageSetup)

          if (currentTitleElement && nextTitleElement && currentNumberElement && nextNumberElement) {
            const elementsTitleCurrent = Array.from(currentTitleElement.childNodes);
            const elementsTitle = Array.from(nextTitleElement.childNodes);



            const elementNumberCurrent = Array.from(currentNumberElement.childNodes);
            const elementsNumber = Array.from(nextNumberElement.childNodes);

            const tl = gsap.timeline({
              defaults: {
                y: "-100%",
              
                duration: 0.8,
                stagger: 0.1,  
                ease: "power3.out",
              },
              onComplete: () => {
             //   console.log("All animations completed");
              
            
             
     
                gsap.set(nameChildren, { y : percentageSetup.toString() + '%'})
                gsap.set(elementsTitleCurrent, { y : '0%'})
                gsap.set(elementsTitle, { y : '0%'})
                gsap.set(numberChildren, {y: percentageSetup.toString() + '%'})
                gsap.set(elementNumberCurrent, { y: '0%' });
                gsap.set(elementsNumber, { y: '0%' });
                index = nextIndex;
              }
            });
            const descElement = document.querySelector('#projectdescription > li') as HTMLElement;
            if(nextIndex > currentIndex){
          
         
           
              if (descElement) {
                scrambleText(descElement, projects[nextIndex].description);
              }
              tl.to(elementsTitleCurrent, { y: "-100%",  duration: 0.3, },0)  
              .to(elementsTitle, { y: "-100%" , duration: 0.7 } ,0)
              .to(elementNumberCurrent, { y: "-100%",  duration: 0.3
               },0)
              .to(elementsNumber, { y: "-100%", duration: 0.7},0)
            }else{
              if (descElement) {
                scrambleText(descElement, projects[nextIndex].description);
              }
              tl.to(elementsTitleCurrent, { y: "100%",  duration: 0.2, },0)  
              .to(elementsTitle, { y: "100%" , duration: 0.7 } ,0)
     
              .to(elementNumberCurrent, { y: "100%",  duration: 0.3 },0)
              .to(elementsNumber, { y: "100%", duration: 0.7},0)
            }
        
            
            
           

          } else {
            console.error("Un ou plusieurs éléments manquent à l'index", currentIndex, nextIndex);
          }
    }




    wrapLetters(nameChildren);
    wrapLetters(numberChildren);


    function handleScroll()  {

      const currentScroll = window.scrollY;
      if (isAnimating.current) return; 
      if (currentScroll > lastScroll.current) { // Descendre 
     
        setIndex((prev) => {

          if(prev > 1){
          /** */
           // CODE TOP ICI
           if(index == 0){
            isAnimating.current = true;
            gsap.to(window, {
              duration: 2,
              scrollTo: { y: '#webmarmottes', offsetY: 0 }, 
              ease: "power2.out",
              onStart: () => {
                
                setTimeout(() => {animTextTo(1, index) }, 100);
              },
              onComplete: () => {
                isAnimating.current = false;
              
              }
            });
            setTarget('/projects/WebMarmotte')
           }
           if(index == 1){
            isAnimating.current = true;
            gsap.to(window, {
              duration: 2,
              scrollTo: { y: '#paris2024', offsetY: 0 }, 
              ease: "power2.out",
              onStart: () => {
                
                setTimeout(() => {animTextTo(2, index) }, 100);
              },
              onComplete: () => {
                isAnimating.current = false;
              
              }
            });
            setTarget('/projects/JO2024')
           }
           if(index == 2){
            isAnimating.current = true;
            gsap.to(window, {
              duration: 2,
              scrollTo: { y: '#visuel', offsetY: 0 }, 
              ease: "power2.out",
              onStart: () => {
                
                setTimeout(() => {animTextTo(3, index) }, 100);
              },
              onComplete: () => {
                isAnimating.current = false;
              
              }
            });
            setTarget('/projects/Visuels');
           }
       
            return 0;
          }
          return prev + 1;
        });
        
      } else if (currentScroll < lastScroll.current) { // Monter
      
        setIndex((prev) => {
          if(index == 20){

          }
       
          if(prev < -1){

            if(index == 1){

              isAnimating.current = true;
              gsap.to(window, {
                duration: 2,
                scrollTo: { y: '#moontain', offsetY: 0 }, 
                ease: "power2.out",
                onStart: () => {
                  
                  setTimeout(() => {animTextTo(0, index) }, 100);
                },
                onComplete: () => {
                  isAnimating.current = false;
                
                }
              });
              setTarget('/projects/Moontain');
            }
            if(index == 2){
           //   console.log(index)
              isAnimating.current = true;
              gsap.to(window, {
                duration: 2,
                scrollTo: { y: '#webmarmottes', offsetY: 0 }, 
                ease: "power2.out",
                onStart: () => {
                  
                  setTimeout(() => {animTextTo(1, index) }, 100);
                },
                onComplete: () => {
                  isAnimating.current = false;
                
                }
              });
              setTarget('/projects/Webmarmottes');
            }

            if(index == 3){
            //  console.log(index)
              isAnimating.current = true;
              gsap.to(window, {
                duration: 2,
                scrollTo: { y: '#paris2024', offsetY: 0 }, 
                ease: "power2.out",
                onStart: () => {
                  
                  setTimeout(() => {animTextTo(2, index) }, 100);
                },
                onComplete: () => {
                  isAnimating.current = false;
                
                }
              });
              setTarget('/projects/JO2024');
            }


        //    console.log("#" + projects[myIndex].ref)
        // CODE BOTTOM ICI
        
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
        const descElement = document.querySelector('#projectdescription > li') as HTMLElement;
        if (descElement && (index == 0)) {
            scrambleText(descElement, projects[0].description);
        }
      }
    })


    ScrollTrigger.create({
      trigger: projectsSection,
      start: "top 0%",     
      end: "bottom 90%", 

      onEnter: () => {
      //  console.log('onEnter')
        infosSection.classList.add("fixed");
        infosSection.classList.remove("absolute");
        window.removeEventListener("scroll", handleBeforeScroll)
        window.addEventListener("scroll", handleScroll);
        menuBar.classList.add("fixed");
        menuBar.classList.remove("absolute");

      },
      onLeave: () => {
//console.log('onLeave')
        infosSection.classList.remove("fixed");
        infosSection.classList.add("absolute");    
        window.removeEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleBeforeScroll);
        menuBar.classList.remove("fixed");
        menuBar.classList.add("absolute");
        
      },
      onEnterBack: () => {
     //  console.log('onEnterBack')
       infosSection.classList.remove("absolute");
        infosSection.classList.add("fixed");
 
        window.removeEventListener("scroll", handleBeforeScroll);

        window.addEventListener("scroll", handleScroll);

        menuBar.classList.remove("fixed");

        menuBar.classList.add("absolute");
        
      },
      onLeaveBack: () => {
     //   console.log('onLeaveBack')
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
                        <li>  </li>
                   </ul>
              
                <p className="footer-textdescription">Description</p>
              </div>
            </footer>
          </div>
       
      </div>
    </>
  );
}
