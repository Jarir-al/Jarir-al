import react from "react";

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#2d4a43] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
            <h1 className="text-4xl font-bold mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project Card 1 */}
                <div className="bg-[#3a5a4c] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-2xl font-semibold mb-4">Project Title 1</h2>
                    <p className="text-base mb-4">A brief description of Project 1.</p>
                    <a href="#" className="text-cyan-400 hover:underline">View Project</a>
                </div>
            </div>
        </div>
    );
}