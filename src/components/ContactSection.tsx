import { Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sidd-sharma22',
      username: '@sidd-sharma22',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sidd-sharma22/',
      username: 'Siddharth Sharma',
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: 'X (Twitter)',
      href: 'https://x.com/sidd_sharma22',
      username: '@sidd_sharma22',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/osm.views',
      username: '@osm.views',
      note: 'Creative Gallery',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// Get in Touch</p>
          <h2 className="section-heading">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Open for internships, collaborations, and interesting conversations
          </p>
        </div>

        {/* CHANGED: Increased max-width to 5xl (or 6xl) so it spans wider */}
        <div className="max-w-6xl mx-auto"> 
          
          {/* CHANGED: Grid layout allows side-by-side cards on desktop */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* LEFT CARD: Contact Info */}
            <div className="glass rounded-2xl p-8 h-full flex flex-col justify-center">
              <h3 className="font-mono font-bold text-xl mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <a
                  href="https://mail.google.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium group-hover:text-primary transition-colors break-all">
                      siddharthsharma2219@gmail.com
                    </p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Kottayam, Kerala / Gwalior, MP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD: Social Links */}
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="font-mono font-bold text-xl mb-6">Find me on</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl glass-hover group border border-transparent hover:border-primary/10 transition-all"
                  >
                    <social.icon
                      size={20}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                    <div>
                      <p className="text-sm font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </p>
                      {social.note && (
                        <p className="text-xs text-muted-foreground">{social.note}</p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
