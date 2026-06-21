import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { siteConfig } from "../../config/site";
import { footerLinks } from "../../constants/navigation";
import { ContactForm, Container, LinkedInIcon } from "../ui";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0c0e14] text-slate-300">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <p className="mb-2 text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
              Ready to work together?
            </p>
            <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              Let&apos;s make it happen.
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="footer-cta-btn footer-cta-primary"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </a>
              <a
                href={siteConfig.social.linkedinCompany}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-cta-btn footer-cta-secondary"
              >
                <LinkedInIcon className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </a>
              <a href="#contact-form" className="footer-cta-btn footer-cta-secondary">
                <Send className="mr-2 h-4 w-4" />
                Book Architecture Audit
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-5">
            <div className="min-w-0">
              <h4 className="mb-4 text-xs font-bold tracking-wider text-white uppercase">
                Services
              </h4>
              <div className="space-y-2.5">
                {footerLinks.capabilities.map((link) => (
                  <a
                    key={link}
                    href="#capabilities"
                    className="block text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div className="min-w-0">
              <h4 className="mb-4 text-xs font-bold tracking-wider text-white uppercase">
                Company
              </h4>
              <div className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div className="min-w-0">
              <h4 className="mb-4 text-xs font-bold tracking-wider text-white uppercase">
                Connect
              </h4>
              <div className="space-y-2.5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block break-all text-sm text-slate-400 transition-colors hover:text-teal-400"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-slate-400 transition-colors hover:text-white"
                >
                  nexusgrowths.tech
                </a>
                <span className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  Lahore, Pakistan
                </span>
                <a
                  href={siteConfig.social.linkedinCompany}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#1e2230] pt-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={siteConfig.logo}
              alt={siteConfig.name}
              className="h-7 w-7 rounded-md object-cover"
            />
            <span className="font-bold text-white">
              Nexus<span className="text-slate-500">Growths</span>
            </span>
          </div>
          <p className="text-center text-xs text-slate-500 sm:text-right">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved. · Founded {siteConfig.founded} · {siteConfig.location}
          </p>
        </div>
      </Container>
    </footer>
  );
}
