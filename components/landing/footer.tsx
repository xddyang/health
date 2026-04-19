import Link from "next/link"

const footerLinks = {
  products: {
    title: "产品",
    links: [
      { name: "肤康 AI", href: "#" },
      { name: "睿肤智诊", href: "#" },
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
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
            {/* Logo & Description */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
              <Link href="#" className="flex items-center gap-3 mb-6 group">
                <div className="relative w-10 h-10 rounded-xl bg-primary flex items-center justify-center overflow-hidden">
                  <span className="text-lg font-bold text-primary-foreground">睿</span>
                </div>
                <span className="text-xl font-semibold text-foreground">睿肤云图</span>
              </Link>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                用AI技术重新定义健康，让每个人都能享受科技带来的健康福祉。
              </p>
              <div className="flex gap-3">
                {["微信", "微博", "知乎"].map((platform) => (
                  <span 
                    key={platform} 
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-foreground mb-5">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
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
        <div className="py-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 睿肤云图. 保留所有权利.
          </p>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors duration-300">隐私政策</Link>
            <Link href="#" className="hover:text-primary transition-colors duration-300">服务条款</Link>
            <Link href="#" className="hover:text-primary transition-colors duration-300">Cookie 设置</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
