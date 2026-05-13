"""
홍천표 블로그 — 샘플 포스트 시드 스크립트
Usage: py scripts/seed_posts.py
환경변수: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
"""
import sys
import io
import os
from datetime import datetime, timezone, timedelta
from supabase import create_client

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

SUPABASE_URL = os.environ.get("SUPABASE_URL", "")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY", "")

if not SUPABASE_URL or not SUPABASE_KEY:
    print("❌ SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY 환경변수를 설정하세요.")
    sys.exit(1)

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

KST = timezone(timedelta(hours=9))

POSTS = [
    {
        "title": "나들가게에서 코사마트로 — 매장 리모델링 8,000만원의 결단",
        "slug": "nadle-to-kosamart-renovation",
        "category": "supermarket",
        "excerpt": "동네 슈퍼마켓이 살아남기 위한 유일한 방법은 무엇일까요? 저는 그 답을 '과감한 혁신과 투자'에서 찾았습니다.",
        "content": """동네 슈퍼마켓이 살아남기 위한 유일한 방법은 무엇일까요? 저는 그 답을 **'과감한 혁신과 투자'**에서 찾았습니다. 나들가게로 시작해 오랜 기간 지역 주민들과 호흡해왔지만, 대형 마트와 편의점의 공격적인 확장에 맞서기에는 기존의 방식만으로는 한계가 분명했습니다.

## 변화의 필요성을 직감하다

매출은 정체되어 있었고, 매장의 노후화는 고객의 발길을 돌리게 만드는 주요 원인이었습니다. 단순히 물건을 진열하고 파는 공간을 넘어, 쾌적하고 편리한 쇼핑 경험을 제공하는 공간으로 거듭나야 했습니다.

> "변화하지 않으면 도태된다는 위기감이 8,000만 원이라는 큰 결단을 내리게 한 원동력이었습니다."

## 8,000만원 투자의 세부 내역

리모델링은 단순히 외관을 바꾸는 것에 그치지 않았습니다. 상품 동선을 재배치하고, 신선 식품 코너를 대폭 강화하며, 에너지 효율이 높은 조명과 냉장 시설을 도입하는 등 시스템적인 혁신을 동반했습니다.

- **매장 레이아웃 전면 개편:** 고객 동선 최적화
- **신선 식품 인프라 확충:** 최신형 쇼케이스 도입
- **POS 및 재고 관리 시스템 업그레이드:** 데이터 기반 운영

결과는 놀라웠습니다. 리모델링 후 6개월 만에 매출은 **70% 상승**했고, 객단가 역시 눈에 띄게 증가했습니다.
""",
        "tags": ["유통혁신", "코사마트", "상생협력"],
        "published": True,
        "reading_time": 5,
        "cover_image": None,
        "created_at": datetime(2026, 5, 10, 9, 0, tzinfo=KST).isoformat(),
    },
    {
        "title": "대형마트의 공세 속에서 살아남은 단 하나의 동네 슈퍼",
        "slug": "surviving-hypermarket-competition",
        "category": "supermarket",
        "excerpt": "차별화된 상품 구성과 고객 맞춤형 서비스로 위기를 돌파한 그날의 생생한 현장 기록과 전략을 공개합니다.",
        "content": """1990년대 중반, 대형마트의 등장은 동네 슈퍼마켓에 사형선고나 다름없었습니다. 반경 500m 안에 있던 30개 가까운 경쟁 점포들이 하나둘 문을 닫았습니다.

## 왜 나만 살아남았는가

저의 생존 전략은 단순했습니다. **대형마트가 절대 할 수 없는 것을 하는 것.** 이름을 기억하고, 냉장고 사정을 알고, 생일을 챙기는 것. 그것이 동네 슈퍼마켓의 본질적인 경쟁력이었습니다.

> "고객은 상품을 사러 오는 것이 아니라, 신뢰를 사러 온다."

## 차별화 전략 3가지

1. **지역 특화 상품 큐레이션** — 대형마트에 없는 지역 농산물과 수제품
2. **관계 기반 서비스** — 단골 고객 데이터를 수기로 관리하며 맞춤 서비스
3. **배달 네트워크** — 반경 1km 무료 당일 배달

이 세 가지 차별점 덕분에 저는 마지막으로 남은 점포가 될 수 있었습니다.
""",
        "tags": ["생존전략", "차별화", "골목상권"],
        "published": True,
        "reading_time": 6,
        "cover_image": None,
        "created_at": datetime(2026, 4, 20, 9, 0, tzinfo=KST).isoformat(),
    },
    {
        "title": "시련 속에서 만난 신앙, 경영의 마중물이 되다",
        "slug": "faith-as-foundation-of-business",
        "category": "faith",
        "excerpt": "어려운 시기에 버팀목이 되어준 신앙이 어떻게 비즈니스 결정과 경영 철학에 영향을 미쳤는지 나눕니다.",
        "content": """2010년, 저의 사업은 최대 위기를 맞았습니다. 무리하게 확장한 유니온 슈퍼마켓 체인이 줄도산하면서, 평생 일궈온 모든 것이 한순간에 무너지는 듯했습니다.

## 바닥에서 만난 신앙

그 시절 저는 처음으로 무릎을 꿇었습니다. 인간의 힘으로는 도저히 감당할 수 없는 상황 앞에서, 저는 기도를 배웠습니다.

> "사람이 마음으로 자기의 길을 계획할지라도 그 걸음을 인도하시는 분은 여호와시니라" (잠언 16:9)

## 신앙이 경영에 미친 3가지 변화

**첫째, 탐욕을 내려놓았습니다.** 더 이상 '얼마나 많이 버느냐'가 아닌 '어떻게 나눌 것인가'를 생각하게 되었습니다.

**둘째, 직원을 다르게 보기 시작했습니다.** 이윤을 창출하는 도구가 아닌, 함께 성장할 동반자로 여기게 되었습니다.

**셋째, 위기를 두려워하지 않게 되었습니다.** 최악의 상황에서도 내일이 있다는 믿음이 흔들리지 않게 되었습니다.

그 이후 재건한 사업은 이전보다 훨씬 단단했습니다. 신뢰라는 보이지 않는 자산이 쌓였기 때문입니다.
""",
        "tags": ["신앙", "경영철학", "회복탄력성"],
        "published": True,
        "reading_time": 4,
        "cover_image": None,
        "created_at": datetime(2026, 3, 15, 9, 0, tzinfo=KST).isoformat(),
    },
    {
        "title": "가족이 심어준 신의(信義)의 뿌리",
        "slug": "family-values-root-of-trust",
        "category": "family",
        "excerpt": "대를 이어 내려오는 가족의 가르침이 지금의 신뢰 기반 사업을 만드는 데 어떤 결정적 역할을 했는지 이야기합니다.",
        "content": """어머니는 항상 말씀하셨습니다. "사람한테 빚지지 마라. 받은 은혜는 반드시 갚아라."

## 신용의 DNA

가난했지만 우리 가족은 항상 약속을 지켰습니다. 외상값은 반드시 갚았고, 빌린 물건은 더 좋은 상태로 돌려주었습니다. 어린 시절 그 모습을 보며 저는 '신용'이 가장 귀한 자산임을 배웠습니다.

> "내가 물건을 팔 때마다 어머니의 얼굴이 떠올랐습니다. 이 사람이 어머니라면, 이렇게 팔 수 있을까?"

## 사업으로 이어진 가족의 가르침

세 가지 원칙은 평생 변하지 않았습니다.

1. **약속은 죽어도 지킨다** — 납품업체와의 신뢰가 위기 때 빛을 발했습니다
2. **손님 앞에서 거짓말하지 않는다** — 유통기한이 임박한 상품은 솔직하게 말했습니다
3. **직원을 가족처럼** — 오래된 직원일수록 더 대우받아야 합니다

이 원칙들이 저를 살아남게 한 진짜 이유라고 생각합니다.
""",
        "tags": ["가족", "신의", "경영원칙"],
        "published": True,
        "reading_time": 5,
        "cover_image": None,
        "created_at": datetime(2026, 2, 28, 9, 0, tzinfo=KST).isoformat(),
    },
    {
        "title": "명동까지 자전거로 계란 배달하던 중학생",
        "slug": "bicycle-delivery-boy-dreams",
        "category": "misc",
        "excerpt": "어린 시절, 무거운 자전거 페달을 밟으며 배웠던 책임감과 땀의 가치에 대한 회고.",
        "content": """열두 살이었습니다. 학교를 마치면 곧장 집으로 달려가 아버지를 도왔습니다. 자전거 뒤에 계란 판을 가득 싣고 명동까지 배달을 나가는 일이었습니다.

## 계란 한 판의 무게

그 시절 계란 한 판은 30개. 10판을 실으면 자전거가 무거워서 오르막길에서는 끌고 가야 했습니다. 여름엔 땀으로 옷이 흠뻑 젖었고, 겨울엔 손가락이 곱아서 바구니 손잡이를 제대로 잡을 수 없었습니다.

> "그때는 힘들었지만, 지금 생각하면 그 배달길이 저를 만든 학교였습니다."

## 배달에서 배운 것들

- **시간 약속의 중요성** — 식당 주방장님들은 아침 일찍 재료가 필요했습니다
- **계산하는 법** — 거스름돈을 틀리면 곤란했습니다
- **고객의 마음** — 더운 날 시원한 물 한 잔을 건네주시던 식당 사장님

지금도 슈퍼마켓을 운영하며 그 시절을 자주 떠올립니다. 그 무거운 자전거 페달이 있었기에 오늘의 제가 있습니다.
""",
        "tags": ["어린시절", "성장", "땀의가치"],
        "published": True,
        "reading_time": 4,
        "cover_image": None,
        "created_at": datetime(2026, 1, 20, 9, 0, tzinfo=KST).isoformat(),
    },
]


def seed():
    print("=== 홍천표 블로그 시드 포스트 삽입 ===\n")
    for post in POSTS:
        slug = post["slug"]
        resp = supabase.table("posts").select("id").eq("slug", slug).execute()
        if resp.data:
            print(f"  ⏭  이미 존재: {slug}")
            continue
        result = supabase.table("posts").insert(post).execute()
        if result.data:
            print(f"  ✅ 삽입 완료: {slug}")
        else:
            print(f"  ❌ 오류: {slug}")
    print("\n완료!")


if __name__ == "__main__":
    seed()
