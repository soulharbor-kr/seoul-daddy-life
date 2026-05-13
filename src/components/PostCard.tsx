import Link from 'next/link';
import Image from 'next/image';
import { Post, CATEGORIES } from '@/types';

interface PostCardProps {
  post: Partial<Post>;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function PostCard({ post }: PostCardProps) {
  const cat = post.category ? CATEGORIES[post.category] : null;

  return (
    <article
      className="card-hover rounded-[14px] border overflow-hidden flex flex-col h-full"
      style={{
        backgroundColor: '#ffffff',
        borderColor: 'rgba(190, 201, 194, 0.5)',
      }}
    >
      {/* 이미지 */}
      <div className="relative w-full aspect-video overflow-hidden" style={{ backgroundColor: '#e5f0ec' }}>
        {post.cover_image ? (
          <Image
            src={post.cover_image}
            alt={post.title || ''}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#e5f0ec' }}>
            <span className="text-4xl">{cat?.emoji || '📝'}</span>
          </div>
        )}
        {/* 카테고리 뱃지 */}
        {cat && (
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
              style={{ backgroundColor: cat.color, color: cat.textColor }}
            >
              {cat.emoji} {cat.label}
            </span>
          </div>
        )}
      </div>

      {/* 내용 */}
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/blog/${post.slug}`}>
          <h2
            className="font-serif text-xl font-semibold mb-3 line-clamp-2 transition-colors duration-200 hover:text-[#006950]"
            style={{ color: '#131e1b', lineHeight: '1.4' }}
          >
            {post.title}
          </h2>
        </Link>

        {post.excerpt && (
          <p
            className="text-sm mb-6 line-clamp-2 flex-grow"
            style={{ color: '#3e4944', lineHeight: '1.6' }}
          >
            {post.excerpt}
          </p>
        )}

        <div
          className="mt-auto flex items-center justify-between pt-4 border-t text-xs font-semibold"
          style={{ borderColor: 'rgba(190, 201, 194, 0.3)', color: '#6e7a74' }}
        >
          <span>{post.created_at ? formatDate(post.created_at) : ''}</span>
          {post.reading_time && <span>{post.reading_time}분 읽기</span>}
        </div>
      </div>
    </article>
  );
}
