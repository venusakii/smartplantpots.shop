import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"
import { FeatureCard } from "@/components/feature-card"
import { Leaf, Droplets, Bell, Smartphone, Zap, Shield } from 'lucide-react'

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Smart Pot Pro",
      price: "$129",
      image: "/modern-smart-plant-pot-with-sensors-and-led-displa.jpg",
      features: ["Auto-watering", "Soil monitoring", "App control"],
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Eco Smart Mini",
      price: "$79",
      image: "/compact-smart-plant-pot-with-minimalist-design.jpg",
      features: ["Water sensor", "Light indicator", "Compact design"],
      badge: null
    },
    {
      id: 3,
      name: "Garden Hub Max",
      price: "$199",
      image: "/large-premium-smart-plant-pot-with-digital-screen.jpg",
      features: ["Multi-plant system", "Weather sync", "Voice control"],
      badge: "Premium"
    },
    {
      id: 4,
      name: "Urban Sprout",
      price: "$99",
      image: "/stylish-ceramic-smart-plant-pot-for-home.jpg",
      features: ["Self-watering", "Growth tracking", "Stylish design"],
      badge: null
    }
  ]

  const features = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Auto-Watering System",
      description: "Intelligent watering based on soil moisture and plant needs. Never over or under-water again."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Smart App Control",
      description: "Monitor and control your plants from anywhere. Get real-time updates on your phone."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Instant Notifications",
      description: "Receive alerts when your plants need attention. Stay connected to your green friends."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Growth Analytics",
      description: "Track your plant's growth with detailed analytics and personalized care recommendations."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Energy Efficient",
      description: "Long-lasting battery life with solar charging option. Eco-friendly technology."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Weather Protection",
      description: "Automatic adjustments based on weather conditions to keep your plants thriving."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
        <div className="absolute inset-0 bg-[url('/subtle-botanical-pattern-background.jpg')] opacity-5" />
        
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20" variant="outline">
              <Leaf className="mr-2 h-3 w-3" />
              Smart Plant Care Technology
            </Badge>
            
            <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Never Kill a Plant Again
            </h1>
            
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              Smart Plant Pots with AI-powered care. Automated watering, real-time monitoring, 
              and personalized recommendations to keep your plants thriving effortlessly.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="text-lg">
                Shop Smart Pots
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-y border-border py-8">
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Survival Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Plant Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
              Our Smart Plant Pots
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              Choose the perfect smart pot for your green companion. 
              All models feature advanced sensors and intelligent care systems.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
              Technology Meets Nature
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              Advanced features designed to make plant care effortless and enjoyable.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
              Simple Setup, Smarter Care
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mb-2 text-xl font-bold">Plant & Connect</h3>
              <p className="text-muted-foreground">
                Place your plant in the smart pot and connect to the app via Bluetooth in seconds.
              </p>
            </Card>

            <Card className="border-2 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mb-2 text-xl font-bold">Set Preferences</h3>
              <p className="text-muted-foreground">
                Tell us about your plant type and the pot automatically adjusts care settings.
              </p>
            </Card>

            <Card className="border-2 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold">Relax & Watch Grow</h3>
              <p className="text-muted-foreground">
                Your smart pot handles watering, monitoring, and alerts. You just enjoy healthy plants!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
            Ready to Transform Your Plant Care?
          </h2>
          <p className="mb-8 text-pretty text-lg opacity-90 md:text-xl">
            Join thousands of happy plant parents using Smart Plant Pots
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Smart Plant Pots</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Making plant care intelligent and effortless since 2024.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-bold">Products</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Smart Pot Pro</li>
                <li>Eco Smart Mini</li>
                <li>Garden Hub Max</li>
                <li>Urban Sprout</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-bold">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Setup Guide</li>
                <li>App Download</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-bold">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            © 2025 Smart Plant Pots. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
