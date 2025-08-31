import React from 'react';
import HomeIcon from './HomeIcon';
import SettingsIcon from './SettingsIcon';
import LogoutIcon from './LogoutIcon';
import { User } from '../domain/User';

interface BottomNavProps {
  screen: 'main' | 'settings' | 'login';
  setScreen: (screen: 'main' | 'settings' | 'login') => void;
  setUser: (user: User | null) => void;
}

export default function BottomNav({ screen, setScreen, setUser }: BottomNavProps) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border flex justify-around p-2">
      <button onClick={() => setScreen('main')} className={`flex flex-col items-center gap-1 p-2 rounded ${screen === 'main' ? 'text-primary' : 'text-text-secondary'}`}>
        <HomeIcon />
        <span className="text-xs">Principal</span>
      </button>
      <button onClick={() => setScreen('settings')} className={`flex flex-col items-center gap-1 p-2 rounded ${screen === 'settings' ? 'text-primary' : 'text-text-secondary'}`}>
        <SettingsIcon />
        <span className="text-xs">Ajustes</span>
      </button>
      <button onClick={() => { setUser(null); setScreen('login'); }} className="flex flex-col items-center gap-1 p-2 rounded text-text-secondary">
        <LogoutIcon />
        <span className="text-xs">Sair</span>
      </button>
    </nav>
  );
}
