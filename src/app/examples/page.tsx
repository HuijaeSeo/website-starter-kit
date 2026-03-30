"use client"

// 인터랙티브 데모(Dialog, Toast, Tabs 등)가 필요하므로 Client Component로 선언
import { useState } from "react"
import { toast } from "sonner"
import { User, Bell, Mail } from "lucide-react"

import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// 섹션 제목과 설명을 일관되게 렌더링하는 헬퍼
function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

export default function ExamplesPage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [notifications, setNotifications] = useState(false)

  return (
    <section className="py-16">
      <Container className="max-w-4xl space-y-20">
        {/* 페이지 헤더 */}
        <div>
          <Badge variant="outline" className="mb-4">ShadcnUI 컴포넌트</Badge>
          <h1 className="text-4xl font-bold tracking-tight">예제</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            이 스타터킷에 포함된 UI 컴포넌트 모음입니다.
          </p>
        </div>

        <Separator />

        {/* ───────────────────────────────────────
            섹션 1: 버튼 & 배지
        ─────────────────────────────────────── */}
        <div>
          <SectionHeader
            title="버튼 & 배지"
            description="Button의 6가지 variant와 Badge 컴포넌트입니다."
          />

          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg">Large</Button>
              <Button size="default">Default</Button>
              <Button size="sm">Small</Button>
              <Button size="xs">XSmall</Button>
              <Button size="icon"><User /></Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>
        </div>

        <Separator />

        {/* ───────────────────────────────────────
            섹션 2: 입력 폼
        ─────────────────────────────────────── */}
        <div>
          <SectionHeader
            title="입력 폼"
            description="Input, Textarea, Select, Checkbox, Switch 등 폼 컴포넌트입니다."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input id="name" placeholder="홍길동" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" type="email" placeholder="hong@example.com" />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="message">메시지</Label>
              <Textarea id="message" placeholder="메시지를 입력하세요..." rows={3} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">역할</Label>
              <Select>
                <SelectTrigger id="role">
                  <SelectValue placeholder="역할 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">관리자</SelectItem>
                  <SelectItem value="editor">편집자</SelectItem>
                  <SelectItem value="viewer">뷰어</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-4 justify-center">
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="cursor-pointer">이용약관에 동의합니다</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
                <Label htmlFor="notifications" className="cursor-pointer">
                  알림 {notifications ? "켜짐" : "꺼짐"}
                </Label>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* ───────────────────────────────────────
            섹션 3: 카드 & 데이터 표시
        ─────────────────────────────────────── */}
        <div>
          <SectionHeader
            title="카드 & 데이터 표시"
            description="Card, Avatar, Skeleton, Tabs 컴포넌트입니다."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {/* 프로필 카드 */}
            <Card>
              <CardHeader className="flex-row items-center gap-4 space-y-0">
                <Avatar className="size-12">
                  <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">shadcn</CardTitle>
                  <CardDescription>@shadcn</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Building accessible component libraries for the modern web.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm">
                  <Bell className="size-4" />
                  팔로우
                </Button>
                <Button size="sm">
                  <Mail className="size-4" />
                  메시지
                </Button>
              </CardFooter>
            </Card>

            {/* 스켈레톤 로딩 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">로딩 상태 (Skeleton)</CardTitle>
                <CardDescription>콘텐츠 로딩 중 표시되는 플레이스홀더</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
            </Card>
          </div>

          {/* 탭 */}
          <div className="mt-6">
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">개요</TabsTrigger>
                <TabsTrigger value="analytics">분석</TabsTrigger>
                <TabsTrigger value="settings">설정</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>개요</CardTitle>
                    <CardDescription>프로젝트의 전반적인 현황을 확인하세요.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      탭을 전환해 각 섹션의 내용을 확인할 수 있습니다.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>분석</CardTitle>
                    <CardDescription>상세 분석 데이터를 확인하세요.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">분석 데이터가 여기에 표시됩니다.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="settings" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>설정</CardTitle>
                    <CardDescription>프로젝트 설정을 변경하세요.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">설정 항목이 여기에 표시됩니다.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <Separator />

        {/* ───────────────────────────────────────
            섹션 4: 오버레이
        ─────────────────────────────────────── */}
        <div>
          <SectionHeader
            title="오버레이"
            description="Dialog, Tooltip, Toast(Sonner) 컴포넌트입니다. 버튼을 클릭해 확인하세요."
          />

          <div className="flex flex-wrap gap-4">
            {/* Dialog */}
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">다이얼로그 열기</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>정말 진행하시겠어요?</DialogTitle>
                  <DialogDescription>
                    이 작업은 되돌릴 수 없습니다. 계속 진행하면 데이터가 영구 삭제됩니다.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setDialogOpen(false)}>
                    취소
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      setDialogOpen(false)
                      toast.success("작업이 완료되었습니다.")
                    }}
                  >
                    확인
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Tooltip */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">툴팁 호버</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>마우스를 올리면 이 텍스트가 표시됩니다.</p>
              </TooltipContent>
            </Tooltip>

            {/* Toast variants */}
            <Button
              variant="outline"
              onClick={() => toast.success("저장되었습니다!", { description: "변경 사항이 성공적으로 저장되었습니다." })}
            >
              성공 토스트
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.error("오류가 발생했습니다.", { description: "잠시 후 다시 시도해 주세요." })}
            >
              오류 토스트
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.info("알림", { description: "새로운 업데이트가 있습니다." })}
            >
              정보 토스트
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
