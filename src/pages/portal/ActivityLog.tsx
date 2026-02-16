import React, { useEffect, useState } from 'react';
import { PortalLayout } from '../../components/portal/PortalLayout';
import { LogEntry } from '../../components/portal/LogEntry';
import { getAllLogs, createLog } from '../../lib/logs';
import { SystemLog, ActionType } from '../../types';

export function ActivityLog() {
  const [logs, setLogs] = useState<SystemLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Form state
  const [actionType, setActionType] = useState<ActionType>('content');
  const [message, setMessage] = useState('');
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const fetchLogs = async () => {
    try {
      const data = await getAllLogs();
      setLogs(data);
    } catch (err) {
      setError('No se pudieron cargar los registros');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setSaving(true);
    setSaveError(null);

    try {
      const newLog = await createLog({
        action_type: actionType,
        message: message.trim()
      });
      setLogs([newLog, ...logs]);
      setMessage('');
    } catch (err) {
      setSaveError('No se pudo guardar el registro');
    } finally {
      setSaving(false);
    }
  };

  return (
    <PortalLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black text-gray-900">Registro de Actividad</h1>
          <p className="text-gray-500 mt-1">Historial de mantenimiento y actualizaciones</p>
        </div>

        {/* Add Log Form */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Agregar Registro</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {saveError && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm">
                {saveError}
              </div>
            )}
            
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Tipo
                </label>
                <select
                  value={actionType}
                  onChange={(e) => setActionType(e.target.value as ActionType)}
                  className="w-full bg-gray-50 border-transparent focus:border-brand-green focus:ring-0 rounded-xl px-4 py-3"
                >
                  <option value="security">Seguridad</option>
                  <option value="speed">Rendimiento</option>
                  <option value="content">Contenido</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Mensaje
                </label>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ej: Actualización de fotos de temporada"
                  className="w-full bg-gray-50 border-transparent focus:border-brand-green focus:ring-0 rounded-xl px-4 py-3"
                />
              </div>
              
              <div className="flex items-end">
                <button
                  type="submit"
                  disabled={saving || !message.trim()}
                  className="w-full bg-brand-green hover:bg-brand-forest text-white py-3 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {saving ? 'Guardando...' : 'Agregar'}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Logs List */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-green"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl">
            {error}
          </div>
        ) : logs.length === 0 ? (
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-icons-outlined text-gray-400 text-3xl">history</span>
            </div>
            <p className="text-gray-500">No hay registros todavía</p>
            <p className="text-sm text-gray-400 mt-1">Agrega tu primer registro de actividad</p>
          </div>
        ) : (
          <div className="space-y-3">
            {logs.map((log) => (
              <LogEntry key={log.id} log={log} />
            ))}
          </div>
        )}
      </div>
    </PortalLayout>
  );
}
