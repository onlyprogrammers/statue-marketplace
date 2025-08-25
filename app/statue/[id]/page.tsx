"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { StatueViewer3D } from "@/components/statue-viewer-3d"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Share2, ShoppingCart, Star, Truck, Shield, RotateCcw } from "lucide-react"

// Mock data - in a real app, this would come from an API
const statueData = {
  id: 1,
  title: "Venus de Milo Replica",
  artist: "Classical Collection",
  price: 2499,
  originalPrice: 2999,
  images: ["/elegant-white-marble-venus-de-milo-statue-front-vi.png", "/elegant-white-marble-venus-de-milo-statue-side-vie.png", "/elegant-white-marble-venus-de-milo-statue-back-vie.png"],
  material: "Carrara Marble",
  height: "180cm",
  width: "65cm",
  depth: "45cm",
  weight: "850kg",
  category: "Classical",
  isNew: true,
  inStock: true,
  rating: 4.8,
  reviews: 24,
  description:
    "This exquisite replica of the famous Venus de Milo captures the timeless beauty and grace of the original masterpiece. Crafted from premium Carrara marble by skilled artisans, this statue embodies the classical ideals of beauty and proportion that have inspired artists for centuries.",
  features: [
    "Hand-carved from premium Carrara marble",
    "Museum-quality reproduction",
    "Weather-resistant finish",
    "Certificate of authenticity included",
    "Professional installation available",
  ],
  specifications: {
    Material: "Carrara Marble",
    Dimensions: "180cm H × 65cm W × 45cm D",
    Weight: "850kg",
    Origin: "Italy",
    Finish: "Polished marble with protective coating",
    Installation: "Professional installation recommended",
  },
}

export default function StatueDetailPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images and 3D Viewer */}
          <div className="space-y-6">
            {/* 3D Viewer */}
            <div className="aspect-square">
              <StatueViewer3D className="w-full h-full" />
            </div>

            {/* Image Thumbnails */}
            <div className="flex space-x-4 overflow-x-auto">
              {statueData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-border"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${statueData.title} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {statueData.isNew && <Badge className="bg-secondary text-secondary-foreground">New</Badge>}
                {statueData.originalPrice && <Badge variant="destructive">Sale</Badge>}
                <Badge variant="outline">{statueData.category}</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">{statueData.title}</h1>

              <p className="text-lg text-muted-foreground mb-4">by {statueData.artist}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(statueData.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {statueData.rating} ({statueData.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-heading font-bold text-primary">
                  ${statueData.price.toLocaleString()}
                </span>
                {statueData.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${statueData.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="font-semibold">{statueData.material}</div>
                <div className="text-sm text-muted-foreground">Material</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="font-semibold">{statueData.height}</div>
                <div className="text-sm text-muted-foreground">Height</div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Shipping Info */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Truck className="h-4 w-4" />
                  <span>Free shipping</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  <span>Authenticity guaranteed</span>
                </div>
                <div className="flex items-center gap-1">
                  <RotateCcw className="h-4 w-4" />
                  <span>30-day returns</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{statueData.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    {statueData.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="specifications">
                <div className="space-y-3">
                  {Object.entries(statueData.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="space-y-4">
                  <div className="text-center py-8 text-muted-foreground">
                    <Star className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                    <p>Reviews coming soon</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
