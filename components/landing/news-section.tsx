"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

const news = [
  {
    category: "融资动态",
    title: "睿肤云图完成C轮融资，估值超10亿美元",
    description: "本轮融资将用于加速AI医疗产品研发和海外市场拓展，进一步巩固行业领先地位。",
    date: "2028-03-15",
  },
  {
    category: "产品发布",
    title: "肤康AI 3.0版本正式上线，识别准确率提升30%",
    description: "新版本采用最新的深度学习模型，支持更多皮肤问题类型的识别，用户体验全面升级。",
    date: "2028-03-10",
  },
  {
    category: "合作伙伴",
    title: "携手协和医院，共建AI辅助诊断平台",
    description: "双方将在AI辅助诊断、医疗数据分析等领域展开深度合作，共同推进智慧医疗发展。",
    date: "2028-03-05",
  },
  {
    category: "行业认可",
    title: "入选「2028中国AI健康企业50强」榜单",
    description: "凭借领先的技术实力和优秀的市场表现，公司荣登权威行业榜单。",
    date: "2028-02-28",
  },
]

export function NewsSection() {
  return (
    <section id="news" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <Badge variant="secondary" className="mb-4">
              新闻动态
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              最新资讯
            </h2>
          </div>
          <Button variant="outline">
            查看全部
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item, index) => (
            <Card 
              key={index} 
              className="group border-border bg-card hover:border-primary/50 transition-colors cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{item.category}</Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
