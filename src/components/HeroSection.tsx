import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const HeroSection = () => {
  const roles = ['Full-Stack Developer', 'AI/ML Enthusiast', 'Creative Lead'];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-400" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-left">
            <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider">
              // Hello, World! 👋
            </p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              I'm{' '}
              <span className="gradient-text glow-text">
                Siddharth Sharma
              </span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl mb-4">
              B.Tech CSE Student @{' '}
              <span className="text-foreground">Indian Institute of Information Technology Kottayam</span>
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {roles.map((role, index) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-full text-sm font-mono bg-secondary text-secondary-foreground border border-border"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {role}
                </span>
              ))}
            </div>
            
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Crafting elegant solutions at the intersection of{' '}
              <span className="text-primary">code</span> and{' '}
              <span className="text-primary">creativity</span>. Passionate about building
              products that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 glow-box hover:scale-105"
              >
                Check My Work
              </a>
              <a
                href="https://drive.google.com/file/d/1-dKFDm830_r1heSxlzCt6bSZPfgDGpW8/view?usp=sharing"
                target="_blank"
                download="Siddharth_Resume.pdf"
                className="px-8 py-4 rounded-xl glass-hover font-semibold flex items-center justify-center gap-2"
              >
                Download Resume
                <ArrowDown size={18} />
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: Github, href: 'https://github.com/sidd-sharma22', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/sidd-sharma22', label: 'LinkedIn' },
                { icon: X, href: 'https://x.com/sidd_sharma22', label: 'X' },
                { icon: Mail, href: 'mailto:siddharthsharma2219@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-hover group"
                  aria-label={label}
                >
                  <Icon
                    size={20}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-1 flex justify-center animate-fade-in-right">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-2xl scale-110 animate-glow-pulse" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-border">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <span className="font-mono text-6xl md:text-8xl text-primary/50">
                    SS
                  </span>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 glass rounded-full text-sm font-mono animate-float">
                <span className="text-primary">●</span> Available for work
              </div>
              
              <div className="absolute -bottom-2 -left-4 px-4 py-2 glass rounded-full text-sm font-mono animate-float animation-delay-200">
                CGPA: <span className="text-primary">7.68</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
