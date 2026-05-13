import Link from 'next/link';
import PostCard from '@/components/PostCard';
import { getPosts } from '@/lib/supabase';
import { Post } from '@/types';

export const revalidate = 3600;

const STATS = [
  { value: '70%', label: '매출 상승률' },
  { value: '40년+', label: '유통 현장 경험' },
  { value: '2,900', label: '공동세일전 참여 점포' },
  { value: '유일', label: '최후의 생존 점포' },
];

async function getRecentPosts(): Promise<Partial<Post>[]> {
  try {
    const posts = await getPosts({ limit: 6 });
    return posts;
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const posts = await getRecentPosts();

  return (
    <main className="pt-20">
      {/* ── 히어로 ── */}
      <section
        className="relative min-h-[820px] flex items-center justify-center overflow-hidden px-5 md:px-16 bg-grid-pattern"
        style={{
          background: 'linear-gradient(135deg, #eaf6f2 0%, #d1ddd8 50%, #8af3cc 100%)',
        }}
      >
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(240, 252, 248, 0.55)' }} />

        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.18em] uppercase shadow-sm"
            style={{ backgroundColor: 'rgba(36, 131, 103, 0.15)', color: '#006950', border: '1px solid rgba(0,105,80,0.2)' }}
          >
            골목상권의 혁신가
          </span>

          <h1
            className="font-serif font-semibold drop-shadow-sm"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.2', letterSpacing: '-0.02em', color: '#131e1b' }}
          >
            위기를 기회로 바꾼{' '}
            <br className="hidden md:block" />
            <span className="text-gradient font-bold">골목상권</span>의 혁신가
          </h1>

          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: '#3e4944', lineHeight: '1.7' }}
          >
            결핍에서 시작해 변화와 신뢰, 그리고 연대로
            <br className="hidden md:block" />
            동네 슈퍼마켓의 새로운 가능성을 증명한 홍천표 대표의 이야기
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Link
              href="/blog"
              className="px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: '#006950',
                color: '#ffffff',
                boxShadow: '0 10px 30px rgba(0, 105, 80, 0.2)',
              }}
            >
              이야기 읽기
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-full text-sm font-semibold border transition-all duration-300 hover:bg-[#006950] hover:text-white hover:-translate-y-1"
              style={{ borderColor: '#006950', color: '#006950' }}
            >
              소개
            </Link>
          </div>
        </div>
      </section>

      {/* ── 수치 바 ── */}
      <section
        className="py-12 border-y relative z-20"
        style={{ backgroundColor: '#dfebe6', borderColor: 'rgba(190, 201, 194, 0.4)' }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x" style={{ divideColor: '#bec9c2' }}>
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div className="font-serif text-3xl font-bold mb-2" style={{ color: '#006950' }}>
                  {stat.value}
                </div>
                <div className="text-xs font-semibold tracking-[0.05em]" style={{ color: '#3e4944' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 최신 글 ── */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-16 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2
              className="font-serif text-3xl font-semibold mb-2"
              style={{ color: '#131e1b', letterSpacing: '-0.01em' }}
            >
              최신 이야기
            </h2>
            <p className="text-sm" style={{ color: '#3e4944' }}>
              슈퍼마켓 현장에서 길어올린 이야기들
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold transition-colors duration-200 hover:opacity-70"
            style={{ color: '#006950' }}
          >
            전체 보기 →
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div
            className="text-center py-20 rounded-[14px] border"
            style={{ borderColor: 'rgba(190, 201, 194, 0.5)', backgroundColor: '#ffffff' }}
          >
            <p className="text-lg font-serif" style={{ color: '#3e4944' }}>
              첫 번째 글을 곧 만나보실 수 있습니다.
            </p>
          </div>
        )}

        {posts.length > 0 && (
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-block px-8 py-3 rounded-full text-sm font-semibold border transition-all duration-300 hover:bg-[#006950] hover:text-white"
              style={{ borderColor: '#006950', color: '#006950' }}
            >
              더 보기
            </Link>
          </div>
        )}
      </section>

      {/* ── 소개 미리보기 ── */}
      <section
        className="py-20 border-t"
        style={{ backgroundColor: '#e5f0ec', borderColor: 'rgba(190, 201, 194, 0.3)' }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-4"
              style={{ color: '#006950' }}
            >
              About
            </span>
            <h2
              className="font-serif text-3xl font-semibold mb-6"
              style={{ color: '#131e1b', lineHeight: '1.3', letterSpacing: '-0.01em' }}
            >
              판자촌 물장수에서<br />협동조합 이사장까지
            </h2>
            <p
              className="mb-6 leading-relaxed"
              style={{ color: '#3e4944', lineHeight: '1.7' }}
            >
              40년 넘는 유통 현장 경험으로 대형마트의 공세 속에서 살아남은
              단 하나의 동네 슈퍼마켓. 그 생존의 비결과 연대의 힘을 나눕니다.
            </p>
            <Link
              href="/about"
              className="inline-block px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              style={{ backgroundColor: '#006950', color: '#ffffff' }}
            >
              더 알아보기
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: '코사마트 대표', value: '2010년~현재' },
              { label: '나들가게 혁신', value: '2008~2010' },
              { label: '공동세일전', value: '2,900개 점포' },
              { label: '매출 성장', value: '70% ↑' },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-[14px] border"
                style={{ backgroundColor: '#ffffff', borderColor: 'rgba(190, 201, 194, 0.5)' }}
              >
                <div className="text-xs font-semibold tracking-wide mb-2" style={{ color: '#6e7a74' }}>
                  {item.label}
                </div>
                <div className="font-serif text-xl font-semibold" style={{ color: '#006950' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
