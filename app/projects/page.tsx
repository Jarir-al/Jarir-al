import react from "react";
import Link from "next/link";
import {projects} from "@/components/projects";
import { ProjectCard } from "@/components/projectcard";

export default function Projects() {
    return (
        <div className="items-center justify-center min-h-screen py-2 bg-[#4a1c24] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">

             <div className="flex items-start justify-between gap-6 border-b border-white/25 pt-4 pb-4 pl-10 pr-10 text-xs uppercase tracking-[0.2em] text-white/65 sm:text-sm">
                <span> Projects </span>
                <span> <Link href="/projects" className="text-white/65 hover:text-white"> Projjkects </Link> </span>
                <span>  <Link href="/" className="text-white/65 hover:text-white"> Jarir 101 </Link></span>
               </div>


            <h1 className="text-center mb-3 ml-10 mt-4 font-serif text-5xl text-white">
                Jarir's Projects
            </h1>
            

            <h2 className="text-center mb-3 ml-10 mt-4 font-serif text-2xl text-white">
                Many more not released yet, but here are some of my recent projects:
            </h2>
            <div className="flex flex-col gap-8 md:flex-row md:flex-wrap mt-10 md:justify-center">
                <div className="ml-0.5 mr-0.5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>

        </div>

    );

}