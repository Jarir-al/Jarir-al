import react from "react";
import {projects} from "@/components/projects";
import { ProjectCard } from "@/components/projectcard";

export default function Projects() {
    return (
        <div className="items-center justify-center min-h-screen py-2 bg-[#4a1c24] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
            
            <h1 className="text-center mb-3 ml-10 mt-4 font-serif text-5xl text-white" mt-4>
                Jarir's Projects
            </h1>
            

            <h2 className="text-center mb-3 ml-10 mt-4 font-serif text-2xl text-white" mt-4>
                These are my personal projects... (scroll below for club projects)
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