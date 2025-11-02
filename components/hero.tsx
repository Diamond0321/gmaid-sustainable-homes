"use client"

import { ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen md:h-[600px] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/placeholder.svg?height=600&width=1400&query=luxury sustainable homes architecture)",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight text-balance">
            Gmaid Sustainable Homes
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto text-balance">
            Discover premium sustainable properties across Nigeria. Build your dream home with modern design and
            eco-friendly solutions.
          </p>
          <div className="pt-4">
            <a
              href="#properties"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Explore Properties
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
