import React from 'react';
import { PortalLayout } from '../../components/portal/PortalLayout';
import { StatCard } from '../../components/portal/StatCard';
import { StatusIndicator } from '../../components/portal/StatusIndicator';

export function HealthStatus() {
  return (
    <PortalLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black text-gray-900">Salud del Sitio</h1>
          <p className="text-gray-500 mt-1">Estado y rendimiento de tu sitio web</p>
        </div>

        {/* Traffic Stats */}
        <div className="grid md:grid-cols-2 gap-6">
          <StatCard
            title="Visitas Totales"
            value="1,240"
            icon="visibility"
            trend="↑15% vs mes anterior"
          />
          <StatCard
            title="Tiempo Promedio"
            value="2:34"
            icon="schedule"
            trend="Minutos en el sitio"
          />
        </div>

        {/* Status Indicators */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Estado del Sistema</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <StatusIndicator
              label="Mobile Optimized"
              status="good"
              description="Tu sitio se ve perfecto en móviles"
            />
            <StatusIndicator
              label="Secure (SSL)"
              status="good"
              description="Certificado SSL activo y válido"
            />
            <StatusIndicator
              label="Speed Score"
              status="good"
              description="Carga en menos de 2 segundos"
            />
          </div>
        </div>

        {/* Info Note */}
        <div className="bg-blue-50 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
            <span className="material-icons-outlined text-blue-600">info</span>
          </div>
          <div>
            <p className="font-bold text-gray-900 mb-1">Datos de demostración</p>
            <p className="text-sm text-gray-600">
              Estos datos son de ejemplo para mostrar cómo se verá el panel cuando esté conectado a tus analytics reales.
            </p>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
