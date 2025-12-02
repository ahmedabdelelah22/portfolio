"use client"
import React, { useEffect, useState } from 'react';
import ThemeToggler from './ThemeToggler';
import Logo from './Logo';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${isScrolled ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'} 
    sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="flex items-center gap-x-6">
            {/* Desktop Nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
              currentPath={pathname} // optional if you want active link styling
            />

            {/* Theme Toggler */}
            <ThemeToggler />

            {/* Mobile Nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
