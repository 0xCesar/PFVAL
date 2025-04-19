"use client";

import { notFound } from "next/navigation";
import React , { use, useEffect } from "react";
import { gsap } from "gsap";
import localFont from 'next/font/local';
import "./project.css";
import Image from "next/image";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from "next/link";
import { useMenu } from "@/app/MenuContext";


gsap.registerPlugin(ScrollToPlugin);

const projects : {
  title: string;
  slug: string;
  ref: string;
  description: string;
  competence: string[];
  date: string;
  preview: string[];
}[] = [
  { title: "Moontain", slug: "Moontain", ref: "/moontain", description: "Moontain est à la fois un vlog d'alpinisme et une boutique en ligne spécialisée dans l'équipement de montagne et d'escalade. Un groupe d'alpinistes et partage leurs ascensions et leurs expéditions réalisées à travers le monde.", competence: ["ILLUSTRATOR","FIGMA","PHOTOSHOP"], date : "12/04/2023", preview : ["/moontain-img1","/moontain-img2","/moontain-img3","/moontain-img4"] },
  { title: "Web Marmottes agency", slug: "WebMarmotte", ref: "/webmarmottes", description: "Web Marmottes est une agence web fondée dans le cadre de ma licence professionnelle. Sa mission est de concevoir des sites internet pour des clients disposant de moyens limités. L'équipe est composée de trois développeurs et d'un designer (moi).", competence: ["HTML","SCSS","JS","FIGMA","ILLUSTRATOR","PHOTOSHOP","WORDPRESS"], date : "22/11/2023", preview : ["/WebMarmottes1"] },
  { title: "Projet J.O. 2024", slug: "JO2024" ,ref: "/paris2024", description: "Volympique est une application conçue pour aider les bénévoles à s'orienter et à répondre aux différents besoins via une carte interactive, où chaque lieu est indiqué afin de garantir la sécurité, la fluidité et le bien-être des utilisateurs. Ce projet a été réalisé par une équipe composée de 5 développeurs web et de 3 designers.", competence: ["HTML","SCSS","JS","FIGMA","PHOTOSHOP","PREMIERE PRO"], date : "12/02/2024", preview : ["/Moodboard1"] },
  { title: "Visuels / Posters", slug: "Visuels" ,ref: "/visuel", description: "Les affiches et visuels présentés sont issus de divers projets réalisés durant ma licence professionnelle, ainsi que de créations personnelles réalisées pendant mon temps libre. Ces projets m'ont permis d'explorer de nouveaux styles, d'affiner mon sens critique, et de développer mes compétences en vue de futures collaborations.", competence: ["LIGHTROOM","PHOTOSHOP","ILLUSTRATOR","FIGMA"], date : "??/??/20XX", preview : ["/visuel1","/visuel2","/visuel3"] },
];

const ClashDisplay = localFont({
  src: '../../../../public/fonts/ClashDisplay-Regular.woff2',
});



export default function ProjectPage({ params }: {params: Promise<{ slug: string }>}) {
  console.log(projects)
const { setIsMenuOpen } = useMenu();
   const unwrappedParams = use(params);  

   const slug = unwrappedParams?.slug; 

   const project = projects.find((p) => p.slug === slug);

   useEffect(() => {
    if (!project) return; // On attend que le projet soit là

    const starterAnim = document.querySelectorAll(".startAnimation");
    const img = document.querySelectorAll('.projet-bg');
    gsap.to(img, {
    
      filter: "blur(5px)",
      duration: 1,
      ease: "power2.In",
  
    });
    gsap.fromTo(starterAnim, {
      opacity : 0,
      y : '-100%',
    },
      {
      y : '0%',
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.3, 
    });
  }, [project]);


  useEffect(() => {
    const arrow = document.getElementById("arrow-projet");
    const meSection = document.getElementById("preview");

    if (!arrow || !meSection) return;

    arrow.addEventListener("click", () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#preview", offsetY: 0 },
        ease: "power2.out",
      });
    });
    
    return;
  }, []);

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

  return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  if (!project) return notFound(); 

   const listCompetences = project.competence.map((competence, index) =>
     <li key={index} className={`${ClashDisplay.className}`}>{competence}</li>
   );

   const listPreview = project.preview?.map((preview, index) => (
    <div key={index}  className="preview-wrapper">
           <Image 	 width={0}
  height={0}
  sizes="100vw"
  style={{ width: "100%", height: "auto" }}
  quality={100} key={index} src={`${preview}.png`} alt={`Preview ${index}`} />
    </div>

   ));



  return (
    <div>
      <div id="cursor"></div>
      {/*HEADER*/}
      <div className="projet-menu-bar" style={{position:'fixed'}}>
                    <Link href="/"  className={`${ClashDisplay.className} projet-menu-name`} >Valentin touzinaud</Link>
                    <div className="projet-menu-open" onClick={() => setIsMenuOpen(true)}>⚌</div>
                  
        </div>
      {/*LANDING SECTION*/}
      <section className="projet-section">
        <Image fill src={`${project.ref}.png`} alt={project.title} quality={100}   className="mobile projet-bg"/>
        <Image fill src={`${project.ref}-desktop.png` } alt={project.title} quality={100}    style={{ width: "100%", height: "100%", objectFit: "cover" }} className="projet-bg"/>    
        <div className="mask startAnimation"></div> 
        <div className="projet-title startAnimation">
          <h1 className={`${ClashDisplay.className}`}>{project.title}</h1>
          <div className="bar"></div>
        </div>

        <ul className="projet-competences startAnimation">
          {listCompetences}
        </ul>

        <p className={`${ClashDisplay.className} projet-description startAnimation`}>{project.description}</p>
        <Image width={250} height={250} src="/arrowwhite.png" id="arrow-projet" alt="arrow"  quality={100}  className="arrow-landing startAnimation"/>
        <p className={`${ClashDisplay.className} projet-date startAnimation`}>{project.date}</p>
      </section>
      {/*IMAGES*/}
      <section id="preview" className="projet-preview">
        {listPreview}
      </section>
    </div>
  );
}
