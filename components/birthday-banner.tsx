import { Cake } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface BirthdayBannerProps {
  date: string
}

export function BirthdayBanner({ date }: BirthdayBannerProps) {
  return (
    <Card className="mb-8 bg-pink-50 dark:bg-pink-950">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Cake className="h-6 w-6 text-pink-500" />
          <h2 className="text-lg font-medium">
            Happy Birthday Mom! <span className="font-normal">({date})</span>
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">Enjoy your special collection of recipes!</p>
      </CardContent>
    </Card>
  )
}
