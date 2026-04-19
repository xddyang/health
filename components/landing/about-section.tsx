"use client"

import { useRef, useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const milestones = [
  { year: "2026", event: "公司成立，获得天使轮融资" },
  { year: "2026", event: "首款AI皮肤检测产品上线" },
  { year: "2027", event: "完成A轮融资，用户突破100万" },
  { year: "2027", event: "与多家三甲医院建立合作" },
  { year: "2028", event: "产品矩阵扩展，B轮融资完成" },
  { year: "2028", event: "服务用户超千万，启动出海战略" },
]

const values = [
  "用科技守护健康",
  "以用户为中心",
  "追求医疗级品质",
  "开放合作共赢",
]

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left - Company Info */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-xs uppercase tracking-widest">
              关于我们
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              用AI技术
              <span className="gradient-text block">赋能健康未来</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              睿肤云图成立于2026年，是一家专注于AI+健康医疗领域的科技创新企业。我们的团队由来自顶级科技公司和医疗机构的专家组成。
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              经过多年发展，我们已经形成了覆盖皮肤健康、智能问诊、健康监测、心理关怀、用药管理和慢病管理六大领域的产品矩阵，服务超过千万用户。
            </p>
            
            {/* Values */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">我们的价值观</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-3 p-4 rounded-xl bg-secondary/50 transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Timeline */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h3 className="font-semibold text-foreground mb-10 text-xl">发展历程</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`relative pl-10 transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-3 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                    <div className="p-5 rounded-2xl bg-card border border-border card-hover">
                      <div className="text-primary font-bold text-sm mb-1">{milestone.year}</div>
                      <div className="text-foreground">{milestone.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
