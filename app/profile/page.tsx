"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { User, Package, Heart, Settings, Camera, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Alexandra Chen",
    email: "alexandra.chen@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Art District, New York, NY 10001",
    bio: "Art enthusiast and collector with a passion for classical sculptures and contemporary pieces.",
  })

  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 2499,
      items: [{ name: "Venus de Milo", image: "/serene-stone-buddha-statue-in-meditation-pose.png" }],
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      status: "Shipped",
      total: 3299,
      items: [{ name: "David Replica", image: "/serene-stone-buddha-statue-in-meditation-pose.png" }],
    },
  ]

  const wishlist = [
    {
      id: "1",
      name: "The Thinker",
      artist: "Auguste Rodin",
      price: 2899,
      image: "/the-thinker-bronze-statue.png",
    },
    {
      id: "2",
      name: "Winged Victory",
      artist: "Classical Greek",
      price: 3499,
      image: "/winged-victory-of-samothrace-statue.png",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">My Profile</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Wishlist
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="md:col-span-1">
                <CardContent className="p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/professional-woman-portrait.png" />
                      <AvatarFallback className="text-2xl">AC</AvatarFallback>
                    </Avatar>
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute -bottom-2 -right-2 h-8 w-8 bg-transparent"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <h2 className="text-xl font-semibold mb-1">{profile.name}</h2>
                  <p className="text-muted-foreground text-sm mb-4">Premium Member</p>
                  <Badge variant="secondary" className="mb-4">
                    Verified Collector
                  </Badge>
                  <p className="text-sm text-muted-foreground">{profile.bio}</p>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Personal Information</CardTitle>
                  <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? "Cancel" : "Edit"}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        disabled={!isEditing}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          value={profile.email}
                          disabled={!isEditing}
                          className="pl-10"
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          value={profile.phone}
                          disabled={!isEditing}
                          className="pl-10"
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="address"
                          value={profile.address}
                          disabled={!isEditing}
                          className="pl-10"
                          onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={profile.bio}
                      disabled={!isEditing}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    />
                  </div>

                  {isEditing && (
                    <div className="flex gap-2">
                      <Button onClick={() => setIsEditing(false)}>Save Changes</Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted">
                          <Image
                            src={order.items[0].image || "/placeholder.svg"}
                            alt={order.items[0].name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{order.id}</div>
                          <div className="text-sm text-muted-foreground">{order.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${order.total.toLocaleString()}</div>
                        <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>{order.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wishlist">
            <Card>
              <CardHeader>
                <CardTitle>My Wishlist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlist.map((item) => (
                    <div key={item.id} className="group relative">
                      <div className="relative aspect-square rounded-lg overflow-hidden bg-muted mb-3">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                        <Button
                          size="icon"
                          variant="outline"
                          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                        >
                          <Heart className="h-4 w-4 fill-current text-red-500" />
                        </Button>
                      </div>
                      <h3 className="font-semibold mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">by {item.artist}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary">${item.price.toLocaleString()}</span>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Email Notifications</div>
                        <div className="text-sm text-muted-foreground">Receive updates about your orders</div>
                      </div>
                      <Button variant="outline" size="sm">
                        Enable
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Marketing Emails</div>
                        <div className="text-sm text-muted-foreground">Get notified about new collections</div>
                      </div>
                      <Button variant="outline" size="sm">
                        Disable
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-4">Security</h3>
                  <div className="space-y-3">
                    <Button variant="outline">Change Password</Button>
                    <Button variant="outline">Enable Two-Factor Authentication</Button>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-4">Account</h3>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
