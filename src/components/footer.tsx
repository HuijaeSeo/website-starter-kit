import { Container } from "@/components/container"
import { Separator } from "@/components/ui/separator"

function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Starter. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              개인정보처리방침
            </a>
            <Separator orientation="vertical" className="h-4" />
            <a href="#" className="transition-colors hover:text-foreground">
              이용약관
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export { Footer }
