import { supabase } from './supabase';

/**
 * Fire-and-forget CTA click tracking.
 * Does NOT block the UI — the click proceeds instantly.
 */
export function trackCTA(buttonId: string, page: string) {
  supabase
    .from('cta_clicks')
    .insert({ button_id: buttonId, page })
    .then(() => {})
    .catch(() => {});
}

/** Get total CTA clicks this month */
export async function getClicksThisMonth(): Promise<number> {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

  const { count, error } = await supabase
    .from('cta_clicks')
    .select('*', { count: 'exact', head: true })
    .gte('created_at', startOfMonth);

  if (error) throw error;
  return count ?? 0;
}

/** Get top N most-clicked buttons this month */
export async function getTopButtons(limit = 5): Promise<{ button_id: string; count: number }[]> {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

  const { data, error } = await supabase
    .from('cta_clicks')
    .select('button_id')
    .gte('created_at', startOfMonth);

  if (error) throw error;
  if (!data) return [];

  // Count occurrences client-side
  const counts: Record<string, number> = {};
  for (const row of data) {
    counts[row.button_id] = (counts[row.button_id] || 0) + 1;
  }

  return Object.entries(counts)
    .map(([button_id, count]) => ({ button_id, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}
