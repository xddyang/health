"use client"

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

export function FeaturesSection() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              核心优势
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              为什么选择
              <span className="text-primary block">智康科技</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              我们汇聚了顶尖的AI技术团队和医疗专家，致力于用科技推动医疗健康行业的数字化转型，让健康管理更智能、更便捷。
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">用户满意度</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">1000万+</div>
                <div className="text-sm text-muted-foreground">服务用户</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">合作医院</div>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
