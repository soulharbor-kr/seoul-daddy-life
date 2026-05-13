import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '소개 — 홍천표',
  description: '결핍에서 피어난 회복탄력성의 경영자. 1955년 경기도 가평 출생, 40년+ 유통 현장 경험으로 골목상권을 지켜온 홍천표 대표의 이야기.',
};

const TIMELINE = [
  { year: '1955', event: '경기도 가평군 청평면 출생', highlight: false },
  { year: '1971', event: '상경 및 취업 (봉제공장 등)', highlight: false },
  { year: '1976', event: '군 입대 (강원도 철원)', highlight: false },
  { year: '1980', event: '농심 입사 (영업사원)', highlight: false },
  { year: '1983', event: '새한(유통업체) 이직', highlight: false },
  { year: '1990', event: '독립 및 첫 슈퍼마켓 개업', highlight: false },
  { year: '1998', event: '코사마트 가맹점 운영 시작', highlight: false },
  { year: '2005', event: '유니온 슈퍼마켓 브랜드 론칭', highlight: false },
  { year: '2010', event: '사업 위기 및 구조조정', highlight: false },
  { year: '2013', event: '사업 재건 및 안정화', highlight: false },
  { year: '2016', event: '공동세일전 — 전국 2,900개 점포 연대', highlight: false },
  { year: '2018', event: '유통 혁신 세미나 참석 및 스마트 스토어 연구', highlight: false },
  { year: '2022', event: '무인 슈퍼마켓 운영 시작', highlight: true },
];

const VALUES = [
  { emoji: '🤝', title: '신뢰', desc: '30년이 넘는 단골 관계. 고객은 왕이 아닌 이웃이다.' },
  { emoji: '🌱', title: '혁신', desc: '아날로그의 온기에 디지털 기술을 더한다.' },
  { emoji: '💪', title: '회복탄력성', desc: '실패는 끝이 아니라 더 단단해지는 과정이다.' },
  { emoji: '🏘️', title: '연대', desc: '혼자 살아남는 것보다 함께 성장하는 것을 택한다.' },
];

