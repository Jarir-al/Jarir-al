import { Project } from "./projects"; // adjust import path as needed

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const isLiveValid = project.liveUrl && project.liveUrl.startsWith("http");

  return (
    <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#5c242e] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-2xl">
      <div>
        <h2 className="mb-3 font-serif text-2xl font-medium text-white">
          {project.title}
        </h2>
        <p className="mb-6 font-serif text-sm leading-relaxed text-white/80">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-xs font-medium text-white/90"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links / Status */}
        <div className="flex items-center gap-5 font-serif text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
            >
              View Code &rarr;
            </a>
          )}

          {isLiveValid ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
            >
              Live Demo &rarr;
            </a>
          ) : project.liveUrl && project.liveUrl !== "N/A" ? (
            <span className="italic text-white/50">
              Demo: {project.liveUrl}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};