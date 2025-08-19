import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialsSectionProps {
  language: "pt" | "en"
}

export function TestimonialsSection({ language }: TestimonialsSectionProps) {
  const content = {
    pt: {
      title: "O que dizem os nossos clientes",
      subtitle: "Depoimentos de quem confia no nosso trabalho",
      testimonials: [
        {
          name: "Maria Silva",
          company: "Consultoria Empresarial",
          text: "A KwanzaSites transformou completamente a nossa presença online. O site ficou moderno e profissional, exatamente como queríamos.",
          rating: 5,
        },
        {
          name: "João Santos",
          company: "Loja de Moda",
          text: "Excelente trabalho! A nossa loja online está a funcionar perfeitamente e as vendas aumentaram significativamente.",
          rating: 5,
        },
        {
          name: "Ana Costa",
          company: "Curso Online",
          text: "Profissionais competentes e atenciosos. Entregaram o projeto no prazo e com qualidade excepcional.",
          rating: 5,
        },
      ],
    },
    en: {
      title: "What our clients say",
      subtitle: "Testimonials from those who trust our work",
      testimonials: [
        {
          name: "Maria Silva",
          company: "Business Consulting",
          text: "KwanzaSites completely transformed our online presence. The website turned out modern and professional, exactly as we wanted.",
          rating: 5,
        },
        {
          name: "João Santos",
          company: "Fashion Store",
          text: "Excellent work! Our online store is working perfectly and sales have increased significantly.",
          rating: 5,
        },
        {
          name: "Ana Costa",
          company: "Online Course",
          text: "Competent and attentive professionals. They delivered the project on time and with exceptional quality.",
          rating: 5,
        },
      ],
    },
  }

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">{content[language].title}</h2>
          <p className="text-xl text-muted-foreground">{content[language].subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content[language].testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
