import { cn } from "@/lib/utils"

// 모든 페이지에서 일관된 콘텐츠 너비와 좌우 여백을 보장하기 위한 래퍼
function Container({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Container }
