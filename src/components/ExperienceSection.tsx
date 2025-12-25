import { Camera, Users, Award, BookOpen } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Camera,
      role: 'Sub-Lead',
      organization: 'Chitrachaya Photography Club',
      period: '2024 - Present',
      description:
        'Leading creative direction for the official photography club. Managing teams for event coverage, mentoring junior members, and curating visual content for college publications.',
      highlights: ['Team Management', 'Event Coverage', 'Creative Direction'],
    },
    {
      icon: Users,
      role: 'Member',
      organization: 'GDG IIIT Kottayam',
      period: '2024 - Present',
      description:
        'Active participant in Google Developer Group activities. Engaged in workshops on Android, Flutter, and Cloud technologies. Contributing to the developer community on campus.',
      highlights: ['Android Dev', 'Cloud Computing', 'Community Building'],
    },
  ];

  const certifications = [
    {
      title: 'Google Cloud: Cybersecurity Fundamentals',
      issuer: 'Google Cloud',
      icon: Award,
    },
    {
      title: 'Google Gen-AI Academy',
      issuer: 'Google',
      icon: Award,
    },
    {
      title: 'Full-Stack Developer Certification',
      issuer: 'freeCodeCamp',
      icon: BookOpen,
    },
    {
      title: 'Advances in Robotics',
      issuer: 'IIIT Kottayam',
      icon: BookOpen,
    },
    {
      title: 'Prompt Design in Vertex AI',
      issuer: 'Google Cloud',
      icon: Award,
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// Journey So Far</p>
          <h2 className="section-heading">
            Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Building skills through meaningful contributions
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {experiences.map((exp, index) => (
            <div
              key={exp.role + exp.organization}
              className="glass rounded-2xl p-8 card-hover-glow relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background decoration */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <exp.icon className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-xl">{exp.role}</h3>
                    <p className="text-primary">{exp.organization}</p>
                    <p className="text-muted-foreground text-sm">{exp.period}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-secondary-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-12">
          <h3 className="font-mono text-2xl font-bold mb-2">
            Certifications & <span className="text-primary">Courses</span>
          </h3>
          <p className="text-muted-foreground">Continuous learning and growth</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-hover rounded-xl p-5 flex items-center gap-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <cert.icon className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-sm">{cert.title}</h4>
                <p className="text-muted-foreground text-xs">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
