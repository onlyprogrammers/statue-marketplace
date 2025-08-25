import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Globe, Heart, Star, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { label: "Sculptures Available", value: "2,500+", icon: Award },
    { label: "Artists Featured", value: "150+", icon: Users },
    { label: "Countries Shipped", value: "45+", icon: Globe },
    { label: "Happy Customers", value: "10,000+", icon: Heart },
  ]

  const values = [
    {
      title: "Artistic Excellence",
      description: "We curate only the finest sculptures from master artisans and emerging talents worldwide.",
      icon: Star,
    },
    {
      title: "Quality Assurance",
      description: "Every piece undergoes rigorous quality checks to ensure it meets our exacting standards.",
      icon: CheckCircle,
    },
    {
      title: "Cultural Heritage",
      description: "We preserve and celebrate the rich tradition of sculptural art across cultures and eras.",
      icon: Globe,
    },
    {
      title: "Customer Care",
      description: "Our dedicated team provides personalized service to help you find the perfect piece.",
      icon: Heart,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4">About StatueArt</Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Bringing Timeless Art to Your World</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            For over a decade, StatueArt has been the premier destination for sculpture enthusiasts, collectors, and art
            lovers seeking exceptional pieces that inspire and endure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/gallery">Explore Gallery</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/artists">Meet Our Artists</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2014 by art historian Dr. Elena Vasquez and sculptor Marcus Chen, StatueArt began as a
                  small gallery in Florence, Italy. Our passion for sculptural art and commitment to supporting artists
                  led us to create a platform where exceptional sculptures could find their way to appreciative
                  collectors worldwide.
                </p>
                <p>
                  Today, we work with over 150 artists from 30 countries, offering everything from classical
                  reproductions to cutting-edge contemporary pieces. Our team of art experts carefully curates each
                  collection, ensuring that every sculpture meets our standards for artistic merit, craftsmanship, and
                  authenticity.
                </p>
                <p>
                  We believe that great art should be accessible, which is why we offer pieces at various price points
                  and provide detailed information about each artist and their techniques. Our mission is to connect
                  people with art that moves them and enriches their lives.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/about-story-image.png"
                alt="StatueArt founders in their Florence gallery"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from selecting artists to serving customers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 mx-auto">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind StatueArt's success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src="/team-elena-vasquez.png" alt="Dr. Elena Vasquez" fill className="object-cover" />
                </div>
                <h3 className="font-bold mb-1">Dr. Elena Vasquez</h3>
                <p className="text-sm text-muted-foreground mb-2">Co-Founder & Art Director</p>
                <p className="text-xs text-muted-foreground">
                  Art historian with 20+ years experience in Renaissance and Classical sculpture.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src="/team-marcus-chen.png" alt="Marcus Chen" fill className="object-cover" />
                </div>
                <h3 className="font-bold mb-1">Marcus Chen</h3>
                <p className="text-sm text-muted-foreground mb-2">Co-Founder & Master Sculptor</p>
                <p className="text-xs text-muted-foreground">
                  Award-winning sculptor specializing in contemporary interpretations of classical forms.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src="/team-sarah-williams.png" alt="Sarah Williams" fill className="object-cover" />
                </div>
                <h3 className="font-bold mb-1">Sarah Williams</h3>
                <p className="text-sm text-muted-foreground mb-2">Curator & Artist Relations</p>
                <p className="text-xs text-muted-foreground">
                  Connects with artists worldwide to bring diverse sculptural voices to our platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Start Your Collection?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover exceptional sculptures that will inspire and enrich your space for generations to come.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/gallery">Browse Gallery</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/collections">View Collections</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
