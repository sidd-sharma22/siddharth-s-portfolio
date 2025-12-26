const TechStackSection = () => {
  const techCategories = [
    {
      title: 'Languages',
      items: ['C/C++', 'Java', 'Python', 'HTML/CSS', 'JavaScript'],
    },
    {
      title: 'Frameworks & Libraries',
      items: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Streamlit'],
    },
    {
      title: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Google Cloud'],
    },
    {
      title: 'Core Concepts',
      items: ['DSA', 'OOPs', 'Web Dev', 'GenAI', 'MySQL'],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// Tech Arsenal</p>
          <h2 className="section-heading">
            My <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-6 card-hover-glow"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="font-mono font-bold text-primary mb-6 text-sm tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 rounded-lg text-sm bg-secondary/50 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative code block */}
        <div className="mt-16 glass rounded-2xl p-6 font-mono text-sm overflow-x-auto">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-primary/80" />
          </div>
          <pre className="text-muted-foreground">
            <code>
              <span className="text-primary">const</span>{' '}
              <span className="text-foreground">developer</span> = {'{'}
              {'\n'}  name: <span className="text-primary">"Siddharth Sharma"</span>,
              {'\n'}  cgpa: <span className="text-primary">7.68</span>,
              {'\n'}  title: <span className="text-primary">"Full-Stack Student Developer"</span>,
              {'\n'}  skills: [<span className="text-primary">"React"</span>, <span className="text-primary">"Python"</span>, <span className="text-primary">"GenAI"</span>, <span className="text-primary">"DSA"</span>, <span className="text-primary">"OOPs"</span>]
              {'\n'}  available: <span className="text-primary">True</span>
              {'\n'}{'}'};
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
