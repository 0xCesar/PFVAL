// components/ClientLayout.tsx
"use client";
import { useState, useEffect } from "react";
import Menu from "./components/menu/Menu.js";
import Loader from "./components/loader/loader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
     const timeout = setTimeout(() => setLoading(false), 2500);
      return () => clearTimeout(timeout);
    }, []);
    useEffect(() => {
        // Petit timeout pour laisser le layout se stabiliser
        const timeout = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100); // ou 200ms si t'as du lazy loading
      
        return () => clearTimeout(timeout);
      }, []);
  
    return loading ? <Loader /> : (
      <>
        <Menu />
        {children}
      </>
    );
  }
