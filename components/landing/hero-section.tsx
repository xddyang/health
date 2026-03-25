"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI 驱动的健康未来</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            <span className="text-balance">用人工智能</span>
            <br />
            <span className="text-primary">重新定义健康</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 text-pretty">
            智康科技致力于将前沿AI技术应用于健康医疗领域，打造智能化、个性化的健康管理解决方案，让每个人都能享受到科技带来的健康福祉。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8">
              探索产品
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              了解更多
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-16 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6">受到行业领先机构信赖</p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-60">
              {["清华大学", "北京大学", "协和医院", "阿里健康", "腾讯医疗"].map((name) => (
                <span key={name} className="text-lg font-medium text-muted-foreground">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
