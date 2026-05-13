export type Category = 'supermarket' | 'faith' | 'family' | 'misc';

export const CATEGORIES: Record<Category, { label: string; emoji: string; color: string; textColor: string }> = {
  supermarket: {
    label: '슈퍼마켓과 유통',
    emoji: '🏪',
    color: '#006950',
    textColor: '#ffffff',
  },
  faith: {
    label: '신앙',
    emoji: '✝️',
    color: '#006c51',
    textColor: '#ffffff',
  },
  family: {
    label: '가족',
    emoji: '👨‍👩‍👧‍👦',
    color: '#006768',
    textColor: '#ffffff',
  },
  misc: {
    label: '사부작 나눌거리들',
    emoji: '☕',
    color: '#d9e5e1',
    textColor: '#3e4944',
  },
};

export interface Post {
  id: string;
  title: string;
  slug: string;
  category: Category;
  excerpt: string | null;
  content: string | null;
  tags: string[] | null;
  published: boolean;
  reading_time: number | null;
  cover_image: string | null;
  created_at: string;
  updated_at?: string | null;
}
