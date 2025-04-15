import Link from "next/link"
import { PlusCircle, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RecipeCard } from "@/components/recipe-card"
import { BirthdayBanner } from "@/components/birthday-banner"

// Sample recipe data
const recipes = [
  {
    id: 1,
    title: "Chocolate Cake",
    description: "A rich and moist chocolate cake perfect for celebrations.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Dessert",
    prepTime: "20 mins",
    cookTime: "35 mins",
  },
  {
    id: 2,
    title: "Pasta Primavera",
    description: "Light pasta dish loaded with spring vegetables.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Main Course",
    prepTime: "15 mins",
    cookTime: "20 mins",
  },
  {
    id: 3,
    title: "Chicken Soup",
    description: "Comforting homemade chicken soup with vegetables.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Soup",
    prepTime: "10 mins",
    cookTime: "45 mins",
  },
]

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-6">
      <BirthdayBanner date="April 20th" />

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">Mom's Recipe Collection</h1>
        <div className="flex gap-2">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search recipes..." className="pl-8" />
          </div>
          <Link href="/recipes/new">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Recipe
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  )
}
