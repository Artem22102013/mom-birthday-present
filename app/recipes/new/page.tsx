"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Plus, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export default function NewRecipePage() {
  const router = useRouter()
  const [ingredients, setIngredients] = useState<string[]>([""])
  const [instructions, setInstructions] = useState<string[]>([""])

  const addIngredient = () => {
    setIngredients([...ingredients, ""])
  }

  const updateIngredient = (index: number, value: string) => {
    const newIngredients = [...ingredients]
    newIngredients[index] = value
    setIngredients(newIngredients)
  }

  const removeIngredient = (index: number) => {
    if (ingredients.length > 1) {
      const newIngredients = [...ingredients]
      newIngredients.splice(index, 1)
      setIngredients(newIngredients)
    }
  }

  const addInstruction = () => {
    setInstructions([...instructions, ""])
  }

  const updateInstruction = (index: number, value: string) => {
    const newInstructions = [...instructions]
    newInstructions[index] = value
    setInstructions(newInstructions)
  }

  const removeInstruction = (index: number) => {
    if (instructions.length > 1) {
      const newInstructions = [...instructions]
      newInstructions.splice(index, 1)
      setInstructions(newInstructions)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save the recipe to a database here
    // For now, we'll just redirect back to the home page
    router.push("/")
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

      <div className="mb-8">
        <h1 className="text-3xl font-bold">Add New Recipe</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">Recipe Title</Label>
                <Input id="title" placeholder="Enter recipe title" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="breakfast">Breakfast</SelectItem>
                    <SelectItem value="lunch">Lunch</SelectItem>
                    <SelectItem value="dinner">Dinner</SelectItem>
                    <SelectItem value="dessert">Dessert</SelectItem>
                    <SelectItem value="snack">Snack</SelectItem>
                    <SelectItem value="soup">Soup</SelectItem>
                    <SelectItem value="salad">Salad</SelectItem>
                    <SelectItem value="drink">Drink</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="prepTime">Prep Time</Label>
                <Input id="prepTime" placeholder="e.g. 15 mins" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cookTime">Cook Time</Label>
                <Input id="cookTime" placeholder="e.g. 30 mins" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="servings">Servings</Label>
                <Input id="servings" type="number" min="1" placeholder="e.g. 4" />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Briefly describe your recipe" rows={3} />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="image">Image URL</Label>
                <Input id="image" type="url" placeholder="Enter image URL (optional)" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Ingredients</h2>
              <Button type="button" variant="outline" size="sm" onClick={addIngredient}>
                <Plus className="mr-2 h-4 w-4" />
                Add Ingredient
              </Button>
            </div>
            <div className="space-y-4">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={ingredient}
                    onChange={(e) => updateIngredient(index, e.target.value)}
                    placeholder={`Ingredient ${index + 1}`}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeIngredient(index)}
                    disabled={ingredients.length === 1}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Instructions</h2>
              <Button type="button" variant="outline" size="sm" onClick={addInstruction}>
                <Plus className="mr-2 h-4 w-4" />
                Add Step
              </Button>
            </div>
            <div className="space-y-4">
              {instructions.map((instruction, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-muted text-sm font-medium">
                    {index + 1}
                  </div>
                  <Textarea
                    value={instruction}
                    onChange={(e) => updateInstruction(index, e.target.value)}
                    placeholder={`Step ${index + 1}`}
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeInstruction(index)}
                    disabled={instructions.length === 1}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea id="notes" placeholder="Any additional notes or tips for this recipe" rows={3} />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.push("/")}>
            Cancel
          </Button>
          <Button type="submit">Save Recipe</Button>
        </div>
      </form>
    </main>
  )
}
