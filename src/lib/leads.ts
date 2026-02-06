import { supabase } from './supabase';
import { Lead } from '../types';

export async function createLead(lead: Omit<Lead, 'id' | 'created_at'>): Promise<Lead> {
  const { data, error } = await supabase
    .from('leads')
    .insert(lead)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getLeadsThisMonth(): Promise<Lead[]> {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
  
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .gte('created_at', startOfMonth)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function getRecentLeads(limit: number = 10): Promise<Lead[]> {
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data || [];
}
