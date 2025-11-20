const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">AI for Everyone</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              A Kerala-wide initiative to democratize AI education and empower communities 
              through accessible, hands-on learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#events" className="text-muted-foreground hover:text-primary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <a href="#join" className="text-muted-foreground hover:text-primary transition-colors">
                  Join Campaign
                </a>
              </li>
              <li>
                <a href="#volunteer" className="text-muted-foreground hover:text-primary transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} AI for Everyone - Kerala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
