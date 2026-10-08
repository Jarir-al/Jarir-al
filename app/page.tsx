import React from 'react';
import { Hero } from '@/app/hero'; // Adjust path if using a different directory layout

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2d4a43] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. Hero Section */}
      <Hero />
    </main>
  );
}