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
  
    return loading ? <Loader /> : (
      <>
        <Menu />
        {children}
      </>
    );
  }
