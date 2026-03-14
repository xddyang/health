"use client"

import { useState } from "react"
import {
  Search,
  User,
  ChevronRight,
  Eye,
  ThumbsUp,
  Flame,
  Shield,
  Camera,
  MessageSquare,
} from "lucide-react"
import Image from "next/image"
import SearchPage from "./search-page"
import ArticleDetailPage from "./article-detail-page"
import ProfileSimplePage from "./profile-simple-page"

// MVP: 简化快捷入口，只保留核心功能
const quickActions = [
  { icon: Camera, label: "拍照识肤", color: "bg-primary/10 text-primary", action: "camera" },
  { icon: MessageSquare, label: "AI问诊", color: "bg-accent text-accent-foreground", action: "ai" },
]

export const articles = [
  {
    id: 1,
    image: "/images/article-eczema.jpg",
    tags: ["湿疹护理", "过敏防护"],
    match: "95%",
    title: "春季湿疹高发期，如何有效预防？",
    description: "春季气温回升，空气中花粉增多，是湿疹的高发季节。专家教你科学预防和护理方法。",
    views: "2.3万",
    likes: 856,
    content: `
## 什么是湿疹？

湿疹是一种常见的皮肤炎症，主要表现为皮肤红肿、瘙痒、起水疱等症状。春季是湿疹的高发期，主要原因包括：

1. **气温变化**：春季气温忽冷忽热，皮肤适应能力下降
2. **花粉过敏**：空气中花粉浓度升高，容易引发过敏反应
3. **空气湿度**：春季空气湿度变化大，影响皮肤屏障功能

## 预防措施

### 日常护理
- 保持皮肤清洁和滋润
- 使用温和无刺激的护肤品
- 避免过度清洁和热水洗浴

### 环境控制
- 保持室内适宜湿度（40%-60%）
- 定期清洁床上用品
- 减少接触过敏原

### 饮食建议
- 多吃富含维生素的蔬果
- 避免辛辣刺激食物
- 适量补充水分

## 何时就医

如果出现以下情况，建议及时就医：
- 症状持续加重
- 出现渗液或感染
- 影响日常生活和睡眠
    `,
    author: "李医生",
    authorTitle: "主任医师",
    publishDate: "2026-03-10",
    readTime: "5分钟",
  },
  {
    id: 2,
    image: "/images/article-acne.jpg",
    tags: ["痤疮治疗", "日常护理"],
    match: "88%",
    title: "告别反复痤疮，科学战痘全攻略",
    description: "痤疮困扰着众多年轻人，正确认识痤疮成因，采取科学治疗方案是关键。",
    views: "1.8万",
    likes: 632,
    content: `
## 痤疮的形成原因

痤疮（俗称青春痘）是一种毛囊皮脂腺的慢性炎症性疾病，主要由以下因素引起：

1. **皮脂分泌过多**：雄激素刺激皮脂腺分泌增加
2. **毛囊口堵塞**：角质细胞异常脱落，堵塞毛囊口
3. **细菌感染**：痤疮丙酸杆菌繁殖引发炎症
4. **炎症反应**：免疫系统对细菌的反应

## 科学治疗方案

### 轻度痤疮
- 外用维A酸类药物
- 过氧化苯甲酰
- 水杨酸护肤品

### 中度痤疮
- 外用抗生素
- 口服抗生素（需医生处方）
- 联合外用药物治疗

### 重度痤疮
- 口服异维A酸（需严格医学监督）
- 光动力治疗
- 激素治疗

## 日常护理要点

- 温和清洁，每日早晚各一次
- 选择无油配方护肤品
- 不要用手挤压痘痘
- 注意防晒
- 保持规律作息
    `,
    author: "王医生",
    authorTitle: "副主任医师",
    publishDate: "2026-03-08",
    readTime: "6分钟",
  },
  {
    id: 3,
    image: "/images/article-sunburn.jpg",
    tags: ["防晒知识", "光老化"],
    match: "82%",
    title: "紫外线与皮肤老化：你不知道的真相",
    description: "紫外线是皮肤老化的头号敌人，了解光老化机制，科学防晒抗衰老。",
    views: "3.1万",
    likes: 1204,
    content: `
## 紫外线的类型

紫外线根据波长分为三种：

- **UVA（320-400nm）**：穿透力最强，可达真皮层，是光老化的主要原因
- **UVB（280-320nm）**：主要作用于表皮，是晒伤的主要原因
- **UVC（100-280nm）**：被臭氧层吸收，基本无法到达地面

## 光老化的危害

长期紫外线照射会导致：
1. 皮肤松弛和皱纹
2. 色素沉着和色斑
3. 皮肤干燥粗糙
4. 增加皮肤癌风险

## 科学防晒指南

### 选择防晒产品
- SPF值：日常使用SPF30，户外活动SPF50+
- PA等级：PA+++以上
- 广谱防护：同时防护UVA和UVB

### 正确使用方法
- 出门前15-30分钟涂抹
- 用量足够（面部约一元硬币大小）
- 每2小时补涂一次
- 出汗或游泳后及时补涂

### 物理防晒
- 打遮阳伞
- 戴宽檐帽
- 穿防晒衣
- 避免正午时段外出
    `,
    author: "张医生",
    authorTitle: "皮肤科专家",
    publishDate: "2026-03-05",
    readTime: "4分钟",
  },
]

