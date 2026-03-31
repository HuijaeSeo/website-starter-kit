---
description: Playwright MCP로 Next.js 앱의 모든 페이지와 인터랙티브 컴포넌트를 자동 검사하고 오류를 리포트합니다.
allowed-tools: Bash, mcp__playwright__browser_navigate, mcp__playwright__browser_console_messages, mcp__playwright__browser_network_requests, mcp__playwright__browser_snapshot, mcp__playwright__browser_click, mcp__playwright__browser_take_screenshot, mcp__playwright__browser_evaluate, mcp__playwright__browser_wait_for
---

Playwright MCP를 사용해서 이 Next.js 앱의 모든 페이지와 인터랙티브 컴포넌트를 검사하고 오류를 리포트하세요.

## Phase 1 — 환경 준비

1. `lsof -i :3000` 또는 Bash 도구로 localhost:3000이 실행 중인지 확인하세요.
2. 서버가 실행 중이지 않으면 `npm run dev`를 백그라운드로 실행하고 5초 대기 후 진행하세요.

## Phase 2 — 페이지 순회 검사

아래 3개 페이지를 **순서대로** 검사하세요. 각 페이지마다:
- `browser_navigate`로 페이지 이동
- `browser_console_messages`(level: "error")로 콘솔 에러 수집
- `browser_network_requests`로 실패한 네트워크 요청(4xx, 5xx) 확인

검사할 페이지:
- `http://localhost:3000/`
- `http://localhost:3000/about`
- `http://localhost:3000/examples`

## Phase 3 — 인터랙티브 컴포넌트 테스트 (`/examples` 페이지)

`http://localhost:3000/examples`에서 아래 컴포넌트를 순서대로 테스트하세요. 각 조작 후 `browser_console_messages`(level: "error")로 에러를 확인하세요.

1. **Theme Toggle** (헤더의 테마 변경 버튼)
   - 버튼 클릭 → "다크" 선택 → 에러 확인
   - 다시 클릭 → "라이트" 선택 → 에러 확인

2. **Tabs** (카드 & 데이터 표시 섹션)
   - "분석" 탭 클릭 → 패널 내용 확인
   - "설정" 탭 클릭 → 패널 내용 확인

3. **Dialog** (오버레이 섹션)
   - "다이얼로그 열기" 버튼 클릭 → 다이얼로그 렌더링 확인
   - "취소" 버튼 클릭 → 닫힘 확인

4. **Toast** (오버레이 섹션)
   - "성공 토스트" 클릭 → 토스트 렌더링 확인
   - "오류 토스트" 클릭 → 토스트 렌더링 확인
   - "정보 토스트" 클릭 → 토스트 렌더링 확인

## Phase 4 — 결과 리포트

모든 검사가 끝나면 아래 형식으로 결과를 출력하세요:

```
## UI Check 결과

### 페이지 로드
| 페이지 | 상태 | 콘솔 에러 | 네트워크 에러 |
|--------|------|-----------|--------------|
| /      | ...  | ...       | ...          |
| /about | ...  | ...       | ...          |
| /examples | ... | ...    | ...          |

### 인터랙티브 컴포넌트
| 컴포넌트 | 동작 | 상태 | 비고 |
|----------|------|------|------|
| ...      | ...  | ...  | ...  |

### 요약
- 총 검사 항목: N개
- 통과: N개 / 실패: N개
```

오류가 발견된 경우 원인 분석과 수정 방법을 함께 제시하세요.
