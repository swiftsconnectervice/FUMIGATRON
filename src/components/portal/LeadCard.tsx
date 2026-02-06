import React from 'react';
import { Lead } from '../../types';

interface LeadCardProps {
  lead: Lead;
}

export function LeadCard({ lead }: LeadCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatPhone = (phone: string) => {
    // Remove non-digits and format for tel: link
    return phone.replace(/\D/g, '');
  };

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
          <span className="material-icons-outlined text-brand-green">person</span>
        </div>
        <div>
          <p className="font-bold text-gray-900">{lead.name}</p>
          <p className="text-sm text-gray-500">{lead.service} • {formatDate(lead.created_at)}</p>
        </div>
      </div>
      <a
        href={`tel:${formatPhone(lead.phone)}`}
        className="flex items-center gap-2 bg-brand-green hover:bg-brand-forest text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
      >
        <span className="material-icons-outlined text-sm">phone</span>
        Llamar
      </a>
    </div>
  );
}
