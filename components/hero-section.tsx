"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { StatueSlider3D } from "./statue-slider-3d"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Background 3D Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto mb-8">
          <StatueSlider3D />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/gallery">
              Explore Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-2xl md:text-3xl font-heading font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Unique Statues</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-heading font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Renowned Artists</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-heading font-bold text-primary">25+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-heading font-bold text-primary">10k+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  )
}
