"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { width, height, left, top } = containerRef.current.getBoundingClientRect()
      const x = (clientX - left - width / 2) / 25
      const y = (clientY - top - height / 2) / 25
      containerRef.current.style.setProperty("--mouse-x", `${x}px`)
      containerRef.current.style.setProperty("--mouse-y", `${y}px`)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Primary Gradient Orb */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
            opacity: 0.15,
            transform: `translate(calc(-50% + var(--mouse-x, 0px)), calc(-25% + var(--mouse-y, 0px)))`,
            transition: "transform 0.3s ease-out"
          }}
        />
        {/* Secondary Gradient Orb */}
        <div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full animate-float"
          style={{
            background: "radial-gradient(circle, oklch(0.75 0.15 200) 0%, transparent 70%)",
            opacity: 0.1,
          }}
        />
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
                              linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 opacity-0 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">睿肤云图 AI 3.0 正式发布</span>
            <ArrowRight className="w-3 h-3 text-muted-foreground" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-8 opacity-0 animate-fade-up animation-delay-100">
            <span className="block text-foreground">用人工智能</span>
            <span className="block gradient-text mt-2">重新定义健康</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-12 text-pretty opacity-0 animate-fade-up animation-delay-200 leading-relaxed">
            睿肤云图致力于将前沿AI技术应用于健康医疗领域，打造智能化、个性化的健康管理解决方案。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-300">
            <Button size="lg" className="text-base px-8 h-14 rounded-full group">
              开始体验
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-14 rounded-full group">
              <Play className="mr-2 w-4 h-4" />
              观看演示
            </Button>
          </div>

          {/* Trust Section */}
          <div className="mt-24 opacity-0 animate-fade-up animation-delay-400">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
              受到行业领先机构信赖
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {["清华大学", "北京大学", "协和医院", "阿里健康", "腾讯医疗"].map((name, i) => (
                <span 
                  key={name} 
                  className="text-lg font-medium text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300"
                  style={{ animationDelay: `${500 + i * 100}ms` }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
