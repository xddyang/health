"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"

export function CtaSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                开启您的
                <span className="text-primary"> AI健康</span>
                之旅
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                立即联系我们，了解睿肤云图如何为您的企业或个人提供定制化的AI健康解决方案。
              </p>
              
              {/* Email Input */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    type="email" 
                    placeholder="输入您的邮箱" 
                    className="pl-10 h-12 bg-background/50 border-border"
                  />
                </div>
                <Button size="lg" className="h-12">
                  获取演示
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                我们会在24小时内与您联系。您的信息将被严格保密。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
