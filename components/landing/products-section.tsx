"use client"

import { useRef, useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Scan, 
  MessageSquare, 
  Activity, 
  Brain, 
  Pill, 
  HeartPulse,
  ArrowRight,
  ArrowUpRight
} from "lucide-react"

const products = [
  {
    icon: Scan,
    title: "肤康 AI",
    description: "智能皮肤健康检测系统，通过AI图像识别技术，精准分析皮肤状况。",
    badge: "旗舰产品",
    features: ["AI皮肤检测", "在线问诊", "专家预约"],
  },
  {
    icon: MessageSquare,
    title: "睿肤智诊",
    description: "AI驱动的智能问诊助手，7x24小时在线，快速预诊分诊。",
    badge: "热门",
    features: ["智能预诊", "病症分析", "医生匹配"],
  },
  {
    icon: Activity,
    title: "健康监测",
    description: "实时健康数据监测与分析平台，构建个人健康档案。",
    badge: "企业版",
    features: ["实时监测", "数据分析", "健康报告"],
  },
  {
    icon: Brain,
    title: "心理关怀",
    description: "AI心理健康评估与干预系统，专业心理测评服务。",
    badge: "即将推出",
    features: ["心理测评", "情绪追踪", "专业咨询"],
  },
  {
    icon: Pill,
    title: "智慧用药",
    description: "智能用药管理系统，药物相互作用检查和个性化方案。",
    badge: "新品",
    features: ["用药提醒", "药物查询", "智能推荐"],
  },
  {
    icon: HeartPulse,
    title: "慢病管理",
    description: "针对慢性病患者的全周期管理平台，远程诊疗服务。",
    badge: "企业版",
    features: ["病情追踪", "健康干预", "远程诊疗"],
  },
]

export function ProductsSection() {
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
    <section id="products" ref={sectionRef} className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Badge variant="outline" className="mb-6 px-4 py-1.5 text-xs uppercase tracking-widest">
            产品矩阵
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            全方位 <span className="gradient-text">AI 健康</span>产品
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg leading-relaxed">
            我们打造了覆盖健康管理全场景的AI产品矩阵，为用户提供专业、便捷、个性化的健康服务。
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`group relative p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm card-hover transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <product.icon className="w-7 h-7 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs font-normal">
                    {product.badge}
                  </Badge>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary group/btn">
                  <span className="text-sm">了解详情</span>
                  <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Button variant="outline" size="lg" className="rounded-full px-8 group">
            查看全部产品
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
