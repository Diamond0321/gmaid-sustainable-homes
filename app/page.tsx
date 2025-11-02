"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Properties from "@/components/properties"
import Contact from "@/components/contact"
import Chatbot from "@/components/chatbot"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else if (!savedTheme) {
      // Use system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (prefersDark) {
        setIsDark(true)
        document.documentElement.classList.add("dark")
      }
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Properties />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
