-- ── 홍천표 블로그 DB 스키마 ──────────────────────────

CREATE TABLE posts (
  id            uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title         text NOT NULL,
  slug          text UNIQUE NOT NULL,
  category      text NOT NULL,
  excerpt       text,
  content       text,
  tags          text[],
  published     boolean DEFAULT false,
  reading_time  integer,
  cover_image   text,
  created_at    timestamptz DEFAULT now(),
  updated_at    timestamptz DEFAULT now()
);

-- 카테고리 제약조건
ALTER TABLE posts ADD CONSTRAINT posts_category_check
  CHECK (category IN ('supermarket', 'faith', 'family', 'misc'));

-- RLS (Row Level Security)
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- 모든 사용자가 published=true 포스트 조회 가능
CREATE POLICY "Published posts are public" ON posts
  FOR SELECT USING (published = true);

-- updated_at 자동 갱신 함수
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER posts_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- 성능을 위한 인덱스
CREATE INDEX idx_posts_slug         ON posts(slug);
CREATE INDEX idx_posts_category     ON posts(category);
CREATE INDEX idx_posts_published    ON posts(published);
CREATE INDEX idx_posts_created_at   ON posts(created_at DESC);
