import Link from "next/link"
import { Clock } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Recipe {
  id: number
  title: string
  description: string
  image: string
  category: string
  prepTime: string
  cookTime: string
}

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-md">
        <div className="aspect-video w-full overflow-hidden">
          <img src={recipe.image || "/placeholder.svg"} alt={recipe.title} className="h-full w-full object-cover" />
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold">{recipe.title}</h3>
            <Badge variant="outline">{recipe.category}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{recipe.description}</p>
        </CardContent>
        <CardFooter className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>Prep: {recipe.prepTime}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>Cook: {recipe.cookTime}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
