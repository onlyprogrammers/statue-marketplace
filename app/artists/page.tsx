"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MapPin, Calendar, Award, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Artist {
  id: string
  name: string
  bio: string
  location: string
  established: string
  specialties: string[]
  featuredWork: {
    name: string
    image: string
    price: number
  }
  avatar: string
  verified: boolean
  totalWorks: number
}

export default function ArtistsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null)

  const artists: Artist[] = [
    {
      id: "1",
      name: "Elena Marquez",
      bio: "Contemporary sculptor specializing in marble and bronze works inspired by classical Greek and Roman art.",
      location: "Florence, Italy",
      established: "2010",
      specialties: ["Marble", "Bronze", "Classical"],
      featuredWork: {
        name: "Modern Venus",
        image: "/modern-venus-marble-sculpture.png",
        price: 4299,
      },
      avatar: "/elena-marquez-artist-portrait.png",
      verified: true,
      totalWorks: 47,
    },
    {
      id: "2",
      name: "Marcus Chen",
      bio: "Master craftsman creating contemporary interpretations of ancient sculptures with modern techniques.",
      location: "New York, USA",
      established: "2008",
      specialties: ["Contemporary", "Mixed Media", "Abstract"],
      featuredWork: {
        name: "Urban Thinker",
        image: "/urban-thinker-contemporary-sculpture.png",
        price: 3899,
      },
      avatar: "/marcus-chen-artist-portrait.png",
      verified: true,
      totalWorks: 32,
    },
    {
      id: "3",
      name: "Isabella Romano",
      bio: "Traditional sculptor preserving ancient techniques while creating timeless pieces for modern collectors.",
      location: "Rome, Italy",
      established: "2005",
      specialties: ["Traditional", "Stone", "Religious"],
      featuredWork: {
        name: "Sacred Guardian",
        image: "/sacred-guardian-stone-sculpture.png",
        price: 5299,
      },
      avatar: "/isabella-romano-artist-portrait.png",
      verified: true,
      totalWorks: 63,
    },
    {
      id: "4",
      name: "David Thompson",
      bio: "Emerging artist combining 3D printing technology with traditional sculpting methods.",
      location: "London, UK",
      established: "2018",
      specialties: ["3D Printed", "Modern", "Experimental"],
      featuredWork: {
        name: "Digital Dreams",
        image: "/digital-dreams-3d-printed-sculpture.png",
        price: 2199,
      },
      avatar: "/david-thompson-artist-portrait.png",
      verified: false,
      totalWorks: 18,
    },
  ]

  const allSpecialties = Array.from(new Set(artists.flatMap((artist) => artist.specialties)))

  const filteredArtists = artists.filter((artist) => {
    const matchesSearch =
      artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.bio.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = !selectedSpecialty || artist.specialties.includes(selectedSpecialty)
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">Featured Artists</h1>
          <p className="text-muted-foreground">Discover talented sculptors from around the world</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search artists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedSpecialty === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSpecialty(null)}
            >
              All Specialties
            </Button>
            {allSpecialties.map((specialty) => (
              <Button
                key={specialty}
                variant={selectedSpecialty === specialty ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSpecialty(specialty)}
              >
                {specialty}
              </Button>
            ))}
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtists.map((artist) => (
            <Card key={artist.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={artist.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {artist.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle className="text-lg">{artist.name}</CardTitle>
                      {artist.verified && (
                        <Badge variant="secondary" className="text-xs">
                          <Award className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <MapPin className="h-3 w-3 mr-1" />
                      {artist.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      Est. {artist.established}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">{artist.bio}</p>

                <div className="flex flex-wrap gap-1">
                  {artist.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                {/* Featured Work */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Featured Work</h4>
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={artist.featuredWork.image || "/placeholder.svg"}
                      alt={artist.featuredWork.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm">{artist.featuredWork.name}</div>
                      <div className="text-primary font-bold">${artist.featuredWork.price.toLocaleString()}</div>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="text-sm text-muted-foreground">{artist.totalWorks} works</span>
                  <Button asChild size="sm">
                    <Link href={`/artists/${artist.id}`}>
                      View Profile
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No artists found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
