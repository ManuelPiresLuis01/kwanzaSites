"use client"
import { Button } from "@/components/ui/button"

interface LanguageSwitcherProps {
  onLanguageChange: (lang: "pt" | "en") => void
  currentLanguage: "pt" | "en"
}

export function LanguageSwitcher({ onLanguageChange, currentLanguage }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1 border">
      <Button
        variant={currentLanguage === "pt" ? "default" : "ghost"}
        size="sm"
        onClick={() => onLanguageChange("pt")}
        className={`text-xs px-4 py-2 font-medium transition-all duration-200 ${
          currentLanguage === "pt"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "hover:bg-muted text-muted-foreground hover:text-foreground"
        }`}
      >
        🇵🇹 Português
      </Button>
      <Button
        variant={currentLanguage === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => onLanguageChange("en")}
        className={`text-xs px-4 py-2 font-medium transition-all duration-200 ${
          currentLanguage === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "hover:bg-muted text-muted-foreground hover:text-foreground"
        }`}
      >
        🇬🇧 English
      </Button>
    </div>
  )
}
