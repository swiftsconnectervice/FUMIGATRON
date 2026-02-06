import React from 'react';

interface StatusIndicatorProps {
  label: string;
  status: 'good' | 'warning' | 'error';
  description?: string;
}

export function StatusIndicator({ label, status, description }: StatusIndicatorProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'good': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusBg = () => {
    switch (status) {
      case 'good': return 'bg-green-50';
      case 'warning': return 'bg-yellow-50';
      case 'error': return 'bg-red-50';
      default: return 'bg-gray-50';
    }
  };

  return (
    <div className={`p-6 rounded-2xl ${getStatusBg()}`}>
      <div className="flex items-center gap-3 mb-2">
        <span className={`w-3 h-3 rounded-full ${getStatusColor()} animate-pulse`}></span>
        <span className="font-bold text-gray-900">{label}</span>
      </div>
      {description && (
        <p className="text-sm text-gray-500 ml-6">{description}</p>
      )}
    </div>
  );
}
