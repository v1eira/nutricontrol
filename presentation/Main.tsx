import React, { useState } from 'react';
import { Food } from '../domain/Food';

export default function Main({ foods, onRegister, progress, history }: {
  foods: Food[];
  onRegister: (foodId: number, amount: number) => void;
  progress: { potassium: number; phosphorus: number; protein: number; limits: { potassium: number; phosphorus: number; protein: number } };
  history: Array<{ date: string; items: Array<{ food: Food; amount: number; time: string }> }>;
}) {
  const [selectedFood, setSelectedFood] = useState<number>(foods[0]?.id || 0);
  const [amount, setAmount] = useState<number | ''>('');

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    if (amount) {
      onRegister(selectedFood, amount);
      setAmount('');
    }
  }

  return (
    <div className="bg-surface rounded-lg shadow-md p-6 flex flex-col gap-6">
      <h2 className="text-xl font-bold mb-2 text-center text-text-primary">Registrar Consumo</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <div>
          <label className="font-semibold text-text-secondary">Alimento</label>
          <select className="input-style" value={selectedFood} onChange={e => setSelectedFood(Number(e.target.value))}>
            {foods.map(food => (
              <option key={food.id} value={food.id}>{food.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-semibold text-text-secondary">Quantidade (g)</label>
          <input className="input-style" type="number" value={amount} onChange={e => setAmount(e.target.value === '' ? '' : Number(e.target.value))} required />
        </div>
        <button type="submit" className="mt-2 px-4 py-2 bg-primary text-text-on-primary rounded hover:bg-primary-hover transition">Registrar</button>
      </form>
      <h3 className="text-lg font-bold mt-4 text-text-primary">Progresso diário</h3>
      <div className="flex flex-col gap-2">
        <div>
          <span className="font-semibold text-text-secondary">Potássio: {progress.potassium.toFixed(0)} / {progress.limits.potassium} mg</span>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-4 mt-1">
            <div className="bg-primary h-4 rounded" style={{ width: `${Math.min(100, (progress.potassium / progress.limits.potassium) * 100)}%` }} />
          </div>
        </div>
        <div>
          <span className="font-semibold text-text-secondary">Fósforo: {progress.phosphorus.toFixed(0)} / {progress.limits.phosphorus} mg</span>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-4 mt-1">
            <div className="bg-green-500 h-4 rounded" style={{ width: `${Math.min(100, (progress.phosphorus / progress.limits.phosphorus) * 100)}%` }} />
          </div>
        </div>
        <div>
          <span className="font-semibold text-text-secondary">Proteína: {progress.protein.toFixed(0)} / {progress.limits.protein} g</span>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-4 mt-1">
            <div className="bg-teal-500 h-4 rounded" style={{ width: `${Math.min(100, (progress.protein / progress.limits.protein) * 100)}%` }} />
          </div>
        </div>
      </div>
      <h3 className="text-lg font-bold mt-4 text-text-primary">Histórico</h3>
      <ul className="divide-y divide-border">
        {history.map(day => (
          <li key={day.date} className="py-2">
            <strong className="text-text-primary">{new Date(day.date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</strong>
            <ul className="ml-4 list-disc text-text-secondary">
              {day.items.map((item, idx) => (
                <li key={idx}>{item.time} - {item.amount}g de {item.food.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
