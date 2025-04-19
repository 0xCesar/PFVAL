"use client";


import React, {useState, useRef, useEffect} from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./loader.css";

import Background from "../background";
import localFont from "next/font/local";

const ClashDisplay = localFont({
    src: '../../../../public/fonts/ClashDisplay-Regular.woff2',

})


export default function Loader() {
    const [percentage, setPercentage] = useState(0);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const tl = useRef<GSAPTimeline | null>(null);  

    // Hook
    useEffect(() => {
        const el = titleRef.current;
        if (!el) return;
    
        const text = el.textContent || "";
        const letters = text.split("");
    
       el.innerHTML = letters
          .map(letter => `<span class="letter">${letter}</span>`)
          .join("");
           setTimeout(() => {
            gsap.fromTo(
                el.querySelectorAll(".letter"),
                { opacity: 0, 
                  y: 200 
              },
                {
                  opacity: 1,
                  y: 0,
                  stagger: 0.05,
                  duration: 0.65,

                  ease: 'power1.out',
               
                
                
                
                }
              );
          }, 1000)
          setTimeout(() => {
            let myLoaderContainer = document.querySelectorAll(".loader-container");
            gsap.fromTo(myLoaderContainer,
            { opacity: 1, 
                  
              },
                {
                  opacity: 0,
                 
                  duration: 0.5,

                  ease: 'power1.out',
               
                
                
                
                }
              );
          }, 4000)
       
    }, []);

    useGSAP(() => {
        gsap.set(".cross", { rotation: 0, opacity : 0 });
        gsap.set(".loader-bar", { width: "0%" });
        gsap.set("footer .bubble, header .bubble", { opacity: 0 });

        const anim = gsap.fromTo("footer .bubble, header .bubble", { 
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.5,
            paused: true,
            ease: 'power4.inOut',
          
        });
    
        tl.current = gsap.timeline({ paused: true })
            .to(".cross", {
                rotation: 180,
                duration: 1,
                opacity : 1, 
                ease: "power4.inOut",
                delay: 0.5,
                onComplete : () => {
                    gsap.set(".cross", { opacity : 1 });
                    
                    gsap.to("footer .bubble", {
                       
                        y: 12,                    
                        duration: 0.5,            
                        ease: "sine.inOut",
                        repeat: -1,
                        yoyo: true,
                        repeatDelay: 0,
                        stagger: {
                            each: 0.06,           
                            from: "random"         
                        },       
                       
                    })
                    gsap.to("header .bubble", {
                      
                        y: -12,                    
                        duration: 0.5,            
                        ease: "sine.inOut",
                        repeat: -1,
                        yoyo: true,
                        repeatDelay: 0,
                        stagger: {
                            each: 0.06,           
                            from: "random"         
                        },
                        
                    });
                    anim.play();
                   
                    
                }
            })
            
            .to(".loader-bar", {
                opacity : 1,
                width: "100%",
                duration: 5,
                ease: "power4.Out"
            }, "start")
            .to({ val: 0 }, {
                val: 100,
                duration: 2,
                ease: "power4.sinOut",
                onUpdate: function () {
                    setPercentage(Math.round(this.targets()[0].val));
                }
            }, "start");
    

        tl.current.play();
    });
    

    // HTML
    return <>
        <div className="loader-container" >
            <div className="top-right-cross cross"></div>
            <div className="top-left-cross cross"></div>
            <Background></Background>

            <div className="section-loader">
                <div className="loader-bar"></div>
                <div className="section-loader-center">
                    <header>
                        <ul>
                            <li className="bubble"></li>
                            <li className="bubble"></li>
                            <li className="bubble"></li>
                            <li className="bubble"></li>
                            <li className="bubble"></li>
                            <li className="bubble"></li>
                            <li className="bubble"></li>
                            <li className="bubble"></li>
                            <li className="bubble"></li>
                        </ul>
                    </header>
                    <h2  ref={titleRef} className={`${ClashDisplay.className}`}>création en cours</h2>
                    <footer>
                        <ul>
                            <li className="bubble"></li>
                            <li className="bubble"></li>
                            <li className="bubble"></li>
                            <li className="bubble"></li>
                            <li className="bubble"></li>
                            <li className="bubble"></li>
                            <li className="bubble"></li>
                            <li className="bubble"></li>
                            <li className="bubble"></li>
                        </ul>
                    </footer>
                </div>
            
                <div className="loader-bar"></div>  
            </div>
            <div className={`${ClashDisplay.className} loader-percentage`}>{percentage}</div>
            <div className="bot-right-cross cross"></div>
            <div className="bot-left-cross cross"></div>
        </div>
    </>
    }
