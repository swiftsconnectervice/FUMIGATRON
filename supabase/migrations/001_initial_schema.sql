-- Growth OS Portal - Initial Schema
-- Run this in your Supabase SQL Editor to set up the database

-- ============================================
-- LEADS TABLE
-- Stores contact form submissions from the website
-- ============================================
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy: Authenticated users can read all leads
CREATE POLICY "Authenticated users can read leads"
  ON leads FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Anyone can insert leads (for public contact form)
CREATE POLICY "Anyone can insert leads"
  ON leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- ============================================
-- SYSTEM_LOGS TABLE
-- Stores maintenance and activity logs
-- ============================================
CREATE TABLE IF NOT EXISTS system_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  action_type TEXT NOT NULL CHECK (action_type IN ('security', 'speed', 'content')),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE system_logs ENABLE ROW LEVEL SECURITY;

-- Policy: Authenticated users can read logs
CREATE POLICY "Authenticated users can read logs"
  ON system_logs FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Authenticated users can insert logs
CREATE POLICY "Authenticated users can insert logs"
  ON system_logs FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- ============================================
-- INDEXES (for performance)
-- ============================================
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_system_logs_created_at ON system_logs(created_at DESC);
