"use client"

import { useRef, useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Zap, 
  Users, 
  LineChart,
  Globe,
  Lock
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "毫秒级响应",
    description: "基于先进的AI算法，实现毫秒级健康数据分析和智能决策。",
  },
  {
    icon: Shield,
    title: "医疗级准确率",
    description: "与顶级医疗机构合作验证，核心模型准确率达到医疗级标准。",
  },
  {
    icon: Users,
    title: "千万级用户",
    description: "服务超过千万用户，积累海量真实医疗数据和用户反馈。",
  },
  {
    icon: LineChart,
    title: "持续学习进化",
    description: "AI模型持续迭代优化，随着数据增长不断提升服务质量。",
  },
  {
    icon: Globe,
    title: "多场景覆盖",
    description: "从个人健康管理到医疗机构，提供全场景解决方案。",
  },
  {
    icon: Lock,
    title: "隐私安全保障",
    description: "采用最高级别数据加密，严格遵守医疗数据隐私法规。",
  },
]

const stats = [
  { value: "98%", label: "用户满意度" },
  { value: "1000万+", label: "服务用户" },
  { value: "50+", label: "合作医院" },
  { value: "99.9%", label: "系统可用性" },
]

export function FeaturesSection() {
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
    <section id="solutions" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Stats Bar */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-xs uppercase tracking-widest">
              核心优势
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              为什么选择
              <span className="gradient-text block">睿肤云图</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              我们汇聚了顶尖的AI技术团队和医疗专家，致力于用科技推动医疗健康行业的数字化转型，让健康管理更智能、更便捷。
            </p>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 card-hover transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
