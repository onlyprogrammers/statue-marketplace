"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Heart, Eye, ShoppingCart, Filter, Grid, List } from "lucide-react"
import Link from "next/link"

const allStatues = [
  {
    id: 1,
    title: "Venus de Milo Replica",
    artist: "Classical Collection",
    price: 2499,
    originalPrice: 2999,
    image: "/elegant-white-marble-venus-de-milo-statue.png",
    material: "Marble",
    height: "180cm",
    category: "Classical",
    isNew: true,
  },
  {
    id: 2,
    title: "Modern Abstract Form",
    artist: "Elena Rodriguez",
    price: 1899,
    image: "/modern-abstract-bronze-sculpture-flowing-curves.png",
    material: "Bronze",
    height: "120cm",
    category: "Modern",
    isNew: false,
  },
  {
    id: 3,
    title: "Guardian Lion",
    artist: "Zhang Wei",
    price: 3299,
    image: "/majestic-stone-lion-statue-traditional-chinese-sty.png",
    material: "Stone",
    height: "150cm",
    category: "Traditional",
    isNew: true,
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
    category: "Contemporary",
    isNew: false,
  },
  {
    id: 5,
    title: "Ancient Warrior",
    artist: "Historical Replicas",
    price: 2799,
    image: "/detailed-bronze-ancient-roman-warrior-statue-with-.png",
    material: "Bronze",
    height: "200cm",
    category: "Historical",
    isNew: false,
  },
  {
    id: 6,
    title: "Peaceful Buddha",
    artist: "Meditation Arts",
    price: 1299,
    image: "/serene-stone-buddha-statue-in-meditation-pose.png",
    material: "Stone",
    height: "100cm",
    category: "Spiritual",
    isNew: true,
  },
  {
    id: 7,
    title: "Art Deco Lady",
    artist: "Vintage Reproductions",
    price: 2199,
    image: "/elegant-art-deco-bronze-lady-statue-1920s-style.png",
    material: "Bronze",
    height: "140cm",
    category: "Art Deco",
    isNew: false,
  },
  {
    id: 8,
    title: "Wild Horse",
    artist: "Nature Sculptures",
    price: 3599,
    image: "/dynamic-bronze-wild-horse-statue-in-galloping-pose.png",
    material: "Bronze",
    height: "160cm",
    category: "Nature",
    isNew: true,
  },
]

export default function GalleryPage() {
  const [filteredStatues, setFilteredStatues] = useState(allStatues)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedMaterial, setSelectedMaterial] = useState<string>("all")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const applyFilters = () => {
    let filtered = allStatues

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (statue) =>
          statue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          statue.artist.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Price filter
    filtered = filtered.filter((statue) => statue.price >= priceRange[0] && statue.price <= priceRange[1])

    // Material filter
    if (selectedMaterial !== "all") {
      filtered = filtered.filter((statue) => statue.material === selectedMaterial)
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((statue) => statue.category === selectedCategory)
    }

    setFilteredStatues(filtered)
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Statue Gallery</h1>
          <p className="text-lg text-muted-foreground">Explore our complete collection of premium statues</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="h-5 w-5" />
                  <h3 className="font-heading text-lg font-semibold">Filters</h3>
                </div>

                {/* Search */}
                <div className="space-y-2 mb-6">
                  <Label htmlFor="search">Search</Label>
                  <Input
                    id="search"
                    placeholder="Search statues or artists..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Price Range */}
                <div className="space-y-2 mb-6">
                  <Label>Price Range</Label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={5000}
                    min={0}
                    step={100}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Material */}
                <div className="space-y-2 mb-6">
                  <Label>Material</Label>
                  <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                    <SelectTrigger>
                      <SelectValue placeholder="All materials" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All materials</SelectItem>
                      <SelectItem value="marble">Marble</SelectItem>
                      <SelectItem value="bronze">Bronze</SelectItem>
                      <SelectItem value="stone">Stone</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Category */}
                <div className="space-y-2 mb-6">
                  <Label>Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All categories</SelectItem>
                      <SelectItem value="classical">Classical</SelectItem>
                      <SelectItem value="modern">Modern</SelectItem>
                      <SelectItem value="traditional">Traditional</SelectItem>
                      <SelectItem value="contemporary">Contemporary</SelectItem>
                      <SelectItem value="historical">Historical</SelectItem>
                      <SelectItem value="spiritual">Spiritual</SelectItem>
                      <SelectItem value="art deco">Art Deco</SelectItem>
                      <SelectItem value="nature">Nature</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={applyFilters} className="w-full">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* View Controls */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {filteredStatues.length} of {allStatues.length} statues
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Statues Grid/List */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {filteredStatues.map((statue) => (
                <Card key={statue.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={viewMode === "list" ? "flex" : ""}>
                    <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                      <img
                        src={statue.image || "/placeholder.svg"}
                        alt={statue.title}
                        className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                          viewMode === "list" ? "w-full h-48" : "w-full h-64"
                        }`}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        {statue.isNew && <Badge className="bg-secondary text-secondary-foreground text-xs">New</Badge>}
                        {statue.originalPrice && (
                          <Badge variant="destructive" className="text-xs">
                            Sale
                          </Badge>
                        )}
                      </div>
                    </div>

                    <CardContent className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className="mb-2">
                        <h3 className="font-heading text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                          {statue.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">by {statue.artist}</p>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                          <span>{statue.material}</span>
                          <span>•</span>
                          <span>{statue.height}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {statue.category}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-heading font-bold text-primary">
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
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
