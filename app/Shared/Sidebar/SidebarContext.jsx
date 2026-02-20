'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SidebarContext = createContext({ isOpen: false, open: () => {}, close: () => {} });

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  // Auto-close on route change
  useEffect(() => { close(); }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <SidebarContext.Provider value={{ isOpen, open, close }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
