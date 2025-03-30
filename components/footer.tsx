import React from 'react'
import Link from "next/link"
import { ArrowRight, Package, Truck } from "lucide-react"

function Footer() {
  return (
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
  )
}

export default Footer