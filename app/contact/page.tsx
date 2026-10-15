'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'jarir.ali@outlook.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#2d4a43] text-white selection:bg-cyan-500 selection:text-slate-950 flex flex-col justify-between p-6 sm:p-10 md:p-14">
      {/* Top Header Bar matching hero entry theme */}
      <header className="flex items-start justify-between gap-6 border-b border-white/25 pb-4 text-xs uppercase tracking-[0.2em] text-white/65 sm:text-sm">
        <span>Contact</span>
        <span>
          <Link href="/" className="text-white/65 transition-colors hover:text-white">
            Jarir 101
          </Link>
        </span>
        <span>
          <Link href="/projects" className="text-white/65 transition-colors hover:text-white">
            Projects
          </Link>
        </span>
        <span>    
          <Link href="/contact" className="text-white underline decoration-white/40 underline-offset-4">
            Contact
          </Link>
        </span>  
      </header>

      {/* Main Content Area */}
      <div className="my-auto py-10 max-w-5xl w-full mx-auto">
        {/* Dictionary Word Header */}
        <div className="border-b border-white/15 pb-8">
          <h1 className="font-serif text-6xl leading-none tracking-tight sm:text-8xl md:text-9xl">
            Contact
          </h1>
          <p className="mt-4 font-serif text-lg italic text-white/75 sm:text-2xl">
            kän - takt (n, v)
          </p>
          <div className="mt-6 grid gap-2.5 font-serif text-base leading-relaxed text-white/90 sm:text-lg">
            <p>
              <strong>1. [Inquiry] - </strong>A state of communication or connection for engineering collaborations, research initiatives, and visionary software endeavors.
            </p>
            <p>
              <strong>2. [Kindred Spirits] - </strong>An invitation to converse on transformative architectures, creative systems, or ambitious ideas.
            </p>
          </div>
        </div>

        {/* Channels & Form Grid */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Direct Channels */}
          <div className="flex flex-col justify-between border-l border-white/40 pl-6 sm:pl-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                Direct Channels
              </p>
              <div className="mt-4 space-y-4 font-serif">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/45 block mb-1">Electronic Mail</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-lg text-white underline decoration-white/40 underline-offset-4 hover:decoration-white sm:text-xl"
                    >
                      {emailAddress}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="border border-white/40 px-2.5 py-1 text-xs tracking-wider uppercase text-white/80 transition-colors hover:bg-white hover:text-[#2d4a43]"
                    >
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs uppercase tracking-widest text-white/45 block mb-1">Code Archive</span>
                  <a
                    href="https://github.com/Jarir-al"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-white underline decoration-white/40 underline-offset-4 hover:decoration-white sm:text-xl"
                  >
                    github.com/Jarir-al &rarr;
                  </a>
                </div>

                <div className="pt-2">
                  <span className="text-xs uppercase tracking-widest text-white/45 block mb-1">Location & Availability</span>
                  <p className="text-base text-white/80 sm:text-lg">
                    Open for Software Engineering internships, research collaborations, and full-stack builds.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 text-xs uppercase tracking-[0.2em] text-white/45">
              {/* <span>Response Cadence: Typically within 24 hours</span> */}
            </div>
          </div>

          {/* Editorial Dispatch Form */}
          <div className="bg-white/[0.03] border border-white/20 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-6">
              Send me a note <span className="text-white/40 text-[10px]">(this opens your email app)</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 font-serif">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-white/55 mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Leon Kennedy"
                  className="w-full bg-transparent border-b border-white/30 py-2 text-base text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-white/55 mb-1.5">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="e.g. ada@example.com"
                  className="w-full bg-transparent border-b border-white/30 py-2 text-base text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-white/55 mb-1.5">
                  Message / Thought
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project, idea, or inquiry..."
                  className="w-full bg-transparent border-b border-white/30 py-2 text-base text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  className="border border-white px-5 py-2.5 font-serif text-sm sm:text-base text-white transition-colors hover:bg-white hover:text-[#2d4a43]"
                >
                  Send Transmission &rarr;
                </button>
                {submitted && (
                  <span className="text-xs italic text-white/70">
                    Client opened!
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer Actions matching hero styling */}
      <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-white/25 pt-4 font-serif text-base">
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href="/"
            className="border border-white px-5 py-3 transition-colors hover:bg-white hover:text-[#2d4a43]"
          >
            &larr; Back to Jarir 101
          </Link>
          <Link
            href="/projects"
            className="py-3 underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
          >
            Explore Projects
          </Link>
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-white/40">
          Jarir Ali &bull; {new Date().getFullYear()}
        </span>
      </footer>
    </main>
  );
}

