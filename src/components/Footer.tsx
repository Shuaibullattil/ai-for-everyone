import { motion } from "framer-motion";
import { Mail, Twitter, Instagram, Linkedin, Github, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/tinkerhub", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/tinkerhub", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/tinkerhub", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/tinkerhub", label: "GitHub" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#030F0F] text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00DF82] to-[#03624C]">
              AI for Everyone
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              A statewide initiative to democratize AI knowledge and empower 1 lakh+ learners across Kerala to become creators, not just consumers.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#03624C]/30 hover:bg-[#00DF82] text-gray-400 hover:text-[#030F0F] flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-[#00DF82]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#00DF82] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#approach" className="text-gray-400 hover:text-[#00DF82] transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#partnership" className="text-gray-400 hover:text-[#00DF82] transition-colors">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="/partners" className="text-gray-400 hover:text-[#00DF82] transition-colors">
                  Partnership Opportunities
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-[#00DF82]">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@tinkerhub.org"
                  className="text-gray-400 hover:text-[#00DF82] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>hello@tinkerhub.org</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tinkerhub.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00DF82] transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>TinkerHub.org</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#03624C]/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} AI for Everyone - Kerala. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 text-center md:text-right">
              Enabled by{" "}
              <a
                href="https://tinkerhub.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00DF82] hover:text-[#00DF82]/80 font-semibold transition-colors"
              >
                TinkerHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
