import { supabase } from './supabase';
import { SystemLog } from '../types';

export async function createLog(log: Omit<SystemLog, 'id' | 'created_at'>): Promise<SystemLog> {
  const { data, error } = await supabase
    .from('system_logs')
    .insert(log)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getAllLogs(): Promise<SystemLog[]> {
  const { data, error } = await supabase
    .from('system_logs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}
