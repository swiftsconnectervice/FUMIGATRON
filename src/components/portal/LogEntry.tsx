import React from 'react';
import { SystemLog, ACTION_TYPE_ICONS } from '../../types';

interface LogEntryProps {
  log: SystemLog;
}

export function LogEntry({ log }: LogEntryProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getActionLabel = (type: string) => {
    switch (type) {
      case 'security': return 'Seguridad';
      case 'speed': return 'Rendimiento';
      case 'content': return 'Contenido';
      default: return type;
    }
  };

  const getActionColor = (type: string) => {
    switch (type) {
      case 'security': return 'bg-blue-50 text-blue-600';
      case 'speed': return 'bg-yellow-50 text-yellow-600';
      case 'content': return 'bg-green-50 text-brand-green';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${getActionColor(log.action_type)}`}>
        <span className="text-xl">{ACTION_TYPE_ICONS[log.action_type]}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded ${getActionColor(log.action_type)}`}>
            {getActionLabel(log.action_type)}
          </span>
          <span className="text-xs text-gray-400">{formatDate(log.created_at)}</span>
        </div>
        <p className="text-gray-700">{log.message}</p>
      </div>
    </div>
  );
}
