"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email via mailto link
      const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
      const encodedBody = encodeURIComponent(emailBody)
      window.location.href = `mailto:adenijiisrael614@gmail.com?subject=Property Inquiry from ${formData.name}&body=${encodedBody}`

      setSubmitMessage("Email client opened. Please send the message.")
      setFormData({ name: "", email: "", phone: "", message: "" })
      setTimeout(() => setSubmitMessage(""), 5000)
    } catch (error) {
      setSubmitMessage("Error sending message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppContact = () => {
    const message = "Hi, I'd like to get more information about your properties."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/234701592290?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">Nigeria</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+234 701 159 2290</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">adenijiisrael614@gmail.com</p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppContact}
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba58] text-white py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-soft hover:shadow-md mt-6"
              >
                <MessageCircle size={20} />
                Message on WhatsApp
              </button>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 animate-fade-in-up">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  placeholder="+234 XXX XXXX XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-soft hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitMessage && <p className="text-sm text-center text-primary font-medium mt-4">{submitMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
