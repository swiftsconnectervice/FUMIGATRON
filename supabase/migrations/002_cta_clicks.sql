-- CTA Click Tracking
-- Stores anonymous click events from CTA buttons across the site

CREATE TABLE IF NOT EXISTS cta_clicks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  button_id TEXT NOT NULL,
  page TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE cta_clicks ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert clicks (public tracking, fire-and-forget)
CREATE POLICY "Anyone can insert cta clicks"
  ON cta_clicks FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Authenticated users can read clicks (for dashboard)
CREATE POLICY "Authenticated users can read cta clicks"
  ON cta_clicks FOR SELECT
  TO authenticated
  USING (true);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_cta_clicks_created_at ON cta_clicks(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_cta_clicks_button_id ON cta_clicks(button_id);
