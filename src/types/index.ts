export interface Lead {
  id: string;
  name: string;
  phone: string;
  service: string;
  created_at: string;
}

export interface SystemLog {
  id: string;
  action_type: 'security' | 'speed' | 'content';
  message: string;
  created_at: string;
}

export type ActionType = 'security' | 'speed' | 'content';

export const ACTION_TYPE_ICONS: Record<ActionType, string> = {
  security: 'shield',
  speed: 'bolt',
  content: 'edit_note',
};
