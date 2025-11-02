"use client"
import { MessageCircle, Bed, Bath, Square } from "lucide-react"

interface Property {
  id: number
  title: string
  price: string
  priceValue: number
  location: string
  image: string
  bedrooms: number
  bathrooms: number
  sqft: string
}

export default function PropertyCard({ property }: { property: Property }) {
  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${property.title} at ${property.location}. Price: ${property.price}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/234701592290?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Image Container */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-muted">
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-primary text-primary-foreground px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-semibold">
          {property.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 line-clamp-2">{property.title}</h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-4">{property.location}</p>

        {/* Property Features */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 pb-6 border-b border-border">
          <div className="flex flex-col items-center gap-1">
            <Bed size={16} className="text-primary" />
            <span className="text-xs sm:text-sm text-muted-foreground">{property.bedrooms} Beds</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Bath size={16} className="text-primary" />
            <span className="text-xs sm:text-sm text-muted-foreground">{property.bathrooms} Baths</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Square size={16} className="text-primary" />
            <span className="text-xs sm:text-sm text-muted-foreground">{property.sqft} sqft</span>
          </div>
        </div>

        {/* Contact Button */}
        <button
          onClick={handleWhatsApp}
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-soft hover:shadow-md"
        >
          <MessageCircle size={18} />
          Contact Agent
        </button>
      </div>
    </div>
  )
}
