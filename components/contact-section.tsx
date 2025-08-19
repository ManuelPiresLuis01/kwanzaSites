"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Instagram } from "lucide-react"

interface ContactSectionProps {
  language: "pt" | "en"
}

export function ContactSection({ language }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const content = {
    pt: {
      title: "Entre em Contacto",
      subtitle: "Pronto para começar o seu projeto? Fale connosco!",
      form: {
        name: "Nome",
        email: "E-mail",
        phone: "Telefone",
        message: "Mensagem",
        submit: "Enviar Mensagem",
        success: "Mensagem enviada com sucesso!",
        error: "Erro ao enviar a mensagem, tente novamente.",
      },
      contact: {
        title: "Informações de Contacto",
        email: "kwanzasites@gmail.com",
        phone: "+244 955 791 520",
        instagram: "@kwanzasites",
      },
    },
    en: {
      title: "Get in Touch",
      subtitle: "Ready to start your project? Talk to us!",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        submit: "Send Message",
        success: "Message sent successfully!",
        error: "Error sending message, please try again.",
      },
      contact: {
        title: "Contact Information",
        email: "kwanzasites@gmail.com",
        phone: "+244 955 791 520",
        instagram: "@kwanzasites",
      },
    },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)
    setError(null)

    try {
      const response = await fetch("https://api-kwanzasites.onrender.com/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(content[language].form.success)
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setError(data.message || content[language].form.error)
      }
    } catch (err) {
      console.error(err)
      setError(content[language].form.error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">{content[language].title}</h2>
          <p className="text-xl text-muted-foreground">{content[language].subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif">{content[language].form.submit}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder={content[language].form.name}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder={content[language].form.email}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="phone"
                  placeholder={content[language].form.phone}
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Textarea
                  name="message"
                  placeholder={content[language].form.message}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Enviando..." : content[language].form.submit}
                </Button>
                {success && <p className="text-green-600 mt-2">{success}</p>}
                {error && <p className="text-red-600 mt-2">{error}</p>}
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">{content[language].contact.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${content[language].contact.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {content[language].contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a
                      href="https://wa.me/244955791520"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {content[language].contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Instagram className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <a
                      href="https://instagram.com/kwanzasites"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {content[language].contact.instagram}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
