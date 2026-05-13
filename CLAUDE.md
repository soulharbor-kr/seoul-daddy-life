# 홍천표 블로그 — Claude Code 용 컨텍스트

## 프로젝트 개요
- **홍천표 블로그** — 태그라인: "골목상권의 혁신가"
- GitHub: `soulharbor-kr/seoul-daddy-life`
- 기술스택: Next.js 16 + React 19 + Tailwind CSS v4 + Supabase + Railway

## 주요 경로
- `src/app/page.tsx` — 홈 (히어로 + 최신 글 + 소개 미리보기)
- `src/app/blog/page.tsx` — 블로그 목록 (카테고리 필터)
- `src/app/blog/[slug]/page.tsx` — 포스트 상세 (ReactMarkdown)
- `src/app/about/page.tsx` — 소개 (타임라인)
- `src/components/Header.tsx` — 글래스모피즘 네비게이션
- `src/lib/supabase.ts` — Supabase 클라이언트 + 쿼리 함수
- `src/types/index.ts` — Post 타입 + CATEGORIES 정의
- `scripts/seed_posts.py` — 포스트 수동 삽입 스크립트
- `database/schema.sql` — DB 스키마 (Supabase SQL Editor에서 수동 실행)

## Supabase
- 신규 프로젝트 (DieNo와 별도)
- 주요 테이블: `posts`
- **⚠️ `posts_category_check` 제약조건**: 허용값 `supermarket, faith, family, misc`
- 새 카테고리 추가 시 SQL Editor에서 제약조건 먼저 업데이트 필수

## Railway 환경변수
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 카테고리
- `supermarket` — 🏪 슈퍼마켓과 유통
- `faith` — ✝️ 신앙
- `family` — 👨‍👩‍👧‍👦 가족
- `misc` — ☕ 사부작 나눌거리들

## 새 포스트 수동 추가
1. `scripts/seed_posts.py` 참고하여 POSTS 배열에 추가
2. 필수 필드: `title, slug, category, excerpt, content, tags, published, reading_time, cover_image, created_at`
3. `cover_image` URL에 꺾쇠괄호 `<>` 포함 금지
4. 환경변수 설정 후: `py scripts/seed_posts.py`

## 재배포 강제 (ISR 캐시 갱신)
```bash
git commit --allow-empty -m "chore: trigger redeploy"
git push origin master
```

## 자주 부딪히는 함정
1. **Next.js 16**: 훈련 데이터와 API·컨벤션 다름. 반드시 docs 확인
2. **ISR 1시간 캐시**: DB 수정해도 즉시 반영 안됨. 재배포 트리거 필요
3. **posts_category_check**: 새 카테고리 시 SQL Editor 수동 실행 필수
4. **Windows 로컬 실행 시**: `py` 런처 사용, 한글 출력은 `sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')`
5. **searchParams**: Next.js 16에서 `await searchParams` 필요 (Promise 타입)

---

## 참고 — DieNo 프로젝트 (홍성완)
아래 내용은 이 레포와 무관한 DieNo 프로젝트 정보입니다.

## 사용자 프로필 (다이노 = 홍성완)
- 40대 중반, 대학 행정 20여년 / 창업지원단 5년
- 학부(경제+통계) → MBA → 박사(교육행정)
- 비개발자. Claude Code로 협업 개발
- 세 자녀 (발달장애 자녀 포함). 꿈: 대안학교 교장
- 이메일: `soulharbor.kr@gmail.com` / 알림용: `soulharbor.dj@gmail.com`

### ⚠️ 호칭·표현 주의
- **"교수님" 호칭 금지** — 교수가 아님 (행정가·창업지원 전문가)
- 언어: 한국어 (UI/콘텐츠 모두)
- 폰트: Pretendard + Noto Serif KR

## 작업 스타일
- **자율적 처리 선호** — 알아서 끝내고 꼭 필요한 것만 물어봄
- 실패·성공 피드백을 기억으로 저장하고 재사용
- 응답은 간결하게. 코드·결과 중심.

## 레포 구조

