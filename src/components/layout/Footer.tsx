import { MapPin } from "lucide-react";
import { siteConfig } from "../../config/site";
import { footerLinks } from "../../constants/navigation";
import { Container } from "../ui";

export function Footer() {
  return (
    <footer className="bg-[#0c0e14] text-slate-300">
      <Container className="py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img
                src={siteConfig.logo}
                alt={siteConfig.name}
                className="h-8 w-8 rounded-md object-cover"
              />
              <span className="text-lg font-bold text-white">
                Nexus<span className="text-slate-500">Growths</span>
              </span>
            </div>
            <p className="mb-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-sm text-slate-400 transition-colors hover:text-teal-400"
            >
              {siteConfig.email}
            </a>
          </div>

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
                href={siteConfig.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-slate-400 transition-colors hover:text-white"
              >
                nexusgrowths.com
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#1e2230] pt-8 sm:flex-row">
          <p className="text-center text-xs text-slate-500 sm:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="text-center text-xs text-slate-500 sm:text-right">
            Founded {siteConfig.founded} · {siteConfig.location}
          </p>
        </div>
      </Container>
    </footer>
  );
}
