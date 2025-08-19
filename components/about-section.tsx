interface AboutSectionProps {
  language: "pt" | "en"
}

export function AboutSection({ language }: AboutSectionProps) {
  const content = {
    pt: {
      title: "Sobre Nós",
      description:
        "A KwanzaSites ajuda empresas e empreendedores a criarem presença digital com sites modernos, responsivos e acessíveis. Nosso compromisso é transformar ideias em soluções digitais práticas, entregando qualidade, inovação e suporte em cada projeto.",
    },
    en: {
      title: "About Us",
      description:
        "KwanzaSites helps businesses and entrepreneurs build their digital presence with modern, responsive, and affordable websites. Our commitment is to transform ideas into practical digital solutions, delivering quality, innovation, and support in every project.",
    },
  }

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/modern-developer-office.png" alt="KwanzaSites team" className="rounded-lg shadow-lg" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">{content[language].title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{content[language].description}</p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">
                  {language === "pt" ? "Projetos Concluídos" : "Projects Completed"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  {language === "pt" ? "Clientes Satisfeitos" : "Satisfied Clients"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
