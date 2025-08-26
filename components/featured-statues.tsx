"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, ShoppingCart, ArrowRight } from "lucide-react"
import Link from "next/link"

const featuredStatues = [
  {
    id: 1,
    title: "Venus de Milo Replica",
    artist: "Classical Collection",
    price: 2499,
    originalPrice: 2999,
    image: "/serene-stone-buddha-statue-in-meditation-pose.png",
    material: "Marble",
    height: "180cm",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Modern Abstract Form",
    artist: "Elena Rodriguez",
    price: 1899,
    image: "/modern-abstract-bronze-sculpture-flowing-curves.png",
    material: "Bronze",
    height: "120cm",
    isNew: false,
    isFeatured: true,
  },
  {
    id: 3,
    title: "Guardian Lion",
    artist: "Zhang Wei",
    price: 3299,
    image: "/majestic-stone-lion-statue-traditional-chinese-sty.png",
    material: "Stone",
    height: "150cm",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 4,
    title: "Dancing Ballerina",
    artist: "Marie Dubois",
    price: 1599,
    originalPrice: 1899,
    image: "/graceful-bronze-ballerina-statue-in-dancing-pose.png",
    material: "Bronze",
    height: "90cm",
    isNew: false,
    isFeatured: true,
  },
  {
    id: 5,
    title: "Ancient Warrior",
    artist: "Historical Replicas",
    price: 2799,
    image: "/detailed-bronze-ancient-roman-warrior-statue-with-.png",
    material: "Bronze",
    height: "200cm",
    isNew: false,
    isFeatured: true,
  },
  {
    id: 6,
    title: "Peaceful Buddha",
    artist: "Meditation Arts",
    price: 1299,
    image: "/serene-stone-buddha-statue-in-meditation-pose.png",
    material: "Stone",
    height: "100cm",
    isNew: true,
    isFeatured: true,
  },
]

export function FeaturedStatues() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Masterpieces</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of extraordinary statues from renowned artists worldwide
          </p>
        </div>

        {/* Statues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStatues.map((statue) => (
            <Card
              key={statue.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card"
              onMouseEnter={() => setHoveredId(statue.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={statue.image || "/placeholder.svg"}
                  alt={statue.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                    hoveredId === statue.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center space-x-4">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {statue.isNew && <Badge className="bg-secondary text-secondary-foreground">New</Badge>}
                  {statue.originalPrice && <Badge variant="destructive">Sale</Badge>}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-2">
                  <h3 className="font-heading text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {statue.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">by {statue.artist}</p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{statue.material}</span>
                    <span>•</span>
                    <span>{statue.height}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-heading font-bold text-primary">
                      ${statue.price.toLocaleString()}
                    </span>
                    {statue.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${statue.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <Button asChild size="sm">
                    <Link href={`/statue/${statue.id}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/gallery">
              View All Statues
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
