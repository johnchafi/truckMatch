import Link from "next/link"
import { ArrowRight, Package, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Truck className="h-6 w-6" />
            <span>TruckMatch</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
              Log In
            </Link>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Connect Shippers with Available Truck Space
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  TruckMatch helps businesses find available truck space for their deliveries and helps carriers fill
                  empty space on return journeys.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/dashboard">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Platform Preview"
                  className="rounded-lg object-cover aspect-video"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Choose Your Role</h2>
                <p className="text-muted-foreground md:text-xl">
                  Whether you need to ship goods or have available truck space, we've got you covered.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:gap-12 max-w-4xl mx-auto">
                <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Package className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">I Need to Ship</h3>
                  <p className="text-muted-foreground text-center">
                    Post your delivery needs and connect with carriers who have available space.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link href="/signup?role=shipper">Join as Shipper</Link>
                  </Button>
                </div>
                <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Truck className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">I Have Truck Space</h3>
                  <p className="text-muted-foreground text-center">
                    List your available truck space and find shipments for your return journeys.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link href="/signup?role=carrier">Join as Carrier</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            <span className="font-semibold">TruckMatch</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Contact Us
            </Link>
          </nav>
          <div className="md:ml-auto text-xs text-muted-foreground">© 2025 TruckMatch. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

