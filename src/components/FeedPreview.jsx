import React from 'react';
import { User, ThumbsUp, MessageSquare } from 'lucide-react';

const samplePosts = [
  {
    id: 1,
    author: 'Ari • CS Freshman',
    title: 'Built a flashcard app that uses spaced repetition',
    body:
      'Open-source React + IndexedDB. Would love feedback on UX and sync strategies! Repo in comments.',
    likes: 128,
    comments: 23,
    tag: 'Projects',
  },
  {
    id: 2,
    author: 'Mina • Bio Major',
    title: 'Study circle: Cell Biology midterm sprint',
    body:
      'Daily 45-min Pomodoro, shared Anki deck, Sunday group review. Join if you are in BIO201!',
    likes: 76,
    comments: 14,
    tag: 'Study Circle',
  },
  {
    id: 3,
    author: 'Leo • Design',
    title: 'Poster critique — accessibility first',
    body:
      'Experimented with color contrast and type scales. Looking for critique on hierarchy and legibility.',
    likes: 92,
    comments: 31,
    tag: 'Critique',
  },
];

export default function FeedPreview() {
  return (
    <section id="feed" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">See what students are sharing</h2>
            <p className="mt-3 text-slate-600">A snapshot of the IdeaSphere feed — ideas, projects, and study groups.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-lg bg-slate-900 px-4 py-2 text-white text-sm font-semibold hover:bg-slate-800">Open App</a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {samplePosts.map((post) => (
            <article key={post.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-400 to-sky-500 text-white flex items-center justify-center">
                    <User size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{post.author}</div>
                    <div className="text-xs text-slate-500">{post.tag}</div>
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                  {post.likes + post.comments} interactions
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-lg text-slate-900">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{post.body}</p>
              <div className="mt-4 flex items-center gap-4 text-slate-600">
                <span className="inline-flex items-center gap-1 text-sm"><ThumbsUp size={16} /> {post.likes}</span>
                <span className="inline-flex items-center gap-1 text-sm"><MessageSquare size={16} /> {post.comments}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button className="rounded-lg bg-gradient-to-r from-indigo-600 to-sky-600 px-5 py-3 text-white font-semibold shadow hover:opacity-95">
            Create your first post
          </button>
        </div>
      </div>
    </section>
  );
}
