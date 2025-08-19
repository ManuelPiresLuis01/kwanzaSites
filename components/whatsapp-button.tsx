"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  language: "pt" | "en"
}

export function WhatsAppButton({ language }: WhatsAppButtonProps) {
  const message = language === "pt" ? "Olá, preciso dos seus serviços" : "Hello, I need your services"

  const whatsappUrl = `https://wa.me/244955791520?text=${encodeURIComponent(message)}`

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg animate-bounce"
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="sr-only">WhatsApp</span>
      </a>
    </Button>
  )
}
