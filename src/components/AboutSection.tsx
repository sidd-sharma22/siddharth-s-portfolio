import { Code, Camera, Globe, Trophy } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Engineer',
      description: 'Strong foundation in DSA, OOPs, and full-stack development',
    },
    {
      icon: Camera,
      title: 'Creative Lead',
      description: 'Sub-Lead at Chitrachaya Photography Club, IIIT Kottayam',
    },
    {
      icon: Globe,
      title: 'Global Mindset',
      description: 'Learning German, exploring AI/ML and emerging technologies',
    },
    {
      icon: Trophy,
      title: 'Communicator',
      description: 'Background in competitive debating and public speaking',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// Who am I?</p>
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A blend of analytical thinking and creative expression
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">Computer Science student</span> at 
              IIIT Kottayam with a passion for building things that live on the internet. 
              My journey in tech started with curiosity about how things work, and has evolved 
              into a deep love for crafting elegant digital experiences.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond code, I lead the creative vision as{' '}
              <span className="text-primary font-medium">Sub-Lead of Chitrachaya Photography Club</span>, 
              where I manage teams, mentor budding photographers, and capture campus life through my lens. 
              As a member of <span className="text-foreground font-medium">Google Developer Group IIIT Kottayam</span>, 
              I stay at the forefront of Android, Flutter, and Cloud technologies.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently diving deep into{' '}
              <span className="text-primary font-medium">Generative AI</span> and its applications, 
              while strengthening my foundations in full-stack development. When I'm not coding, 
              you'll find me exploring photography, learning German, or preparing for my next skill.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['C/C++', 'Python', 'JavaScript', 'React', 'Node.js', 'GenAI'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg text-sm font-mono bg-primary/10 text-primary border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-hover rounded-2xl p-6 card-hover-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-mono font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
