"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, Edit, Heart, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Sample recipe data - in a real app, this would come from a database
const recipeData = {
  1: {
    id: 1,
    title: "Chocolate Cake",
    description: "A rich and moist chocolate cake perfect for celebrations.",
    image: "/placeholder.svg?height=400&width=800",
    category: "Dessert",
    prepTime: "20 mins",
    cookTime: "35 mins",
    servings: 8,
    ingredients: [
      "2 cups all-purpose flour",
      "2 cups sugar",
      "3/4 cup unsweetened cocoa powder",
      "2 teaspoons baking soda",
      "1 teaspoon baking powder",
      "1 teaspoon salt",
      "2 eggs",
      "1 cup buttermilk",
      "1/2 cup vegetable oil",
      "2 teaspoons vanilla extract",
      "1 cup hot coffee",
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.",
      "In a large bowl, combine flour, sugar, cocoa, baking soda, baking powder, and salt.",
      "Add eggs, buttermilk, oil, and vanilla; beat for 2 minutes on medium speed.",
      "Stir in hot coffee (batter will be thin). Pour into prepared pans.",
      "Bake for 30-35 minutes or until a toothpick inserted in center comes out clean.",
      "Cool in pans for 10 minutes; remove to wire racks to cool completely.",
    ],
    notes: "For an extra special touch, frost with chocolate ganache or buttercream frosting.",
  },
  2: {
    id: 2,
    title: "Pasta Primavera",
    description: "Light pasta dish loaded with spring vegetables.",
    image: "/placeholder.svg?height=400&width=800",
    category: "Main Course",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: 4,
    ingredients: [
      "8 oz pasta of choice",
      "2 tbsp olive oil",
      "1 small onion, diced",
      "2 cloves garlic, minced",
      "1 red bell pepper, sliced",
      "1 yellow squash, sliced",
      "1 zucchini, sliced",
      "1 cup cherry tomatoes, halved",
      "1/4 cup grated Parmesan cheese",
      "Fresh basil leaves",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Cook pasta according to package directions. Drain and set aside.",
      "In a large skillet, heat olive oil over medium heat.",
      "Add onion and garlic, sauté until fragrant, about 2 minutes.",
      "Add bell pepper, squash, and zucchini. Cook until vegetables are tender-crisp, about 5-7 minutes.",
      "Add cherry tomatoes and cook for another 2 minutes.",
      "Toss the cooked pasta with the vegetables.",
      "Season with salt and pepper to taste.",
      "Garnish with Parmesan cheese and fresh basil before serving.",
    ],
    notes: "You can add grilled chicken or shrimp for extra protein.",
  },
  3: {
    id: 3,
    title: "Chicken Soup",
    description: "Comforting homemade chicken soup with vegetables.",
    image: "/placeholder.svg?height=400&width=800",
    category: "Soup",
    prepTime: "10 mins",
    cookTime: "45 mins",
    servings: 6,
    ingredients: [
      "1 whole chicken (about 4 lbs)",
      "2 carrots, chopped",
      "2 celery stalks, chopped",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "2 bay leaves",
      "1 tsp dried thyme",
      "8 cups chicken broth",
      "1 cup noodles (optional)",
      "Fresh parsley, chopped",
      "Salt and pepper to taste",
    ],
    instructions: [
      "In a large pot, add chicken, carrots, celery, onion, garlic, bay leaves, thyme, and chicken broth.",
      "Bring to a boil, then reduce heat and simmer for about 30 minutes until chicken is cooked through.",
      "Remove chicken from the pot and let it cool slightly before shredding the meat.",
      "Return shredded chicken to the pot.",
      "If using noodles, add them now and cook until tender, about 6-8 minutes.",
      "Season with salt and pepper to taste.",
      "Garnish with fresh parsley before serving.",
    ],
    notes: "For a heartier soup, add more vegetables like peas or corn.",
  },
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const recipe = recipeData[id as keyof typeof recipeData]
  const [isFavorite, setIsFavorite] = useState(false)

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  return (
    <main className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Recipes
          </Button>
        </Link>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">{recipe.title}</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setIsFavorite(!isFavorite)}>
            <Heart className={`mr-2 h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
            {isFavorite ? "Favorited" : "Add to Favorites"}
          </Button>
          <Link href={`/recipes/${id}/edit`}>
            <Button variant="outline">
              <Edit className="mr-2 h-4 w-4" />
              Edit Recipe
            </Button>
          </Link>
        </div>
      </div>

      <div className="mb-8 rounded-lg overflow-hidden">
        <img src={recipe.image || "/placeholder.svg"} alt={recipe.title} className="w-full h-[300px] object-cover" />
      </div>

      <div className="mb-8 flex flex-wrap gap-4">
        <Badge variant="outline" className="flex items-center gap-1 text-sm">
          <Tag className="h-4 w-4" />
          {recipe.category}
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1 text-sm">
          <Clock className="h-4 w-4" />
          Prep: {recipe.prepTime}
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1 text-sm">
          <Clock className="h-4 w-4" />
          Cook: {recipe.cookTime}
        </Badge>
        <Badge variant="outline" className="text-sm">
          Servings: {recipe.servings}
        </Badge>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Description</h2>
        <p className="text-muted-foreground">{recipe.description}</p>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Ingredients</h2>
        <ul className="list-disc pl-5 space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Instructions</h2>
        <ol className="list-decimal pl-5 space-y-4">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="pl-2">
              {instruction}
            </li>
          ))}
        </ol>
      </div>

      {recipe.notes && (
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Notes</h2>
          <p className="text-muted-foreground">{recipe.notes}</p>
        </div>
      )}
    </main>
  )
}
