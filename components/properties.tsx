"use client"

import { useState, useMemo } from "react"
import PropertyCard from "./property-card"
import { Search, X } from "lucide-react"

const properties = [
  {
    id: 1,
    title: "Modern Residential Complex",
    price: "₦125,000,000",
    priceValue: 125000000,
    location: "Lagos Island, Lagos",
    image: "/modern-residential-complex-sustainable.jpg",
    bedrooms: 4,
    bathrooms: 3,
    sqft: "4,500",
  },
  {
    id: 2,
    title: "Eco-Friendly Villa",
    price: "₦95,000,000",
    priceValue: 95000000,
    location: "Abuja, FCT",
    image: "/eco-friendly-villa-sustainable-architecture.jpg",
    bedrooms: 3,
    bathrooms: 2,
    sqft: "3,200",
  },
  {
    id: 3,
    title: "Luxury Penthouse",
    price: "₦250,000,000",
    priceValue: 250000000,
    location: "Ikoyi, Lagos",
    image: "/luxury-penthouse-modern-sustainable-design.jpg",
    bedrooms: 5,
    bathrooms: 4,
    sqft: "6,500",
  },
  {
    id: 4,
    title: "Urban Living Apartments",
    price: "₦45,000,000",
    priceValue: 45000000,
    location: "Victoria Island, Lagos",
    image: "/urban-apartments-sustainable-development.jpg",
    bedrooms: 2,
    bathrooms: 2,
    sqft: "2,100",
  },
  {
    id: 5,
    title: "Green Estate Development",
    price: "₦150,000,000",
    priceValue: 150000000,
    location: "Lekki, Lagos",
    image: "/green-estate-sustainable-community.jpg",
    bedrooms: 4,
    bathrooms: 3,
    sqft: "4,800",
  },
  {
    id: 6,
    title: "Smart Home Residency",
    price: "₦180,000,000",
    priceValue: 180000000,
    location: "Ajah, Lagos",
    image: "/smart-home-sustainable-technology.jpg",
    bedrooms: 4,
    bathrooms: 3,
    sqft: "5,200",
  },
]

export default function Properties() {
  const [searchLocation, setSearchLocation] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [selectedBedrooms, setSelectedBedrooms] = useState("all")
  const [selectedBathrooms, setSelectedBathrooms] = useState("all")

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const locationMatch = property.location.toLowerCase().includes(searchLocation.toLowerCase())
      const priceMin = minPrice ? Number.parseInt(minPrice) : 0
      const priceMax = maxPrice ? Number.parseInt(maxPrice) : Number.POSITIVE_INFINITY
      const priceMatch = property.priceValue >= priceMin && property.priceValue <= priceMax
      const bedroomMatch = selectedBedrooms === "all" || property.bedrooms === Number.parseInt(selectedBedrooms)
      const bathroomMatch = selectedBathrooms === "all" || property.bathrooms === Number.parseInt(selectedBathrooms)

      return locationMatch && priceMatch && bedroomMatch && bathroomMatch
    })
  }, [searchLocation, minPrice, maxPrice, selectedBedrooms, selectedBathrooms])

  const handleResetFilters = () => {
    setSearchLocation("")
    setMinPrice("")
    setMaxPrice("")
    setSelectedBedrooms("all")
    setSelectedBathrooms("all")
  }

  const hasActiveFilters =
    searchLocation || minPrice || maxPrice || selectedBedrooms !== "all" || selectedBathrooms !== "all"

  return (
    <section id="properties" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Properties</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of sustainable homes and premium residential properties
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 sm:p-8 shadow-soft mb-8 sm:mb-12 animate-fade-in-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {/* Location Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-semibold text-foreground mb-2">Location</label>
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="Search location..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                />
              </div>
            </div>

            {/* Min Price */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Min Price (₦)</label>
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full px-4 py-2.5 sm:py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
              />
            </div>

            {/* Max Price */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Max Price (₦)</label>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
              />
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Bedrooms</label>
              <select
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                className="w-full px-4 py-2.5 sm:py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
              >
                <option value="all">All</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
            </div>

            {/* Bathrooms */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Bathrooms</label>
              <select
                value={selectedBathrooms}
                onChange={(e) => setSelectedBathrooms(e.target.value)}
                className="w-full px-4 py-2.5 sm:py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
              >
                <option value="all">All</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
              </select>
            </div>

            {/* Reset Button */}
            {hasActiveFilters && (
              <div className="flex items-end">
                <button
                  onClick={handleResetFilters}
                  className="w-full flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-foreground py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200"
                >
                  <X size={18} />
                  Clear
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 sm:mb-8">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredProperties.length}</span> of{" "}
            <span className="font-semibold text-foreground">{properties.length}</span> properties
          </p>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProperties.map((property, index) => (
              <div key={property.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in-up">
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <p className="text-lg text-muted-foreground">
              No properties found matching your search criteria. Please try adjusting your filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-6 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all duration-200"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
