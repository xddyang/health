"use client"

import { useRef, useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, Calendar } from "lucide-react"

const news = [
  {
    category: "融资动态",
    title: "睿肤云图完成C轮融资，估值超10亿美元",
    description: "本轮融资将用于加速AI医疗产品研发和海外市场拓展，进一步巩固行业领先地位。",
    date: "2028-03-15",
    featured: true,
  },
  {
    category: "产品发布",
    title: "肤康AI 3.0版本正式上线，识别准确率提升30%",
    description: "新版本采用最新的深度学习模型，支持更多皮肤问题类型的识别。",
    date: "2028-03-10",
    featured: false,
  },
  {
    category: "合作伙伴",
    title: "携手协和医院，共建AI辅助诊断平台",
    description: "双方将在AI辅助诊断、医疗数据分析等领域展开深度合作。",
    date: "2028-03-05",
    featured: false,
  },
  {
    category: "行业认可",
    title: "入选「2028中国AI健康企业50强」榜单",
    description: "凭借领先的技术实力和优秀的市场表现，公司荣登权威行业榜单。",
    date: "2028-02-28",
    featured: false,
  },
]

export function NewsSection() {
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

  const featuredNews = news.find(n => n.featured)
  const otherNews = news.filter(n => !n.featured)

  return (
    <section id="news" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div>
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-xs uppercase tracking-widest">
              新闻动态
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              最新资讯
            </h2>
          </div>
          <Button variant="outline" className="rounded-full group">
            查看全部
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* News Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured News */}
          {featuredNews && (
            <div 
              className={`group relative p-8 rounded-3xl bg-card border border-border card-hover cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-primary/10 text-primary border-0">{featuredNews.category}</Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {featuredNews.date}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredNews.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {featuredNews.description}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary w-fit group/btn">
                  <span>阅读全文</span>
                  <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          )}

          {/* Other News */}
          <div className="space-y-4">
            {otherNews.map((item, index) => (
              <div 
                key={index} 
                className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 card-hover cursor-pointer transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
