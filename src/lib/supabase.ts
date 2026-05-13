import { createClient } from '@supabase/supabase-js';
import { Post } from '@/types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function cleanUrl(u?: string | null): string | null {
  if (!u) return u ?? null;
  return u.replace(/[<>]/g, '').trim();
}

function sanitizePost<T extends Partial<Post>>(p: T): T {
  if (p.cover_image) p.cover_image = cleanUrl(p.cover_image) ?? undefined as never;
  return p;
}

export async function getPosts(options?: {
  category?: string;
  limit?: number;
  offset?: number;
}) {
  let query = supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .lte('created_at', new Date().toISOString())
    .order('created_at', { ascending: false });

  if (options?.category) {
    query = query.eq('category', options.category);
  }
  if (options?.limit) {
    query = query.limit(options.limit);
  }
  if (options?.offset) {
    query = query.range(options.offset, (options.offset + (options?.limit || 10)) - 1);
  }

  const { data, error } = await query;
  if (error) throw error;
  return (data as Post[]).map(sanitizePost);
}

export async function getPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) throw error;
  return sanitizePost(data as Post);
}

export async function getRelatedPosts(category: string, excludeSlug: string, limit = 3) {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, category, cover_image, created_at, reading_time')
    .eq('published', true)
    .eq('category', category)
    .neq('slug', excludeSlug)
    .lte('created_at', new Date().toISOString())
    .limit(limit);

  if (error) throw error;
  return (data as Partial<Post>[]).map(sanitizePost);
}
