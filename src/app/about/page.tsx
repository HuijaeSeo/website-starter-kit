import type { Metadata } from "next"
import { Container } from "@/components/container"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "소개",
}

const stackItems = [
  { name: "Next.js 16", description: "App Router, React Server Components, Turbopack" },
  { name: "React 19", description: "최신 React 기능 (Actions, useFormStatus, etc.)" },
  { name: "TypeScript", description: "Strict 모드, 완전한 타입 안전성" },
  { name: "TailwindCSS v4", description: "CSS-first 설정, 향상된 성능" },
  { name: "ShadcnUI", description: "radix-nova 스타일, 19개 컴포넌트 사전 설치" },
  { name: "next-themes", description: "시스템/라이트/다크 테마, FOWT 방지" },
  { name: "lucide-react", description: "1000+ SVG 아이콘 라이브러리" },
  { name: "sonner", description: "토스트 알림 라이브러리" },
]

export default function AboutPage() {
  return (
    <section className="py-24">
      <Container className="max-w-3xl">
        <Badge variant="outline" className="mb-4">
          스타터킷 소개
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight">이 스타터킷에 대해</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          빠르게 웹 개발을 시작할 수 있도록 최신 기술 스택으로 구성된 Next.js
          스타터킷입니다. 불필요한 의존성 없이 필수적인 것만 포함했습니다.
        </p>

        <Separator className="my-10" />

        <h2 className="text-2xl font-bold tracking-tight">기술 스택</h2>
        <div className="mt-6 space-y-4">
          {stackItems.map((item) => (
            <div key={item.name} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
              <span className="w-36 shrink-0 font-medium">{item.name}</span>
              <span className="text-muted-foreground">{item.description}</span>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <h2 className="text-2xl font-bold tracking-tight">디렉토리 구조</h2>
        <pre className="mt-6 overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 text-sm">
          {`src/
├── app/              # Next.js App Router 페이지
├── components/
│   ├── ui/           # ShadcnUI 컴포넌트 (수정 금지)
│   ├── header.tsx    # 사이트 헤더 + 네비게이션
│   ├── footer.tsx    # 사이트 푸터
│   ├── container.tsx # 콘텐츠 너비 제한 래퍼
│   ├── hero.tsx      # 히어로 섹션
│   └── ...           # 커스텀 컴포넌트
└── lib/
    └── utils.ts      # cn() 유틸리티`}
        </pre>
      </Container>
    </section>
  )
}
