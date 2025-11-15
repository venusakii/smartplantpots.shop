import { Card } from "@/components/ui/card"
import { ReactNode } from "react"

interface FeatureCardProps {
  feature: {
    icon: ReactNode
    title: string
    description: string
  }
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Card className="p-8 transition-all hover:shadow-lg">
      <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
        {feature.icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </Card>
  )
}
