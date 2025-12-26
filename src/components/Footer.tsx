import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Built with</span>
            <Heart size={14} className="text-destructive fill-destructive" />
            <span>by Siddharth Sharma</span>
          </div>
          
          <p className="text-muted-foreground text-sm font-mono">
            © {new Date().getFullYear()} • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
