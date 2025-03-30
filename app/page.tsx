import Link from "next/link"
import { ArrowRight, Package, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import Header from "@/components/header"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Connect Shippers with Available Truck Space
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  TruckMatch helps businesses or individuals find available truck space for their deliveries and helps carriers fill
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
                  src="/camion.jpg"
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
     <Footer />
    </div>
  )
}

