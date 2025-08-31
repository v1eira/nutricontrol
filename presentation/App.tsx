import React, { useState, useEffect } from 'react';
import Login from './Login';
import Settings from './Settings';
import Main from './Main';
import { NutrientLimits, User } from '../domain/User';
import { Food } from '../domain/Food';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import foodsData from '../infrastructure/foods.json';

const foods: Food[] = foodsData;

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [limits, setLimits] = useState<NutrientLimits>({ potassium: 2000, phosphorus: 800, protein: 60 });
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [consumptions, setConsumptions] = useState<Array<{ foodId: number; amount: number; date: string }>>([]);
  const [screen, setScreen] = useState<'login' | 'settings' | 'main'>(user ? 'main' : 'login');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  function handleLogin({ name, email }: { name: string; email: string }) {
    setUser({ id: '1', name, email, dailyLimits: limits, theme });
    setScreen('main');
  }

  function handleSaveLimits(newLimits: NutrientLimits) {
    setLimits(newLimits);
    setScreen('main');
  }

  function handleThemeChange(newTheme: 'light' | 'dark') {
    setTheme(newTheme);
  }

  function handleRegister(foodId: number, amount: number) {
    setConsumptions([...consumptions, { foodId, amount, date: new Date().toISOString() }]);
  }

  // Calcular progresso do dia
  const today = new Date().toISOString().slice(0, 10);
  const todayConsumptions = consumptions.filter(c => c.date.slice(0, 10) === today);
  const progress = foods.reduce((acc, food) => {
    const total = todayConsumptions.filter(c => c.foodId === food.id).reduce((sum, c) => sum + c.amount, 0);
    acc.potassium += (food.potassium * total) / food.portion;
    acc.phosphorus += (food.phosphorus * total) / food.portion;
    acc.protein += (food.protein * total) / food.portion;
    return acc;
  }, { potassium: 0, phosphorus: 0, protein: 0, limits });

  // Histórico
  const historyMap: { [date: string]: Array<{ food: Food; amount: number; time: string }> } = {};
  consumptions.forEach(c => {
    const d = new Date(c.date);
    const date = d.toISOString().slice(0, 10);
    const time = d.toTimeString().slice(0, 5);
    if (!historyMap[date]) historyMap[date] = [];
    const food = foods.find(f => f.id === c.foodId);
    if (food) historyMap[date].push({ food, amount: c.amount, time });
  });
  const history = Object.entries(historyMap).map(([date, items]) => ({ date, items }));

  const renderContent = () => {
    if (screen === 'login') {
      return <Login onLogin={handleLogin} />;
    }
    if (screen === 'settings') {
      return <Settings limits={limits} onSave={handleSaveLimits} theme={theme} onThemeChange={handleThemeChange} />;
    }
    if (screen === 'main' && user) {
      return <Main foods={foods} onRegister={handleRegister} progress={progress} history={history} />;
    }
    return null;
  };

  return (
    <div className="bg-background h-screen text-text-primary">
      <div className="flex h-full">
        {user && <Sidebar screen={screen} setScreen={setScreen} setUser={setUser} />}
        <main className="flex-1 p-4 pb-20 md:pb-4 overflow-y-auto">
          {renderContent()}
        </main>
        {user && <BottomNav screen={screen} setScreen={setScreen} setUser={setUser} />}
      </div>
    </div>
  );
}
