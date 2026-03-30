import Link from "next/link"
import { Zap, Paintbrush, Shield, Package, Layers, Sparkles } from "lucide-react"
import { Hero } from "@/components/hero"
import { FeatureCard } from "@/components/feature-card"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Zap,
    title: "Turbopack 기본 탑재",
    description:
      "Next.js 16의 기본 번들러 Turbopack으로 빠른 개발 경험을 제공합니다.",
  },
  {
    icon: Paintbrush,
    title: "TailwindCSS v4",
    description:
      "CSS-first 설정 방식으로 더 강력하고 유연한 스타일링이 가능합니다.",
  },
  {
    icon: Shield,
    title: "TypeScript Strict",
    description:
      "strict 모드가 활성화되어 모든 레이어에서 타입 안전성을 보장합니다.",
  },
  {
    icon: Package,
    title: "ShadcnUI 컴포넌트",
    description:
      "19개의 검증된 UI 컴포넌트가 사전 설치되어 즉시 사용 가능합니다.",
  },
  {
    icon: Layers,
    title: "App Router",
    description:
      "React Server Components를 활용한 Next.js 최신 라우팅 아키텍처를 사용합니다.",
  },
  {
    icon: Sparkles,
    title: "다크모드 지원",
    description:
      "next-themes로 시스템/라이트/다크 테마를 FOWT 없이 완벽하게 지원합니다.",
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* 기능 소개 섹션 */}
      <section className="border-t border-border py-24">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              모든 것이 준비되어 있습니다
            </h2>
            <p className="mt-4 text-muted-foreground">
              기반 작업 없이 바로 제품 개발에 집중하세요.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA 섹션 */}
      <section className="border-t border-border bg-muted/50 py-24">
        <Container className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            지금 바로 시작하세요
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            이 스타터킷을 클론해서 몇 분 안에 프로젝트를 시작하세요.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/about">더 알아보기</Link>
          </Button>
        </Container>
      </section>
    </>
  )
}