export default function AboutPage() {
  return (
    <main className="pt-20 bg-grid-pattern min-h-screen" style={{ backgroundColor: '#f0fcf8' }}>
      {/* ── 프로필 섹션 ── */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* 왼쪽: 이미지 플레이스홀더 */}
          <div className="md:col-span-5">
            <div
              className="aspect-[4/3] rounded-[14px] overflow-hidden flex items-center justify-center"
              style={{
                backgroundColor: '#e5f0ec',
                border: '1px solid rgba(0, 105, 80, 0.1)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              }}
            >
              <div className="text-center p-8">
                <div className="text-7xl mb-4">🏪</div>
                <p className="font-serif text-lg font-semibold" style={{ color: '#006950' }}>
                  Hong Cheon-pyo
                </p>
                <p className="text-sm mt-1" style={{ color: '#3e4944' }}>
                  골목상권의 혁신가
                </p>
              </div>
            </div>
          </div>

          {/* 오른쪽: 소개 텍스트 */}
          <div className="md:col-span-7 md:pl-8 flex flex-col gap-6">
            <div>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase mb-5 border"
                style={{
                  backgroundColor: 'rgba(36, 131, 103, 0.1)',
                  color: '#006950',
                  borderColor: 'rgba(190, 201, 194, 0.4)',
                }}
              >
                ABOUT
              </span>
              <h1
                className="font-serif font-semibold mb-6"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: '1.25', letterSpacing: '-0.02em', color: '#131e1b' }}
              >
                결핍에서 피어난<br />회복탄력성의 경영자
              </h1>
            </div>

            <div className="space-y-5 text-base leading-relaxed" style={{ color: '#3e4944' }}>
              <p>
                1955년 경기도 가평의 작은 마을에서 태어난 저는, 어린 시절부터 가난과 싸우며 자랐습니다.
                중학교 진학조차 어려웠던 환경은 저에게 <strong style={{ color: '#131e1b' }}>'생존'과 '자립'</strong>이라는
                강렬한 동기를 부여했습니다. 농심과 새한에서 젊은 시절을 보내며 유통과 영업의 기초를 다졌고,
                현장에서 발로 뛰며 체득한 경험은 훗날 저의 경영 철학의 뼈대가 되었습니다.
              </p>
              <p>
                단순한 직장인을 넘어 내 사업을 일구겠다는 일념으로 코사마트와 유니온 슈퍼마켓 등
                여러 유통 사업을 이끌었습니다. 때로는 혹독한 실패를 맛보기도 했지만,
                실패는 끝이 아니라 더 단단해지기 위한 과정이었습니다.
                지역사회와 함께 호흡하며 신뢰를 쌓아온 시간들은 저의 가장 큰 자산입니다.
              </p>
              <p>
                이제는 무인 슈퍼마켓이라는 새로운 유통 혁신에 도전하고 있습니다.
                과거의 아날로그적 온기와 현대의 디지털 기술을 결합하여,
                지역 주민들에게 변함없는 가치를 제공하고자 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 핵심 가치 ── */}
      <section
        className="py-16 border-y"
        style={{ backgroundColor: '#e5f0ec', borderColor: 'rgba(190, 201, 194, 0.3)' }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <h2
            className="font-serif text-2xl font-semibold mb-10 text-center"
            style={{ color: '#131e1b' }}
          >
            경영 철학
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-[14px] border flex flex-col gap-3"
                style={{ backgroundColor: '#ffffff', borderColor: 'rgba(190, 201, 194, 0.5)' }}
              >
                <div className="text-3xl">{v.emoji}</div>
                <h3 className="font-serif text-lg font-semibold" style={{ color: '#006950' }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#3e4944' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 인생의 궤적 ── */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-16 py-20">
        <div className="mb-12">
          <h2
            className="font-serif text-2xl font-semibold mb-3"
            style={{ color: '#131e1b', letterSpacing: '-0.01em' }}
          >
            인생의 궤적
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#006950' }} />
        </div>

        <div
          className="relative rounded-[14px] p-8 md:p-12"
          style={{
            backgroundColor: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 105, 80, 0.1)',
          }}
        >
          {/* 세로선 */}
          <div
            className="absolute hidden sm:block w-px top-12 bottom-12"
            style={{ left: '119px', backgroundColor: '#bec9c2' }}
          />

          <div className="space-y-10 relative z-10">
            {TIMELINE.map((item) => (
              <div key={item.year} className="flex flex-col sm:flex-row gap-4 sm:gap-12 group">
                <div className="sm:w-24 shrink-0 pt-1">
                  <span
                    className="font-serif text-lg font-bold"
                    style={{ color: '#006950' }}
                  >
                    {item.year}
                  </span>
                </div>
                <div
                  className="relative flex-1 rounded-[10px] p-5 transition-all duration-200"
                  style={{
                    backgroundColor: item.highlight ? '#dfebe6' : 'rgba(255,255,255,0.6)',
                    border: item.highlight ? '1px solid rgba(0,105,80,0.2)' : '1px solid rgba(190,201,194,0.3)',
                    boxShadow: item.highlight ? '0 4px 12px rgba(0,105,80,0.08)' : 'none',
                  }}
                >
                  {/* 타임라인 점 */}
                  <div
                    className="absolute hidden sm:block w-3 h-3 rounded-full top-1/2 -translate-y-1/2 ring-4 transition-all duration-200"
                    style={{
                      left: '-54px',
                      backgroundColor: item.highlight ? '#006c51' : '#bec9c2',
                      outline: '4px solid #f0fcf8',
                    }}
                  />
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: item.highlight ? '#006950' : '#3e4944', fontWeight: item.highlight ? 600 : 400 }}
                  >
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
