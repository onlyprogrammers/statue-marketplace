"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Users, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Collection {
  id: string
  name: string
  description: string
  curator: string
  theme: string
  itemCount: number
  createdDate: string
  featured: boolean
  coverImage: string
  previewImages: string[]
  tags: string[]
}

export default function CollectionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null)

  const collections: Collection[] = [
    {
      id: "1",
      name: "Classical Masterpieces",
      description:
        "A curated selection of the most iconic classical sculptures, featuring timeless pieces that have inspired artists for centuries.",
      curator: "Dr. Sarah Williams",
      theme: "Classical",
      itemCount: 24,
      createdDate: "2024-01-15",
      featured: true,
      coverImage: "/classical-masterpieces-collection.png",
      previewImages: ["/venus-de-milo-preview.png", "/david-preview.png", "/apollo-belvedere-preview.png"],
      tags: ["Greek", "Roman", "Marble", "Historical"],
    },
    {
      id: "2",
      name: "Modern Interpretations",
      description: "Contemporary artists reimagining classical forms with modern techniques and materials.",
      curator: "Marcus Chen",
      theme: "Contemporary",
      itemCount: 18,
      createdDate: "2024-01-10",
      featured: true,
      coverImage: "/modern-interpretations-collection.png",
      previewImages: ["/modern-venus-preview.png", "/abstract-thinker-preview.png", "/contemporary-david-preview.png"],
      tags: ["Contemporary", "Abstract", "Mixed Media", "Innovation"],
    },
    {
      id: "3",
      name: "Renaissance Revival",
      description:
        "Sculptures inspired by the Renaissance period, showcasing the perfect blend of classical beauty and humanistic ideals.",
      curator: "Isabella Romano",
      theme: "Renaissance",
      itemCount: 31,
      createdDate: "2024-01-05",
      featured: false,
      coverImage: "/renaissance-revival-collection.png",
      previewImages: ["/renaissance-angel-preview.png", "/medici-venus-preview.png", "/pieta-replica-preview.png"],
      tags: ["Renaissance", "Religious", "Marble", "Italian"],
    },
    {
      id: "4",
      name: "Mythological Beings",
      description:
        "Statues depicting gods, goddesses, and mythological creatures from various cultures around the world.",
      curator: "Elena Marquez",
      theme: "Mythology",
      itemCount: 27,
      createdDate: "2023-12-20",
      featured: false,
      coverImage: "/mythological-beings-collection.png",
      previewImages: ["/athena-statue-preview.png", "/poseidon-sculpture-preview.png", "/apollo-statue-preview.png"],
      tags: ["Mythology", "Gods", "Bronze", "Ancient"],
    },
    {
      id: "5",
      name: "Minimalist Forms",
      description: "Clean, simple sculptures that focus on form, space, and the essence of sculptural art.",
      curator: "David Thompson",
      theme: "Minimalist",
      itemCount: 15,
      createdDate: "2023-12-15",
      featured: false,
      coverImage: "/minimalist-forms-collection.png",
      previewImages: ["/geometric-form-preview.png", "/abstract-curve-preview.png", "/minimal-figure-preview.png"],
      tags: ["Minimalist", "Abstract", "Modern", "Geometric"],
    },
  ]

  const allThemes = Array.from(new Set(collections.map((collection) => collection.theme)))

  const filteredCollections = collections.filter((collection) => {
    const matchesSearch =
      collection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      collection.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      collection.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesTheme = !selectedTheme || collection.theme === selectedTheme
    return matchesSearch && matchesTheme
  })

  const featuredCollections = filteredCollections.filter((c) => c.featured)
  const regularCollections = filteredCollections.filter((c) => !c.featured)

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">Curated Collections</h1>
          <p className="text-muted-foreground">Explore carefully curated collections of exceptional sculptures</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search collections..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedTheme === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTheme(null)}
            >
              All Themes
            </Button>
            {allThemes.map((theme) => (
              <Button
                key={theme}
                variant={selectedTheme === theme ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTheme(theme)}
              >
                {theme}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Collections */}
        {featuredCollections.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-6">Featured Collections</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredCollections.map((collection) => (
                <Card key={collection.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={collection.coverImage || "/placeholder.svg"}
                      alt={collection.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge className="mb-2">Featured</Badge>
                      <h3 className="text-xl font-bold mb-1">{collection.name}</h3>
                      <p className="text-sm opacity-90">{collection.itemCount} pieces</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 line-clamp-2">{collection.description}</p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {collection.curator}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(collection.createdDate).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {collection.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {collection.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{collection.tags.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <Button asChild className="w-full">
                      <Link href={`/collections/${collection.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Collection
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Collections */}
        {regularCollections.length > 0 && (
          <div>
            <h2 className="text-2xl font-heading font-bold mb-6">All Collections</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularCollections.map((collection) => (
                <Card key={collection.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={collection.coverImage || "/placeholder.svg"}
                      alt={collection.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg line-clamp-1">{collection.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {collection.theme}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{collection.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>{collection.itemCount} pieces</span>
                      <span>by {collection.curator}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {collection.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {collection.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{collection.tags.length - 2}
                        </Badge>
                      )}
                    </div>

                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={`/collections/${collection.id}`}>View Collection</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {filteredCollections.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No collections found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
