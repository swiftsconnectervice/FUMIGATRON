import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  trend?: string;
}

export function StatCard({ title, value, icon, trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{title}</p>
          <p className="text-3xl font-black text-gray-900">{value}</p>
          {trend && (
            <p className="text-sm text-brand-green font-medium mt-1 flex items-center gap-1">
              <span className="material-icons-outlined text-sm">trending_up</span>
              {trend}
            </p>
          )}
        </div>
        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
          <span className="material-icons-outlined text-brand-green text-2xl">{icon}</span>
        </div>
      </div>
    </div>
  );
}
