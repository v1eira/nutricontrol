import React, { useState } from 'react';

export default function Login({ onLogin }: { onLogin: (user: { name: string; email: string }) => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onLogin({ name, email });
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-surface rounded-lg shadow-md p-8 flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-text-primary">Bem-vindo!</h2>
        <div>
          <label className="font-semibold text-text-secondary">Nome</label>
          <input className="input-style" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label className="font-semibold text-text-secondary">E-mail</label>
          <input className="input-style" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-primary text-text-on-primary rounded hover:bg-primary-hover transition-colors">Entrar</button>
      </form>
    </div>
  );
}
