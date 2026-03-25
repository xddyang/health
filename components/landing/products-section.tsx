"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Scan, 
  MessageSquare, 
  Activity, 
  Brain, 
  Pill, 
  HeartPulse,
  ArrowRight
} from "lucide-react"

const products = [
  {
    icon: Scan,
    title: "肤康 AI",
    description: "智能皮肤健康检测系统，通过AI图像识别技术，精准分析皮肤状况，提供个性化护肤建议。",
    badge: "旗舰产品",
    features: ["AI皮肤检测", "在线问诊", "专家预约"],
    color: "from-cyan-500/20 to-teal-500/20",
  },
  {
    icon: MessageSquare,
    title: "智康问诊",
    description: "AI驱动的智能问诊助手，7x24小时在线，快速预诊分诊，连接专业医生团队。",
    badge: "热门",
    features: ["智能预诊", "病症分析", "医生匹配"],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: Activity,
    title: "健康监测",
    description: "实时健康数据监测与分析平台，整合多维度健康指标，构建个人健康档案。",
    badge: "企业版",
    features: ["实时监测", "数据分析", "健康报告"],
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    icon: Brain,
    title: "心理关怀",
    description: "AI心理健康评估与干预系统，提供专业心理测评、情绪管理和心理咨询服务。",
    badge: "即将推出",
    features: ["心理测评", "情绪追踪", "专业咨询"],
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    icon: Pill,
    title: "智慧用药",
    description: "智能用药管理系统，提供用药提醒、药物相互作用检查和个性化用药方案。",
    badge: "新品",
    features: ["用药提醒", "药物查询", "智能推荐"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: HeartPulse,
    title: "慢病管理",
    description: "针对慢性病患者的全周期管理平台，提供病情追踪、健康干预和医患互动服务。",
    badge: "企业版",
    features: ["病情追踪", "健康干预", "远程诊疗"],
    color: "from-violet-500/20 to-purple-500/20",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            产品矩阵
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            全方位 AI 健康产品
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            我们打造了覆盖健康管理全场景的AI产品矩阵，为用户提供专业、便捷、个性化的健康服务。
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {product.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                  了解详情
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
