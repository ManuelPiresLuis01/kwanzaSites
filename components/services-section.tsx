import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, ShoppingCart, Wrench, Palette } from "lucide-react"

interface ServicesSectionProps {
  language: "pt" | "en"
}

export function ServicesSection({ language }: ServicesSectionProps) {
  const content = {
    pt: {
      title: "Nossos Serviços",
      subtitle: "Soluções completas para a sua presença digital",
      services: [
        {
          icon: Globe,
          title: "Sites Institucionais",
          description: "Sites profissionais que representam a sua marca com elegância e funcionalidade.",
        },
        {
          icon: Palette,
          title: "Landing Pages",
          description: "Páginas otimizadas para conversão e captação de leads para o seu negócio.",
        },
        {
          icon: ShoppingCart,
          title: "Lojas Online (E-commerce)",
          description: "Plataformas completas de vendas online com gestão de produtos e pagamentos.",
        },
        {
          icon: Wrench,
          title: "Manutenção & Suporte",
          description: "Suporte técnico contínuo para manter o seu site sempre atualizado e seguro.",
        },
      ],
      extras: {
        title: "Serviços Extras",
        items: ["Hospedagem", "E-mails Profissionais", "SEO", "Integração Redes Sociais", "Identidade Visual"],
      },
    },
    en: {
      title: "Our Services",
      subtitle: "Complete solutions for your digital presence",
      services: [
        {
          icon: Globe,
          title: "Institutional Websites",
          description: "Professional websites that represent your brand with elegance and functionality.",
        },
        {
          icon: Palette,
          title: "Landing Pages",
          description: "Conversion-optimized pages for lead generation for your business.",
        },
        {
          icon: ShoppingCart,
          title: "Online Stores (E-commerce)",
          description: "Complete online sales platforms with product and payment management.",
        },
        {
          icon: Wrench,
          title: "Maintenance & Support",
          description: "Continuous technical support to keep your website always updated and secure.",
        },
      ],
      extras: {
        title: "Extra Services",
        items: ["Hosting", "Professional Emails", "SEO", "Social Media Integration", "Visual Identity"],
      },
    },
  }

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">{content[language].title}</h2>
          <p className="text-xl text-muted-foreground">{content[language].subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {content[language].services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-6">{content[language].extras.title}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {content[language].extras.items.map((item, index) => (
              <span key={index} className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
