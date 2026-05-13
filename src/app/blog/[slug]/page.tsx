import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getPostBySlug, getRelatedPosts } from '@/lib/supabase';
import { CATEGORIES } from '@/types';
import PostCard from '@/components/PostCard';

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const cat = post.category ? CATEGORIES[post.category] : null;

  let related = [];
  try {
    if (post.category) {
      related = await getRelatedPosts(post.category, slug, 3);
    }
  } catch {
    related = [];
  }

  return (
    <main
      className="pt-[140px] pb-20 bg-grid-pattern relative min-h-screen"
      style={{ backgroundColor: '#f0fcf8' }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 relative z-10">
        {/* ── 포스트 헤더 ── */}
        <header className="max-w-[680px] mx-auto mb-12">
          {cat && (
            <div className="mb-6">
              <Link
                href={`/blog?category=${post.category}`}
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold transition-opacity hover:opacity-80"
                style={{ backgroundColor: cat.color, color: cat.textColor }}
              >
                {cat.emoji} {cat.label}
              </Link>
            </div>
          )}

          <h1
            className="font-serif font-semibold mb-6"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2rem)', lineHeight: '1.35', letterSpacing: '-0.01em', color: '#131e1b' }}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-sm mb-8" style={{ color: '#6e7a74' }}>
            <span>{formatDate(post.created_at)}</span>
            {post.reading_time && (
              <>
                <span>·</span>
                <span>{post.reading_time}분 읽기</span>
              </>
            )}
          </div>

          <div className="h-px w-full" style={{ backgroundColor: 'rgba(190, 201, 194, 0.4)' }} />
        </header>

        {/* ── 커버 이미지 ── */}
        {post.cover_image && (
          <div className="max-w-[680px] mx-auto mb-16">
            <div
              className="aspect-video w-full rounded-[14px] overflow-hidden relative"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid rgba(0,105,80,0.1)' }}
            >
              <Image
                src={post.cover_image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* ── 본문 ── */}
        <article className="prose-content mb-16">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {post.content || ''}
          </ReactMarkdown>
        </article>

        {/* ── 태그 ── */}
        {post.tags && post.tags.length > 0 && (
          <div className="max-w-[680px] mx-auto mb-12">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold border"
                  style={{
                    backgroundColor: '#e5f0ec',
                    borderColor: 'rgba(190, 201, 194, 0.5)',
                    color: '#3e4944',
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── 구분선 ── */}
        <div
          className="max-w-[680px] mx-auto mb-16 h-px"
          style={{ backgroundColor: 'rgba(190, 201, 194, 0.4)' }}
        />

        {/* ── 목록으로 돌아가기 ── */}
        <div className="max-w-[680px] mx-auto mb-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: '#006950' }}
          >
            <span>←</span> 블로그 목록으로
          </Link>
        </div>

        {/* ── 관련 글 ── */}
        {related.length > 0 && (
          <div className="pt-12 border-t" style={{ borderColor: 'rgba(190, 201, 194, 0.3)' }}>
            <h3
              className="font-serif text-2xl font-semibold mb-8 text-center"
              style={{ color: '#131e1b' }}
            >
              관련 글
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