### dieno-blog (Next.js 16 + Supabase)
- **중요**: Next.js 16은 기존 지식과 다름. 코드 작성 전 `node_modules/next/dist/docs/` 확인
- ISR 캐시: 홈페이지 `revalidate = 3600` (1시간). 블로그 상세도 동일
- 주요 경로:
  - `src/app/page.tsx` — 홈
  - `src/app/blog/[slug]/page.tsx` — 포스트 (ReactMarkdown + remark-gfm 사용)
  - `src/app/about/page.tsx` — 소개
  - `src/components/BlogCard.tsx` — 포스트 카드
  - `scripts/seed_post_*.py` — 포스트 수동 삽입 스크립트 패턴

### dieno-automation (Python 3.11)
- Cron 기반 블로그 자동 생성 파이프라인
- 주요 모듈:
  - `scheduler.py` — 파이프라인 오케스트레이션
  - `modules/keyword_collector.py` — RSS·seed 키워드 수집
  - `modules/content_generator.py` — Claude API로 본문 생성 → Supabase 저장
  - `modules/content_reviewer.py` — AI 검수
  - `modules/sns_distributor.py` — Threads 자동 게시
- CI: `.github/workflows/ci.yml` (ruff + dry-run smoke test)
- **현재 모델**: `claude-sonnet-4-6` (2026-04-20 업그레이드, 이전: `claude-sonnet-4-20250514` EOL 2026-06-15)

## Supabase DB
- URL: `https://bisxvynummemxssglvkk.supabase.co`
- 주요 테이블: `posts`, `keywords`, `publish_queue`, `analytics`, `logs`
- **⚠️ `posts_category_check` 제약조건**: 카테고리를 추가하려면 반드시 SQL Editor에서 먼저 제약조건 업데이트
  - 허용값: `startup, ai_tech, learning, family, faith, sports, korea_life, skku_ai_edu, skku_ai_startup`
- 마이그레이션 파일: `dieno-automation/database/migrations/*.sql` (수동 실행 필요)

## 자주 쓰는 패턴

### 새 포스트 수동 추가
1. `dieno-blog/scripts/seed_post_*.py` 복제·수정
2. 필수 필드: `title, slug, category, excerpt, content, tags, published, reading_time, cover_image, featured_image_url, created_at`
3. `cover_image` URL에 **꺾쇠괄호 `<>` 포함 금지** — 이미지 깨짐 원인
4. `py scripts/seed_post_xxx.py` 실행

### Threads 공유
- `dieno-automation/scripts/share_prism_posts.py` 의 `TARGET_SLUGS` 수정 후 실행
- 환경변수: `THREADS_ACCESS_TOKEN`

### 재배포 강제 (ISR 캐시 갱신)
```bash
git commit --allow-empty -m "chore: trigger redeploy"
git push origin master
```

## Railway 환경변수 핵심
- `ANTHROPIC_API_KEY`, `TAVILY_API_KEY`, `UNSPLASH_ACCESS_KEY`
- `THREADS_ACCESS_TOKEN`
- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
- `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_USER`, `SMTP_PASS` (Gmail 앱 비밀번호)
- `ALERT_EMAIL=soulharbor.dj@gmail.com`

## 외부 서비스 레퍼런스
- Supabase 프로젝트: bisxvynummemxssglvkk
- GitHub: soulharbor-kr 조직
- Railway: dieno-blog / dieno-automation 서비스
- 도메인: Gabia (dieno.org)

## 자주 부딪히는 함정
1. **Next.js 16**: 훈련 데이터와 API·컨벤션 다름. 반드시 docs 확인
2. **ISR 1시간 캐시**: DB 수정해도 즉시 반영 안됨. 재배포 트리거 필요
3. **posts_category_check**: 새 카테고리 시 SQL Editor 수동 실행 필수
4. **Windows 로컬 실행 시**: `py` 런처 사용, git은 `/c/Program Files/Git/cmd/git.exe`, 한글 출력은 `sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')`
5. **scheduler 에러 메시지**: stdout이 아닌 알림 이메일로만 전송됨. 상세 사유는 `logs` 테이블에서 조회
6. **Threads 게시**: 컨테이너 생성 후 반드시 `time.sleep(3)` 후 publish
