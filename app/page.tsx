import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Separator } from "./components/ui/separator"
import { ArrowRight, Download, Play } from "lucide-react"
import Image from "next/image"

export default function OSRBlueprint() {
  const userData = {
    firstName: "Michael",
    goal: "15kg in 12 weeks",
    struggle: "a busy work schedule",
    keyBarrier: {
      title: "You struggle to stay consistent",
      description:
        "Our coaching system is designed to help you build sustainable habits that fit into your busy lifestyle. We'll check in daily and adjust your plan as needed to ensure you're always on track.",
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 pt-12 md:pt-20 pb-8 md:pb-12 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Hi {userData.firstName}, here's your personalised OSR plan
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Designed to help you lose <span className="font-medium">{userData.goal}</span>, even with{" "}
          <span className="font-medium">{userData.struggle}</span>
        </p>
      </section>

      {/* Video Section */}
      <section className="px-4 py-8 max-w-3xl mx-auto">
        <div className="relative aspect-video bg-muted rounded-xl overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <Button variant="outline" size="icon" className="h-16 w-16 rounded-full bg-white/90 shadow-lg">
              <Play className="h-8 w-8" />
              <span className="sr-only">Play welcome video</span>
            </Button>
          </div>
          <p className="text-muted-foreground">Welcome Video</p>
        </div>
      </section>

      {/* Key Barrier Section */}
      <section className="px-4 py-12 max-w-3xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Your Key Barrier</h2>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">{userData.keyBarrier.title} — here's how we fix that</h3>
              <p className="text-muted-foreground">{userData.keyBarrier.description}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="px-4 py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Success Stories</h2>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-slate-100">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Client transformation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <CardContent className="md:w-2/3 p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Sarah Johnson, 34</h3>
                    <p className="text-muted-foreground text-sm">Marketing Director, Mother of two</p>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Lost 18kg in 16 weeks while working 50+ hours per week</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Reduced stress levels and improved sleep quality</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Maintained results for over a year with sustainable habits</span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <Button variant="outline" className="w-full md:w-auto">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Sarah's Story
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Plan Preview Section */}
      <section className="px-4 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Your OSR Method Preview</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="flex flex-col">
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="rounded-full bg-slate-100 w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-semibold">1</span>
              </div>
              <h3 className="font-semibold mb-2">3-Day Workout Split</h3>
              <p className="text-sm text-muted-foreground flex-1">
                Optimized training schedule that fits into your busy lifestyle while maximizing results.
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="rounded-full bg-slate-100 w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-semibold">2</span>
              </div>
              <h3 className="font-semibold mb-2">High-Protein Flexible Meal Plan</h3>
              <p className="text-sm text-muted-foreground flex-1">
                Customized nutrition that allows you to enjoy your favorite foods while still reaching your goals.
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="rounded-full bg-slate-100 w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-semibold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Habit Coaching System</h3>
              <p className="text-sm text-muted-foreground flex-1">
                Daily accountability and support to ensure you stay on track and overcome obstacles.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Let's build your exact plan together</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Schedule a free strategy call with one of our coaches to discuss your goals and create a personalized
              plan.
            </p>
          </div>

          <div className="space-y-4">
            <Button size="lg" className="px-8">
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <div>
              <Separator className="my-4" />
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download your Starter Blueprint
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-6 border-t">
        <div className="max-w-5xl mx-auto text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} OSR Fitness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
