import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  language: "pt" | "en"
}

export function HeroSection({ language }: HeroSectionProps) {
  const content = {
    pt: {
      title: "Levamos o seu negócio para o digital com sites modernos e acessíveis",
      subtitle:
        "Transformamos ideias em soluções digitais práticas, entregando qualidade, inovação e suporte em cada projeto.",
      cta: "Solicitar Orçamento",
    },
    en: {
      title: "We take your business digital with modern and affordable websites",
      subtitle:
        "We transform ideas into practical digital solutions, delivering quality, innovation and support in every project.",
      cta: "Request Quote",
    },
  }

  const whatsappMessage = language === "pt" ? "Olá, preciso dos seus serviços" : "Hello, I need your services"

  const whatsappUrl = `https://wa.me/244955791520?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              {content[language].title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{content[language].subtitle}</p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {content[language].cta}
              </a>
            </Button>
          </div>
          <div className="relative">
            <img
              src="/professional-web-team.png"
              alt="Professional web development team"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
