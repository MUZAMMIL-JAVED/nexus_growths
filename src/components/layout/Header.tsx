import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { siteConfig } from "../../config/site";
import { navLinks } from "../../constants/navigation";
import { Button } from "../ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 flex h-[70px] w-full items-center border-b border-slate-200/60 bg-[#f3f4f8]/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 xl:max-w-7xl 2xl:max-w-[1536px]">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <img
            src={siteConfig.logo}
            alt={siteConfig.name}
            className="h-7 w-7 sm:h-8 sm:w-8 rounded-md object-cover"
          />
          <span className="text-sm sm:text-base lg:text-lg font-bold tracking-tight text-slate-900">
            Nexus<span className="text-slate-400">Growths</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Hidden on xs (< 480px), shown from xs-plus upward */}
          <Button
            to="/#contact"
            variant="gradient"
            className="hidden min-[480px]:inline-flex px-3 py-1.5 text-xs sm:px-5 sm:py-2.5 sm:text-sm whitespace-nowrap"
          >
            Get Free Audit
            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </Button>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-slate-200 text-slate-600 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-[70px] right-0 left-0 overflow-hidden border-b border-slate-200 bg-white md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full btn-gradient px-5 py-2.5 text-sm font-semibold text-white"
              >
                Get Free Audit
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
