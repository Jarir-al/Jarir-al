'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Keeping the card content in one place makes it easy to edit the portfolio
// without having to untangle the animation code below.
const cards = [
  {
    kind: 'landing', number: '00', title: 'Jarir Ali', phonetics: 'Jah - Reer Ah-Lee (n)',
    definitions: [
      ['Star Gazer', 'The boundlessly curious student who strives to discover new subjects and ideas.'],
      ['Builder', 'The hands-on tinkerer who enjoys creating and building things.'],
      ['Team Player', 'The collaborative team member who values communication and cooperation.'],
    ],
  },
  { number: '01', title: 'Star Gazer', subtitle: 'Boundless Curiosity and Love for Exploration.', description: 'Gazes at the stars wondering what lies beyond every piece of intrinsic technology, cosmic observation, and kindred hearts. From the underlying mechanisms of Transformer Aritechture (LLMS) to the core psychology of art', label: 'Key focus areas', details: 'Artifical Intelligence | Full-Stack Systems | Product Mangagement | Computer Architecture' },
  { number: '02', title: 'Builder', subtitle: 'Hands-on Execution and Entrepreneurship', description: 'Turning everyday problems into functional, high-performance solutions for consumers and businesses alike. From architecting modern web apps to tinkering with embedded sensors and interactive data visualizers.', label: 'Selected builds / tech stack', details: 'Tech Stack: Next.js, React, TypeScript, Tailwind CSS, Bun, Node.js\nFeatured Projects: ToyoAdvisor (Financial Advisor), Astrolabe (Student Management System), Arduino Hardware Experiments' },
  { number: '03', title: 'Team Player', subtitle: 'Collaboration, Consulting & Community', description: 'Engineering is a collaborative discipline. Whether serving as a Technical Consultant for student organizations, shipping builds under fast-paced hackathon constraints, or assisting local community initiatives, I prioritize clear communication, empathy, and shared growth.', label: 'Values', details: 'Technical Communication | Empathy-Driven Design | Community Impact' },
  { number: '04', title: 'Mission', subtitle: 'Statement of Intent', description: 'To engineer intuitive, performant, and reliable software that solves meaningful problems while continuously expanding my technical horizons alongside world-class teams.', label: 'Next chapter', details: 'Explore the work behind the ideas.' },
];

type CardProps = {
  card: (typeof cards)[number];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
};

