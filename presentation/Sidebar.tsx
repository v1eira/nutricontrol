import React from 'react';
import HomeIcon from './HomeIcon';
import SettingsIcon from './SettingsIcon';
import LogoutIcon from './LogoutIcon';
import { User } from '../domain/User';

interface SidebarProps {
  screen: 'main' | 'settings' | 'login';
  setScreen: (screen: 'main' | 'settings' | 'login') => void;
  setUser: (user: User | null) => void;
}

export default function Sidebar({ screen, setScreen, setUser }: SidebarProps) {
  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-surface p-4 space-y-4 flex-shrink-0 border-r border-border">
      <h2 className="text-2xl font-bold text-primary">NutriControl</h2>
      <nav className="flex flex-col space-y-2">
        <button onClick={() => setScreen('main')} className={`flex items-center gap-2 p-2 rounded transition-colors ${screen === 'main' ? 'bg-primary text-text-on-primary' : 'hover:bg-primary-hover hover:text-text-on-primary'}`}>
          <HomeIcon /> Principal
        </button>
        <button onClick={() => setScreen('settings')} className={`flex items-center gap-2 p-2 rounded transition-colors ${screen === 'settings' ? 'bg-primary text-text-on-primary' : 'hover:bg-primary-hover hover:text-text-on-primary'}`}>
          <SettingsIcon /> Configurações
        </button>
      </nav>
      <button onClick={() => { setUser(null); setScreen('login'); }} className="flex items-center gap-2 p-2 rounded hover:bg-primary-hover hover:text-text-on-primary transition-colors">
        <LogoutIcon /> Sair
      </button>
    </aside>
  );
}
