import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"
import { Badge } from "@/components/ui/badge"

function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center text-center">
        <Badge variant="outline" className="mb-6">
          Next.js 16 + TailwindCSS v4
        </Badge>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          모던 웹 개발을{" "}
          <span className="text-primary">빠르게 시작하세요</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Next.js, TailwindCSS v4, ShadcnUI로 구성된 클린한 스타터킷.
          필요한 것은 갖추고, 불필요한 것은 없앴습니다.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/about">
              시작하기
              {/* data-icon="inline-end" 는 Button의 radix-nova 스타일에서 아이콘 간격을 조정하는 속성 */}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub 보기
            </a>
          </Button>
        </div>
      </Container>
    </section>
  )
}

export { Hero }
