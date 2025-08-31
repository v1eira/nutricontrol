import React, { useState } from 'react';
import { NutrientLimits } from '../domain/User';

export default function Settings({ limits, onSave, theme, onThemeChange }: {
  limits: NutrientLimits;
  onSave: (limits: NutrientLimits) => void;
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
}) {
  const [potassium, setPotassium] = useState<number | ''>(limits.potassium);
  const [phosphorus, setPhosphorus] = useState<number | ''>(limits.phosphorus);
  const [protein, setProtein] = useState<number | ''>(limits.protein);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (potassium && phosphorus && protein) {
      onSave({ potassium, phosphorus, protein });
    }
  }

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSave} className="bg-surface rounded-lg shadow-md p-8 flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-text-primary">Configurações</h2>
        
        <div className="flex flex-col gap-4">
          <div>
            <label className="font-semibold text-text-secondary">Limite diário de potássio (mg)</label>
            <input className="input-style" type="number" value={potassium} onChange={e => setPotassium(e.target.value === '' ? '' : Number(e.target.value))} required />
          </div>
          <div>
            <label className="font-semibold text-text-secondary">Limite diário de fósforo (mg)</label>
            <input className="input-style" type="number" value={phosphorus} onChange={e => setPhosphorus(e.target.value === '' ? '' : Number(e.target.value))} required />
          </div>
          <div>
            <label className="font-semibold text-text-secondary">Limite diário de proteína (g)</label>
            <input className="input-style" type="number" value={protein} onChange={e => setProtein(e.target.value === '' ? '' : Number(e.target.value))} required />
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="font-semibold text-text-secondary">Tema:</span>
          <div className="flex gap-2">
            <button type="button" className={`px-4 py-2 rounded-md transition-colors ${theme === 'light' ? 'bg-primary text-text-on-primary' : 'bg-surface text-text-primary hover:bg-gray-700'}`} onClick={() => onThemeChange('light')} disabled={theme === 'light'}>
              Claro
            </button>
            <button type="button" className={`px-4 py-2 rounded-md transition-colors ${theme === 'dark' ? 'bg-primary text-text-on-primary' : 'bg-surface text-text-primary hover:bg-gray-300'}`} onClick={() => onThemeChange('dark')} disabled={theme === 'dark'}>
              Escuro
            </button>
          </div>
        </div>

        <button type="submit" className="mt-6 px-4 py-2 bg-primary text-text-on-primary rounded hover:bg-primary-hover transition-colors w-full">Salvar</button>
      </form>
    </div>
  );
}
