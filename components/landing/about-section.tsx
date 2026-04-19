"use client"

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
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Company Info */}
          <div>
            <Badge variant="secondary" className="mb-4">
              关于我们
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              用AI技术
              <span className="text-primary block">赋能健康未来</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              睿肤云图成立于2026年，是一家专注于AI+健康医疗领域的科技创新企业。我们的团队由来自顶级科技公司和医疗机构的专家组成，致力于用人工智能技术解决医疗健康领域的痛点问题。
            </p>
            <p className="text-muted-foreground mb-8">
              经过多年发展，我们已经形成了覆盖皮肤健康、智能问诊、健康监测、心理关怀、用药管理和慢病管理六大领域的产品矩阵，服务超过千万用户，与50多家医疗机构建立了深度合作。
            </p>
            
            {/* Values */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground mb-4">我们的价值观</h3>
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Timeline */}
          <div>
            <h3 className="font-semibold text-foreground mb-8 text-xl">发展历程</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <div className="text-primary font-bold mb-1">{milestone.year}</div>
                      <div className="text-muted-foreground text-sm">{milestone.event}</div>
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
