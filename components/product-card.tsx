import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from 'lucide-react'
import Image from "next/image"

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: string
    image: string
    features: string[]
    badge: string | null
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden bg-secondary/20">
        {product.badge && (
          <Badge className="absolute left-4 top-4 z-10 bg-primary text-primary-foreground">
            {product.badge}
          </Badge>
        )}
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
        
        
        <ul className="mb-6 space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Button className="w-full">Add to Cart</Button>
      </div>
    </Card>
  )
}
