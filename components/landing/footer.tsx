import Link from "next/link"
import { Activity } from "lucide-react"

const footerLinks = {
  products: {
    title: "产品",
    links: [
      { name: "肤康 AI", href: "#" },
      { name: "智康问诊", href: "#" },
      { name: "健康监测", href: "#" },
      { name: "心理关怀", href: "#" },
      { name: "智慧用药", href: "#" },
      { name: "慢病管理", href: "#" },
    ],
  },
  solutions: {
    title: "解决方案",
    links: [
      { name: "个人健康管理", href: "#" },
      { name: "企业健康服务", href: "#" },
      { name: "医疗机构合作", href: "#" },
      { name: "保险公司合作", href: "#" },
    ],
  },
  company: {
    title: "公司",
    links: [
      { name: "关于我们", href: "#about" },
      { name: "新闻动态", href: "#news" },
      { name: "加入我们", href: "#" },
      { name: "联系我们", href: "#" },
    ],
  },
  support: {
    title: "支持",
    links: [
      { name: "帮助中心", href: "#" },
      { name: "隐私政策", href: "#" },
      { name: "服务条款", href: "#" },
      { name: "API 文档", href: "#" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Logo & Description */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
              <Link href="#" className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">智康科技</span>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                用AI技术重新定义健康，让每个人都能享受科技带来的健康福祉。
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">关注我们</span>
                <div className="flex gap-2">
                  {["微信", "微博", "知乎"].map((platform) => (
                    <span 
                      key={platform} 
                      className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 智康科技. 保留所有权利.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">隐私政策</Link>
            <Link href="#" className="hover:text-foreground transition-colors">服务条款</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookie 设置</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
