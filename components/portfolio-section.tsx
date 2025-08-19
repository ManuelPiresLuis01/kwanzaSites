interface PortfolioSectionProps {
  language: "pt" | "en"
}

export function PortfolioSection({ language }: PortfolioSectionProps) {
  const content = {
    pt: {
      title: "Nosso Portfólio",
      subtitle: "Alguns dos projetos que desenvolvemos com sucesso",
      projects: [
        {
          title: "Site Institucional - Empresa de Consultoria",
          description: "Website moderno e profissional para empresa de consultoria empresarial.",
          category: "Institucional",
          image: "/corporate-consulting-website.png",
        },
        {
          title: "Loja Online - Moda & Acessórios",
          description: "E-commerce completo com sistema de pagamentos e gestão de inventário.",
          category: "E-commerce",
          image: "/fashion-ecommerce-website.png",
        },
        {
          title: "Landing Page - Curso Online",
          description: "Página otimizada para conversão e captação de leads para curso digital.",
          category: "Landing Page",
          image: "/online-course-landing.png",
        },
        {
          title: "Portal Corporativo - Grupo Empresarial",
          description: "Portal completo com múltiplas seções e área de membros.",
          category: "Portal",
          image: "/corporate-business-portal.png",
        },
      ],
    },
    en: {
      title: "Our Portfolio",
      subtitle: "Some of the projects we have successfully developed",
      projects: [
        {
          title: "Institutional Website - Consulting Company",
          description: "Modern and professional website for business consulting company.",
          category: "Institutional",
          image: "/corporate-consulting-website.png",
        },
        {
          title: "Online Store - Fashion & Accessories",
          description: "Complete e-commerce with payment system and inventory management.",
          category: "E-commerce",
          image: "/fashion-ecommerce-website.png",
        },
        {
          title: "Landing Page - Online Course",
          description: "Conversion-optimized page for lead generation for digital course.",
          category: "Landing Page",
          image: "/online-course-landing.png",
        },
        {
          title: "Corporate Portal - Business Group",
          description: "Complete portal with multiple sections and member area.",
          category: "Portal",
          image: "/corporate-business-portal.png",
        },
      ],
    },
  }

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">{content[language].title}</h2>
          <p className="text-xl text-muted-foreground">{content[language].subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {content[language].projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <span className="inline-block bg-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-serif font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
