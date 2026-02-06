import React, { useEffect, useState } from 'react';
import { PortalLayout } from '../../components/portal/PortalLayout';
import { StatCard } from '../../components/portal/StatCard';
import { LeadCard } from '../../components/portal/LeadCard';
import { getLeadsThisMonth, getRecentLeads } from '../../lib/leads';
import { Lead } from '../../types';

const LEAD_VALUE = 500; // $500 per lead

export function Dashboard() {
  const [leadsThisMonth, setLeadsThisMonth] = useState<Lead[]>([]);
  const [recentLeads, setRecentLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [monthLeads, recent] = await Promise.all([
          getLeadsThisMonth(),
          getRecentLeads(10)
        ]);
        setLeadsThisMonth(monthLeads);
        setRecentLeads(recent);
      } catch (err) {
        setError('No se pudieron cargar los datos');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const pipelineValue = leadsThisMonth.length * LEAD_VALUE;

  return (
    <PortalLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">Resumen de rendimiento de tu sitio web</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-green"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl">
            {error}
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="grid md:grid-cols-2 gap-6">
              <StatCard
                title="Leads Este Mes"
                value={leadsThisMonth.length}
                icon="people"
                trend={leadsThisMonth.length > 0 ? `${leadsThisMonth.length} nuevos contactos` : undefined}
              />
              <StatCard
                title="Valor del Pipeline"
                value={`$${pipelineValue.toLocaleString()}`}
                icon="attach_money"
                trend={pipelineValue > 0 ? `$${LEAD_VALUE} por lead` : undefined}
              />
            </div>

            {/* Recent Leads */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Leads Recientes</h2>
              {recentLeads.length === 0 ? (
                <div className="bg-gray-50 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons-outlined text-gray-400 text-3xl">inbox</span>
                  </div>
                  <p className="text-gray-500">No hay leads todavía</p>
                  <p className="text-sm text-gray-400 mt-1">Los nuevos contactos aparecerán aquí</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentLeads.map((lead) => (
                    <LeadCard key={lead.id} lead={lead} />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </PortalLayout>
  );
}
