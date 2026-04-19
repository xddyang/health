"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`relative overflow-hidden rounded-[2.5rem] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
          <div className="absolute inset-0 glass" />
          
          {/* Animated Orbs */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] animate-float" />
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
                                linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
              backgroundSize: "40px 40px"
            }}
          />
          
          <div className="relative z-10 px-8 py-20 sm:px-16 sm:py-24 lg:px-24 lg:py-32">
            <div className="max-w-2xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">限时免费体验</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                开启您的
                <span className="gradient-text block">AI健康之旅</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                立即联系我们，了解睿肤云图如何为您提供定制化的AI健康解决方案。
              </p>
              
              {/* Email Input */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    type="email" 
                    placeholder="输入您的邮箱" 
                    className="pl-12 h-14 rounded-full bg-background/80 border-border text-base"
                  />
                </div>
                <Button size="lg" className="h-14 px-8 rounded-full text-base group">
                  获取演示
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                我们会在24小时内与您联系 · 您的信息将被严格保密
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
