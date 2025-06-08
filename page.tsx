"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"

export default function OSRBlueprint() {
  const searchParams = useSearchParams()

  const firstName = searchParams.get("firstName") || "there"
  const goal = searchParams.get("goal") || "12kg and a flatter tummy"
  const struggle = searchParams.get("struggle") || "a demanding schedule"

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 pt-12 md:pt-20 pb-8 md:pb-12 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Hi {firstName}, here’s your personalised OSR Blueprint
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Designed to help you lose <span className="font-medium">{goal}</span>, even with{" "}
          <span className="font-medium">{struggle}</span>.
        </p>
      </section>

      {/* Video Section */}
      <section className="px-4 py-8 max-w-3xl mx-auto">
        <div className="aspect-video rounded-xl overflow-hidden">
          {/* TODO: Replace with your actual Loom video URL */}
          <iframe
            src="https://www.loom.com/embed/PLACEHOLDER_VIDEO_ID"
            title="Welcome to OSR"
            frameBorder="0"
            allow="fullscreen"
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Key Barrier Section */}
      <section className="px-4 py-12 max-w-3xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Your Key Barrier</h2>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Staying consistent — here’s how we fix that</h3>
              <p className="text-muted-foreground">
                We work with high-achieving women all the time who know what they should be doing — but can’t stay
                consistent. That’s exactly why the OSR Method wraps around your schedule, your lifestyle, and your energy
                — so results finally feel doable.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="px-4 py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Client Spotlight: Michelle, 49</h2>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-slate-100">
                <div className="aspect-square relative">
                  {/* TODO: Replace with your actual client transformation image */}
                  <Image
                    src="https://i.imgur.com/PLACEHOLDER_IMAGE.jpg"
                    alt="Client transformation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <CardContent className="md:w-2/3 p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Michelle, 49</h3>
                    <p className="text-muted-foreground text-sm">Senior Exec & Menopause Coach</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Lost 28 lbs while navigating menopause and full-time work</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Built a 3x/week strength routine and sustainable nutrition habits</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Feels stronger and leaner now in her 50s than she did in her 30s</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    {/* TODO: Replace with link to your client story video */}
                    <a href="https://www.loom.com/embed/CLIENT_STORY_VIDEO" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full md:w-auto">
                        Watch Michelle's Story
                      </Button>
                    </a>
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
          {[
            {
              title: "3-Day Workout Split",
              desc: "Strength training that fits into your schedule and boosts fat loss with just 3 sessions per week.",
            },
            {
              title: "High-Protein Flexible Meal Plan",
              desc: "Easy, satisfying meals built to match your calories, protein goals, and personal preferences.",
            },
            {
              title: "Habit Coaching System",
              desc: "Simple, powerful habit tracking with real-time accountability so you stay consistent long-term.",
            },
          ].map((item, i) => (
            <Card key={i} className="flex flex-col">
              <CardContent className="pt-6 flex-1 flex flex-col">
                <div className="rounded-full bg-slate-100 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-semibold">{i + 1}</span>
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Let’s build your exact plan together</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Schedule a free strategy call with one of our coaches to create your personalized OSR Blueprint.
            </p>
          </div>
          <div className="space-y-4">
            {/* TODO: Replace with your real Calendly or booking link */}
            <a href="https://calendly.com/YOUR_BOOKING_LINK" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-8">
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <div>
              <Separator className="my-4" />
              {/* TODO: Replace with the actual download path if using a custom PDF */}
              <a href="/downloads/Starter-Blueprint.pdf" download>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download your Starter Blueprint
                </Button>
              </a>
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

