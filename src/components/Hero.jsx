import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 pt-10 md:pt-16 lg:pt-24 items-center">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            <Sparkles size={14} />
            For students, by students
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            IdeaSphere — the social network for students
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 max-w-xl">
            Share projects, get feedback, form study groups, and turn ideas into impact. A playful, safe space where learning meets creativity.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white font-semibold hover:bg-slate-800">
              Explore Features
            </a>
            <a href="#feed" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-800 font-semibold hover:bg-slate-50">
              Peek the Feed
            </a>
          </div>
          <div className="mt-6 text-sm text-slate-500">
            Free for students. No ads. Community-moderated.
          </div>
        </div>
        <div className="relative h-[360px] sm:h-[420px] md:h-[500px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
            <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute -inset-10 bg-gradient-to-tr from-sky-100/40 via-transparent to-indigo-100/40 rounded-[2rem] blur-3xl" />
        </div>
      </div>
    </section>
  );
}
