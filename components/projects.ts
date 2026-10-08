export interface Project {
  title: string;
  description: string;
  tags: string[];   
  githubUrl?: string;
  liveUrl?: string;
}


export const projects: Project[] = [

  {
    title: "Astrolabe",
    description: "Student Quality of Life Management System.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/Jarir-al/Astrolabe",
    liveUrl: "Soon!"
  },

  {
    title: "Transformer Attention Visualization and Analysis",
    description: "An exploration and comparison between transformer attention mechanisms of Decoder and Encoder Transformers.",
    tags: ["Python", "PyTorch", "Data Analytics"],
    githubUrl: "https://github.com/Jarir-al/transformers-attention-visualizer",
    liveUrl: "N/A"
  },

   {
    title: "Syllabus Parsing using Natural Language Processing and Large Language Models",
    description: "A project that utilizes Natural Language Processing and Large Language Models to parse and extract relevant information from academic syllabi.",
    tags: ["Python", "Pydantic", "LLM API", "Pydantic"],
    githubUrl: "https://github.com/Jarir-al/Syllabi-Parsing-Tool",
    liveUrl: "N/A"
  }, 

  {
    title: "PID Algorithm for Self-Driving Robot",
    description: "A project that implements a PID controller for autonomous vehicle navigation.",
    tags: ["Python", "Control Systems", "Simulation", "Calculus", "Robotics"],
    githubUrl: "https://github.com/Jarir-al/",
    liveUrl: "N/A"
  }

];