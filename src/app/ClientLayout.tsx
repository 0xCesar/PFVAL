// components/ClientLayout.tsx
"use client";
import { useState, useEffect } from "react";
import Menu from "./components/menu/Menu";
import Loader from "./components/loader/loader";

import { MenuProvider } from "./MenuContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
       const timeout = setTimeout(() => setLoading(false), 5500);
      return () => clearTimeout(timeout);
    }, []);
    
  
    return loading ? 
    
    
    <> 

      <Loader /> 
    </>: (
      <>
        <MenuProvider>
          <Menu />
          {children}
        </MenuProvider>
       
        
      </>
    );
  }
