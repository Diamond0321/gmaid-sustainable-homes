"use client"

import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
                G
              </div>
              <span className="font-bold text-lg text-primary">Gmaid Homes</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Premium sustainable real estate solutions for modern living in Nigeria.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#properties"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Properties
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Nigeria</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+234701592290"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  +234 701 159 2290
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:adenijiisrael614@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 break-all"
                >
                  adenijiisrael614@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8 sm:my-12" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Gmaid Sustainable Homes LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
