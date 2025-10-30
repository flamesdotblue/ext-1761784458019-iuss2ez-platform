import React from 'react';
import { Rocket, Home, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white shadow-md">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-lg tracking-tight">IdeaSphere</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition-colors flex items-center gap-2">
            <Star size={16} />
            Features
          </a>
          <a href="#feed" className="hover:text-slate-900 transition-colors flex items-center gap-2">
            <Home size={16} />
            Feed
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Sign in
          </button>
          <button className="inline-flex rounded-lg bg-gradient-to-r from-indigo-600 to-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
