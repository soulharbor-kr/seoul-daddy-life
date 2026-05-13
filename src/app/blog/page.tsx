import PostCard from '@/components/PostCard';
import { getPosts } from '@/lib/supabase';
import { CATEGORIES, Post, Category } from '@/types';

export const revalidate = 3600;

interface Props {
  searchParams: Promise<{ category?: string }>;
}

const ALL_CATEGORIES = [
  { slug: '', label: '전체', emoji: '📋' },
  ...Object.entries(CATEGORIES).map(([slug, info]) => ({
    slug,
    label: info.label,
    emoji: info.emoji,
  })),
];

async function fetchPosts(category?: string): Promise<Partial<Post>[]> {
  try {
    return await getPosts({ category: category || undefined });
  } catch {
    return [];
  }
}

export default async function BlogPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const posts = await fetchPosts(category);

  return (
    <main className="pt-20 min-h-screen bg-grid-pattern" style={{ backgroundColor: '#f0fcf8' }}>
      {/* ── 헤더 ── */}
      <div
        className="sticky top-20 z-40 border-b"
        style={{
          backgroundColor: 'rgba(240, 252, 248, 0.9)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderColor: 'rgba(190, 201, 194, 0.3)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-6 min-w-max py-4">
            {ALL_CATEGORIES.map((cat) => {
              const isActive = cat.slug === (category || '');
              return (
                <a
                  key={cat.slug}
                  href={cat.slug ? `/blog?category=${cat.slug}` : '/blog'}
                  className="text-sm font-semibold whitespace-nowrap pb-1 transition-colors duration-200"
                  style={
                    isActive
                      ? { color: '#006950', borderBottom: '2px solid #006950' }
                      : { color: '#3e4944' }
                  }
                >
                  {cat.emoji} {cat.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-16 py-16">
        {/* 섹션 타이틀 */}
        <div className="mb-12 text-center md:text-left">
          <h1
            className="font-serif font-semibold mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#131e1b', letterSpacing: '-0.02em' }}
          >
            {category ? CATEGORIES[category as Category]?.label : '전체 글'}
          </h1>
          <p style={{ color: '#3e4944' }}>슈퍼마켓 현장에서 길어올린 이야기들</p>
        </div>

        {/* 포스트 그리드 */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div
            className="text-center py-24 rounded-[14px] border"
            style={{ borderColor: 'rgba(190, 201, 194, 0.5)', backgroundColor: '#ffffff' }}
          >
            <div className="text-5xl mb-4">📝</div>
            <p className="font-serif text-xl" style={{ color: '#3e4944' }}>
              아직 작성된 글이 없습니다.
            </p>
            <p className="text-sm mt-2" style={{ color: '#6e7a74' }}>
              곧 새로운 이야기를 들려드릴게요.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
