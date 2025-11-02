"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

interface Message {
  id: string
  type: "user" | "bot"
  text: string
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Hello! Welcome to Gmaid Sustainable Homes. How can we help you today?",
    },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickReplies = [
    { id: "view-houses", text: "View houses", icon: "🏠" },
    { id: "view-lands", text: "View lands", icon: "🏞️" },
    { id: "contact-agent", text: "Contact agent", icon: "📞" },
    { id: "about-company", text: "About company", icon: "ℹ️" },
  ]

  const handleQuickReply = (replyId: string, replyText: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: replyText,
    }
    setMessages((prev) => [...prev, userMessage])

    // Simulate bot response based on reply
    setTimeout(() => {
      let botResponse = ""
      switch (replyId) {
        case "view-houses":
          botResponse =
            "Check out our premium residential properties at Gmaid Sustainable Homes. You can scroll through our properties section or contact us for more details!"
          break
        case "view-lands":
          botResponse =
            "We have excellent land parcels available in prime locations across Nigeria. Please contact our team to discuss your specific requirements."
          break
        case "contact-agent":
          botResponse =
            "You can reach our team via WhatsApp at +234 701 159 2290 or email us at adenijiisrael614@gmail.com. We're happy to help!"
          break
        case "about-company":
          botResponse =
            "Gmaid Sustainable Homes is a leading real estate company in Nigeria specializing in premium, sustainable properties. We focus on eco-friendly design and modern living solutions."
          break
        default:
          botResponse = "Thank you for your interest! How else can we assist you?"
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: botResponse,
      }
      setMessages((prev) => [...prev, botMessage])
    }, 500)
  }

  return (
    <>
      {/* Chat Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40 ${
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90"
        }`}
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white animate-pulse-soft" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-16 sm:bottom-20 right-4 sm:right-6 w-80 sm:w-96 bg-card rounded-lg shadow-2xl flex flex-col max-h-96 sm:max-h-[500px] z-40 animate-fade-in-up border border-border">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <h3 className="font-semibold text-lg">Gmaid Support</h3>
            <p className="text-sm opacity-90">We typically reply instantly</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="border-t border-border p-4 space-y-2 max-h-48 overflow-y-auto">
            {quickReplies.map((reply) => (
              <button
                key={reply.id}
                onClick={() => handleQuickReply(reply.id, reply.text)}
                className="w-full text-left px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {reply.icon} {reply.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
