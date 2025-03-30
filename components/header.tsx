import React from 'react'
import { ArrowRight, Package, Truck } from "lucide-react"
import Link from "next/link"
import { Button } from './ui/button'
function Header() {
  return (
    <div>
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
  </div>
  )
}

export default Header