const StackCard = ({ card, index, scrollYProgress }: CardProps) => {
  const isLast = index === cards.length - 1;
  const totalTransitions = Math.max(cards.length - 1, 1);
  const start = isLast ? 0 : index / totalTransitions;
  const end = isLast ? 1 : (index + 1) / totalTransitions;

  // 1. Scale down slightly ONLY during the peel animation so it detaches from screen edges
  const scale = useTransform(scrollYProgress, [start, start + (end - start) * 0.4, end], [1, 0.9, 0.85]);

  // 2. Pure 2D rotation on the screen plane (counter-clockwise swiveling away)
  const rotate = useTransform(scrollYProgress, [start, end], [0, -35]);

  // 3. Translate upward and leftward as it rotates off
  const translateX = useTransform(scrollYProgress, [start, end], ['0%', '-50%']);
  const translateY = useTransform(scrollYProgress, [start, end], ['0%', '-60%']);

  // 4. Fade out toward the end of its interval
  const opacity = useTransform(scrollYProgress, [start, end - 0.05], [1, 0]);

  // Disable pointer events and hide after card has peeled away so it doesn't block underlying cards
  const pointerEvents = useTransform(scrollYProgress, (pos) => (isLast || pos < end - 0.05 ? 'auto' : 'none'));
  const visibility = useTransform(scrollYProgress, (pos) => (isLast || pos < end ? 'visible' : 'hidden'));

  return (
    <motion.article
      key={card.title}
      style={{
        scale: isLast ? 1 : scale,
        x: isLast ? '0%' : translateX,
        y: isLast ? '0%' : translateY,
        rotate: isLast ? 0 : rotate,
        opacity: isLast ? 1 : opacity,
        pointerEvents,
        visibility,
        zIndex: cards.length - index,
        transformOrigin: 'bottom left', // Hinge point matching your drawing
      }}
      // Back to 100% full viewport width and height
      className="absolute inset-0 flex h-screen w-screen flex-col justify-between overflow-hidden bg-[#2d4a43] p-6 sm:p-10 md:p-14"
    >
      <div className="flex items-start justify-between gap-6 border-b border-white/25 pb-4 text-xs uppercase tracking-[0.2em] text-white/65 sm:text-sm">
        <span>{card.kind === 'landing' ? 'Dictionary of Jar ' : 'Entry '} { card.kind === 'landing' ? "" : card.number}</span>
        <span> <Link href="/projects" className="text-white/65 hover:text-white"> Projects</Link> </span>
        <span>  <Link href="/" className="text-white/65 hover:text-white"> Jarir 101</Link></span>
        <span> <Link href="/contact" className="text-white/65 hover:text-white transition-colors">Contact</Link></span>
      </div>

      {card.kind === 'landing' ? (
        <div className="my-auto max-w-4xl py-10">
          <h1 className="font-serif text-6xl leading-none tracking-tight sm:text-8xl md:text-[clamp(6rem,16vw,12rem)]">
            {card.title}
          </h1>
          <p className="mt-5 font-serif text-base italic text-white/75 sm:text-xl">
            {card.phonetics}
          </p>
          <div className="mt-8 grid gap-3 font-serif text-base leading-relaxed text-white/90 sm:text-lg">
            {card.definitions?.map(([term, definition], definitionIndex) => (
              <p key={term}>
                <strong>{definitionIndex + 1}. [{term}] - </strong>{definition}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div className="my-auto max-w-3xl py-10">
          <h2 className="font-serif text-5xl leading-none tracking-tight sm:text-7xl">
            {card.number}. {card.title}
          </h2>
          <p className="mt-5 font-serif text-xl italic text-white/75 sm:text-2xl">
            {card.subtitle}
          </p>
          <p className="mt-8 max-w-2xl font-serif text-lg leading-relaxed text-white/90 sm:text-xl">
            {card.description}
          </p>
          <div className="mt-8 border-l border-white/50 pl-5 font-serif text-base leading-relaxed text-white/75 sm:text-lg">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/55">
              {card.label}
            </p>
            <p className="whitespace-pre-line">{card.details}</p>
          </div>
        </div>
      )}

      {card.kind === 'landing' ? (
        <div className="flex flex-wrap items-center gap-5 font-serif text-base">
          <Link href="/projects" className="border border-white px-5 py-3 transition-colors hover:bg-white hover:text-[#2d4a43]">
            See Projects
          </Link>
          <Link href="/contact" className="py-3 underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white">
            Contact Me
          </Link>
        </div>
      ) : card.number === '04' ? (
        <Link href="/projects" className="w-fit border border-white px-5 py-3 font-serif text-base transition-colors hover:bg-white hover:text-[#2d4a43]">
          Explore My Projects &rarr;
        </Link>
      ) : null}
    </motion.article>
  );
};

export const Hero = () => {
  // This ref marks the full 500vh scroll area that Motion should measure.
  const scrollArea = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollArea, offset: ['start start', 'end end'] });

  return (
    <section ref={scrollArea} className="relative h-[500vh] bg-[#2d4a43] text-white">
      {/* The viewport stays still while the page scrolls through the tall section. */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden p-0">
        <div className="relative h-screen w-screen [perspective:1200px]">
          {cards.map((card, index) => <StackCard key={card.title} card={card} index={index} scrollYProgress={scrollYProgress} />)}
        </div>
      </div>
    </section>
  );
};