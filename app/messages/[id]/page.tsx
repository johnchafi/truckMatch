"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Paperclip, Send } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function MessageDetail({ params }: { params: { id: string } }) {
  const [message, setMessage] = useState("")

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // In a real app, this would send the message to the API
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:px-6">
        <Link href="/dashboard/messages" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only sm:text-sm sm:font-medium">Back to Messages</span>
        </Link>
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="FastFreight Logistics" />
            <AvatarFallback>FL</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">FastFreight Logistics</div>
            <div className="text-xs text-muted-foreground">Online</div>
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <Card className="flex-1">
          <CardHeader className="p-4 border-b">
            <div className="font-semibold">Vancouver to Calgary Trip - April 10, 2025</div>
          </CardHeader>
          <CardContent className="p-4 space-y-4 overflow-auto max-h-[calc(100vh-14rem)]">
            <div className="flex gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder-user.jpg" alt="FastFreight Logistics" />
                <AvatarFallback>FL</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold text-sm">FastFreight Logistics</div>
                <div className="rounded-lg bg-muted p-3 text-sm">
                  Hello! I saw you might be interested in our available space for the Vancouver to Calgary route. We
                  have about half a truck available that can fit up to 8 pallets.
                </div>
                <div className="text-xs text-muted-foreground">9:30 AM</div>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="grid gap-1">
                <div className="font-semibold text-sm text-right">You</div>
                <div className="rounded-lg bg-primary p-3 text-sm text-primary-foreground">
                  Hi there! Yes, I'm interested. I have 4 pallets of electronics that need to go from Vancouver to
                  Calgary. What's your rate for this route?
                </div>
                <div className="text-xs text-muted-foreground text-right">9:32 AM</div>
              </div>
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder-user.jpg" alt="You" />
                <AvatarFallback>YO</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder-user.jpg" alt="FastFreight Logistics" />
                <AvatarFallback>FL</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold text-sm">FastFreight Logistics</div>
                <div className="rounded-lg bg-muted p-3 text-sm">
                  Great! For 4 pallets of electronics, we can offer a rate of $1,200 for the Vancouver to Calgary route.
                  This includes loading and unloading. Would that work for you?
                </div>
                <div className="text-xs text-muted-foreground">9:35 AM</div>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="grid gap-1">
                <div className="font-semibold text-sm text-right">You</div>
                <div className="rounded-lg bg-primary p-3 text-sm text-primary-foreground">
                  That sounds reasonable. What's your estimated delivery time? Our goods need to arrive by April 11th.
                </div>
                <div className="text-xs text-muted-foreground text-right">9:38 AM</div>
              </div>
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder-user.jpg" alt="You" />
                <AvatarFallback>YO</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder-user.jpg" alt="FastFreight Logistics" />
                <AvatarFallback>FL</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold text-sm">FastFreight Logistics</div>
                <div className="rounded-lg bg-muted p-3 text-sm">
                  We'll be departing Vancouver early morning on April 10th and arriving in Calgary by evening the same
                  day. So your goods will definitely arrive before April 11th. Does that timeline work for you?
                </div>
                <div className="text-xs text-muted-foreground">9:40 AM</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 border-t">
            <form onSubmit={handleSend} className="flex w-full items-center space-x-2">
              <Button type="button" size="icon" variant="ghost">
                <Paperclip className="h-4 w-4" />
                <span className="sr-only">Attach file</span>
              </Button>
              <Input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

