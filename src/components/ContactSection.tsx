import { Mail, MapPin, Github, Linkedin, Twitter, Instagram, Send } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      username: '@siddharthsharma',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      username: 'Siddharth Sharma',
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      href: 'https://twitter.com',
      username: '@siddharthdev',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com',
      username: '@chitrachaya_sid',
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

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="glass rounded-2xl p-8">
              <h3 className="font-mono font-bold text-xl mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:siddharthsharma2219@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
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

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl glass-hover group"
                    >
                      <social.icon
                        size={18}
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

            {/* Quick Message */}
            <div className="glass rounded-2xl p-8">
              <h3 className="font-mono font-bold text-xl mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Hey Siddharth, I'd like to discuss..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 glow-box"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
