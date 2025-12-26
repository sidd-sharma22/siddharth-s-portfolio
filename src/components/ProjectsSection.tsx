import { ExternalLink, Github, Briefcase, FileArchive, Terminal } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Khatu Shyam Trading Co.',
      description:
        'A B2B digital catalogue designed for a Gwalior-based wholesale distributor. Digitized their inventory of Sentini Flopipes, Paras Tanks, and Johnson Sanitary ware. Features include brand showcase, product categorization (Agri/SWR pipes), and direct WhatsApp business integration.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
      icon: Briefcase,
      gradient: 'from-blue-500/20 to-emerald-500/20',
      links: {
        live: 'https://khatu-shyam-trading-co.vercel.app',
        github: '#', // Placeholder if you add it later
      },
    },
    {
      title: 'File Compression Tool',
      description:
        'A high-performance command-line tool built to compress and decompress text files without data loss. Implemented Huffman Coding algorithm to analyze character frequency and generate optimal binary trees, achieving up to 40% reduction in file size for text-heavy datasets.',
      tech: ['C++', 'DSA', 'Huffman Coding'],
      icon: FileArchive,
      gradient: 'from-slate-500/20 to-green-500/20',
      links: {
        live: null,
        github: null,
      },
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// Featured Work</p>
          <h2 className="section-heading">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Selected projects that showcase my skills and passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden card-hover-glow"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Header */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-background/50" />
                <project.icon
                  size={64}
                  className="text-primary relative z-10 group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Floating particles effect */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-primary/50 rounded-full animate-float" />
                <div className="absolute bottom-8 right-8 w-3 h-3 bg-primary/30 rounded-full animate-float animation-delay-200" />
                <div className="absolute top-12 right-12 w-2 h-2 bg-primary/40 rounded-full animate-float animation-delay-400" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-mono font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.links.github ? (
                    <a
                      href={project.links.github}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  ) : null}

                  {project.links.live ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  ) : null}

                  {/* Fallback for local/CLI projects with no links */}
                  {!project.links.github && !project.links.live && (
                     <span className="flex items-center gap-2 text-sm text-muted-foreground cursor-not-allowed opacity-75">
                        <Terminal size={16} />
                        Local / CLI Only
                     </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/sidd-sharma22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-hover font-medium"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
