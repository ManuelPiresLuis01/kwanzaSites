import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Shield, Zap, Crown } from "lucide-react"

interface PricingSectionProps {
  language: "pt" | "en"
}

export function PricingSection({ language }: PricingSectionProps) {
  const content = {
    pt: {
      title: "Planos de Preços",
      subtitle: "Escolha o plano ideal para o seu negócio",
      plans: [
        {
          name: "Básico",
          subtitle: "Presença Digital",
          price: "100.000 - 120.000 Kz",
          features: ["Até 4 páginas", "Design responsivo", "Integração WhatsApp", "SEO básico", "Suporte por 30 dias"],
          whatsappMessage:
            "Olá, gostaria de solicitar um orçamento para o Plano Básico - Presença Digital. Preciso de um site com até 4 páginas.",
        },
        {
          name: "Intermédio",
          subtitle: "Negócio Online",
          price: "200.000 - 250.000 Kz",
          features: [
            "Até 8 páginas + blog",
            "Formulários avançados",
            "Google Maps",
            "Treinamento incluído",
            "Suporte por 60 dias",
          ],
          popular: true,
          whatsappMessage:
            "Olá, gostaria de solicitar um orçamento para o Plano Intermédio - Negócio Online. Preciso de um site com até 8 páginas e blog.",
        },
        {
          name: "Avançado",
          subtitle: "Loja Online",
          price: "350.000 - 500.000 Kz",
          features: [
            "E-commerce até 50 produtos",
            "Carrinho & checkout",
            "Relatórios de vendas",
            "Treinamento completo",
            "Suporte por 90 dias",
          ],
          whatsappMessage:
            "Olá, gostaria de solicitar um orçamento para o Plano Avançado - Loja Online. Preciso de um e-commerce completo.",
        },
      ],
      maintenance: {
        title: "Planos de Manutenção Mensal",
        plans: [
          {
            name: "Básico",
            price: "20.000 Kz",
            icon: Shield,
            features: ["Backup semanal", "Atualizações básicas", "Suporte por email"],
            whatsappMessage: "Olá, gostaria de contratar o Plano de Manutenção Básico (20.000 Kz/mês).",
          },
          {
            name: "Profissional",
            price: "40.000 Kz",
            icon: Zap,
            features: ["Backup diário", "Atualizações completas", "Suporte prioritário", "Relatórios mensais"],
            whatsappMessage: "Olá, gostaria de contratar o Plano de Manutenção Profissional (40.000 Kz/mês).",
          },
          {
            name: "Premium",
            price: "60.000 Kz",
            icon: Crown,
            features: ["Backup em tempo real", "Otimização contínua", "Suporte 24/7", "Consultoria mensal"],
            whatsappMessage: "Olá, gostaria de contratar o Plano de Manutenção Premium (60.000 Kz/mês).",
          },
        ],
      },
      cta: "Solicitar Orçamento",
    },
    en: {
      title: "Pricing Plans",
      subtitle: "Choose the ideal plan for your business",
      plans: [
        {
          name: "Basic",
          subtitle: "Digital Presence",
          price: "100,000 - 120,000 Kz",
          features: ["Up to 4 pages", "Responsive design", "WhatsApp integration", "Basic SEO", "30 days support"],
          whatsappMessage:
            "Hello, I would like to request a quote for the Basic Plan - Digital Presence. I need a website with up to 4 pages.",
        },
        {
          name: "Intermediate",
          subtitle: "Online Business",
          price: "200,000 - 250,000 Kz",
          features: ["Up to 8 pages + blog", "Advanced forms", "Google Maps", "Training included", "60 days support"],
          popular: true,
          whatsappMessage:
            "Hello, I would like to request a quote for the Intermediate Plan - Online Business. I need a website with up to 8 pages and blog.",
        },
        {
          name: "Advanced",
          subtitle: "Online Store",
          price: "350,000 - 500,000 Kz",
          features: [
            "E-commerce up to 50 products",
            "Cart & checkout",
            "Sales reports",
            "Complete training",
            "90 days support",
          ],
          whatsappMessage:
            "Hello, I would like to request a quote for the Advanced Plan - Online Store. I need a complete e-commerce solution.",
        },
      ],
      maintenance: {
        title: "Monthly Maintenance Plans",
        plans: [
          {
            name: "Basic",
            price: "20,000 Kz",
            icon: Shield,
            features: ["Weekly backup", "Basic updates", "Email support"],
            whatsappMessage: "Hello, I would like to hire the Basic Maintenance Plan (20,000 Kz/month).",
          },
          {
            name: "Professional",
            price: "40,000 Kz",
            icon: Zap,
            features: ["Daily backup", "Complete updates", "Priority support", "Monthly reports"],
            whatsappMessage: "Hello, I would like to hire the Professional Maintenance Plan (40,000 Kz/month).",
          },
          {
            name: "Premium",
            price: "60,000 Kz",
            icon: Crown,
            features: ["Real-time backup", "Continuous optimization", "24/7 support", "Monthly consulting"],
            whatsappMessage: "Hello, I would like to hire the Premium Maintenance Plan (60,000 Kz/month).",
          },
        ],
      },
      cta: "Request Quote",
    },
  }

  return (
    <section id="pricing" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">{content[language].title}</h2>
          <p className="text-xl text-muted-foreground">{content[language].subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {content[language].plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    {language === "pt" ? "Mais Popular" : "Most Popular"}
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif">{plan.name}</CardTitle>
                <CardDescription className="text-lg">{plan.subtitle}</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">{plan.price}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                <Button asChild className="w-full mt-6">
                  <a
                    href={`https://wa.me/244955791520?text=${encodeURIComponent(plan.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content[language].cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-background rounded-lg p-8 border">
          <h3 className="text-2xl font-serif font-bold text-center text-foreground mb-8">
            {content[language].maintenance.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {content[language].maintenance.plans.map((plan, index) => {
              const IconComponent = plan.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">{plan.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{plan.price}</div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    <Button
                      asChild
                      variant="outline"
                      className="w-full mt-4 hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <a
                        href={`https://wa.me/244955791520?text=${encodeURIComponent(plan.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {language === "pt" ? "Contratar" : "Hire"}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
