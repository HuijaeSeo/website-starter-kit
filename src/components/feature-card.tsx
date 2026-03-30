import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

// shadcn Card를 기반으로 해 일관된 디자인 토큰(bg-card, border-border 등)을 자동으로 적용
function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <Card className={cn("transition-shadow hover:shadow-md", className)}>
      <CardHeader>
        <div className="mb-2 flex size-10 items-center justify-center rounded-md bg-primary/10">
          <Icon className="size-5 text-primary" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent />
    </Card>
  )
}

export { FeatureCard }
export type { FeatureCardProps }
