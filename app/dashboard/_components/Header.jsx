"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react'; // using Lucide icons, you can change it

function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log(path);
  }, [path]);

  const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Questions", href: "/dashboard/questions" },
    { label: "Upgrade", href: "/dashboard/upgrade" },
    { label: "How it Works?", href: "/dashboard/how" },
  ];

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm relative">
      <Image src="/logo.svg" width={50} height={50} alt="Logo" />

      {/* Desktop Navigation */}
      <ul className="md:flex gap-6 hidden">
        {navItems.map((item) => (
          <li
            key={item.href}
            className={`hover:font-bold hover:text-primary transition-all cursor-pointer ${
              path === item.href ? 'font-bold text-primary' : ''
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Clerk User Button */}
      <div className="hidden md:block">
        <UserButton />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-secondary flex flex-col gap-4 p-4 md:hidden z-50 shadow-md">
          {navItems.map((item) => (
            <li
              key={item.href}
              onClick={() => setMenuOpen(false)}
              className={`hover:font-bold hover:text-primary transition-all cursor-pointer ${
                path === item.href ? 'font-bold text-primary' : ''
              }`}
            >
              {item.label}
              
            </li>
            
          ))}
                  <UserButton />

        </ul>
      )}
    </div>
  );
}

export default Header;