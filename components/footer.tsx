import { Instagram, MessageCircle } from "lucide-react"

interface FooterProps {
  language: "pt" | "en"
}

export function Footer({ language }: FooterProps) {
  const content = {
    pt: {
      quickLinks: "Links Rápidos",
      services: "Serviços",
      pricing: "Preços",
      contact: "Contacto",
      social: "Redes Sociais",
      rights: "© 2025 KwanzaSites. Todos os direitos reservados.",
    },
    en: {
      quickLinks: "Quick Links",
      services: "Services",
      pricing: "Pricing",
      contact: "Contact",
      social: "Social Media",
      rights: "© 2025 KwanzaSites. All rights reserved.",
    },
  }

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">KwanzaSites</h3>
            <p className="text-background/80 leading-relaxed">
              {language === "pt"
                ? "Transformamos ideias em soluções digitais práticas, entregando qualidade, inovação e suporte em cada projeto."
                : "We transform ideas into practical digital solutions, delivering quality, innovation and support in every project."}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{content[language].quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  {content[language].services}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-background/80 hover:text-background transition-colors">
                  {content[language].pricing}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  {content[language].contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{content[language].social}</h4>
            <div className="flex gap-4">
              <a
                href="https://wa.me/244955791520"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/kwanzasites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">{content[language].rights}</p>
        </div>
      </div>
    </footer>
  )
}
