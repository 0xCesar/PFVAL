"use client";


import React, {useState, useRef} from "react";
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
   // const container = useRef();
    const tl = useRef<GSAPTimeline | null>(null);  
    useGSAP(() => {
        gsap.set(".cross", { rotation: 0 });
        gsap.set(".loader-bar", { width: "0%" });
    
        tl.current = gsap.timeline({ paused: true })
            .to(".cross", {
                rotation: 180,
                duration: 0.5,
                ease: "power4.inOut",
                delay: 0.5
            })
            .to({ val: 0 }, {
                val: 50,
                duration: 0.5,
                ease: "power2.out",
                onUpdate: function () {
                    setPercentage(Math.round(this.targets()[0].val));
                }
            }, "start")
            .to(".loader-bar", {
                width: "100%",
                duration: 2,
                ease: "power4.inOut"
            }, "start")
            .to({ val: 50 }, {
                val: 100,
                duration: 0.75,
                ease: "power2.out",
                onUpdate: function () {
                    setPercentage(Math.round(this.targets()[0].val));
                }
            }, "start");
    
        // 🌊 Wave animation
        gsap.to("header .bubble, footer .bubble", {
            y: 12,                    
            duration: 0.3,            
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            repeatDelay: 0,
            stagger: {
                each: 0.06,           
                from: "center"         
            }
        });

        tl.current.play();
    });
    

    //useGSAP( () => {
       //     gsap.set('.menu-links', {y : 75}),
       //     gsap.set(".right-cross, .left-cross", { rotation: 0 }); 
//
       //     tl.current = gsap.timeline({ paused: true})
       //     .to(".menu-overlay", {
       //         duration : 1.25,
       //         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
       //         ease : "power4.inOut",
       //     })
       //   
       // }, { scope: container});
        
   // useEffect( () => {
   //     if(isMenuOpen){
   //         tl.current.play();
   //     }else{
   //         tl.current.reverse();
   //     }
   // }, [isMenuOpen]);

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
                    <h2 className={`${ClashDisplay.className}`}>création en cours</h2>
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