const hotTopics = [
  "#春季过敏怎么办",
  "#儿童湿疹护理",
  "#医美术后修复",
  "#敏感肌换季指南",
]

interface HomePageProps {
  onNavigateToAI?: () => void
  onOpenCamera?: () => void
}

export default function HomePage({ onNavigateToAI, onOpenCamera }: HomePageProps) {
  const [showSearch, setShowSearch] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null)
  const [showProfile, setShowProfile] = useState(false)

  // MVP: 简化版个人中心
  if (showProfile) {
    return <ProfileSimplePage onClose={() => setShowProfile(false)} />
  }

  if (showSearch) {
    return (
      <SearchPage
        onClose={() => setShowSearch(false)}
        onSelectArticle={(article) => {
          setShowSearch(false)
          setSelectedArticle(article)
        }}
      />
    )
  }

  if (selectedArticle) {
    return (
      <ArticleDetailPage
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    )
  }

  return (
    <div className="min-h-full bg-background pb-4">
      {/* Header */}
      <div className="bg-card px-5 pb-4 pt-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-primary">肤康</span>
          </div>
          {/* MVP: 简化个人中心入口 */}
          <button 
            onClick={() => setShowProfile(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors hover:bg-muted/80" 
            aria-label="个人中心"
          >
            <User className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Greeting */}
        <div className="mt-5">
          <h1 className="text-2xl font-bold text-foreground text-balance">
            早安，小明
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            今日天气晴朗，注意防晒护肤
          </p>
        </div>

        {/* Search */}
        <button
          onClick={() => setShowSearch(true)}
          className="mt-4 flex w-full items-center gap-3 rounded-xl bg-muted px-4 py-3"
        >
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            搜索皮肤问题、症状或疾病
          </span>
        </button>
      </div>

      {/* Quick Actions - MVP: 简化为2个核心入口 */}
      <div className="mt-4 grid grid-cols-2 gap-3 px-5">
        {quickActions.map((action) => {
          const Icon = action.icon
          return (
            <button
              key={action.label}
              onClick={() => {
                if (action.action === "camera" && onOpenCamera) {
                  onOpenCamera()
                } else if (action.action === "ai" && onNavigateToAI) {
                  onNavigateToAI()
                }
              }}
              className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-sm transition-transform active:scale-95"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${action.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-foreground">
                  {action.label}
                </span>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  {action.action === "camera" ? "AI智能分析皮肤" : "在线咨询问诊"}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Hot Topics */}
      <div className="mt-5 px-5">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <Flame className="h-4 w-4 shrink-0 text-destructive" />
          {hotTopics.map((topic) => (
            <button
              key={topic}
              onClick={() => setShowSearch(true)}
              className="shrink-0 rounded-full bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Section */}
      <div className="mt-5 px-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-5 w-1 rounded-full bg-primary" />
            <h2 className="text-base font-bold text-foreground">
              智能推荐
            </h2>
          </div>
          <button
            onClick={() => setShowSearch(true)}
            className="flex items-center gap-0.5 text-xs text-muted-foreground"
          >
            更多
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="mt-3 flex flex-col gap-4">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="overflow-hidden rounded-2xl bg-card shadow-sm transition-transform active:scale-[0.98] cursor-pointer"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute left-3 top-3 flex gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary px-3 py-1 text-[11px] font-medium text-primary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 backdrop-blur-sm">
                  <span className="text-xs font-bold text-primary">
                    {article.match}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-foreground text-balance">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {article.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5" />
                      {article.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="h-3.5 w-3.5" />
                      {article.likes}
                    </span>
                  </div>
                  <button className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                    查看详情
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
