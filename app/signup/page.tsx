import Link from "next/link"
import { Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUp() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4 bg-gray-400">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Truck className="h-6 w-6" />
              <span>TruckMatch</span>
            </Link>
          </div>
          <CardTitle className="text-2xl">Log in to your account</CardTitle>
          <CardDescription>Enter your information  to create your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Phone Number</Label>
            <Input id="phone" type="phone" placeholder="5815782309" required />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password_signup" type="password" required />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Retype Password</Label>
            </div>
            <Input id="re_password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  )
}