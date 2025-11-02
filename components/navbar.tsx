"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Moon, Sun } from "lucide-react"

export default function Navbar({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3 animate-slide-in-left hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
              <Image
                src="/gmaid-logo.jpeg"
                alt="Gmaid Sustainable Homes Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-primary leading-none">Gmaid</div>
              <div className="text-xs font-semibold text-muted-foreground tracking-wide">SUSTAINABLE HOMES</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-foreground hover:text-primary transition-colors duration-200">
              Home
            </Link>
            <Link href="#properties" className="text-foreground hover:text-primary transition-colors duration-200">
              Properties
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-up">
            <Link
              href="#home"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#properties"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
