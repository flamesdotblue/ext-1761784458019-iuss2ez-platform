import React from 'react';
import { MessageSquare, Users, Shield, BookOpen } from 'lucide-react';

const features = [
  {
    title: 'Project Posts',
    description:
      'Showcase your builds, art, research, and experiments. Attach links and media, tag courses and clubs.',
    icon: MessageSquare,
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Study Circles',
    description:
      'Create interest-based groups for classes, exams, hackathons, and study sprints with shared notes.',
    icon: Users,
    color: 'from-sky-500 to-cyan-500',
  },
  {
    title: 'Safe & Supportive',
    description:
      'Community guidelines, school email verification, moderation tools, and report workflows keep it healthy.',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Resource Hub',
    description:
      'Curate syllabi, cheatsheets, and references per course. Save and share with classmates easily.',
    icon: BookOpen,
    color: 'from-amber-500 to-orange-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Built for learning in public</h2>
          <p className="mt-3 text-slate-600">
            Everything you need to brainstorm, build, and belong — thoughtfully designed for student life.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article key={f.title} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${f.color} text-white flex items-center justify-center shadow-md`}>
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
