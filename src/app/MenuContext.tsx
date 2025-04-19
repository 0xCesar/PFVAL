// MenuContext.tsx
import { createContext, useContext, useState } from "react";

const MenuContext = createContext<{
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
} | null>(null);

export const useMenu = () => {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("useMenu must be used inside MenuProvider");
  return ctx;
};

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
