import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "../../config/site";
import {
  Button,
  ContactForm,
  Container,
  LinkedInIcon,
  SectionHeading,
} from "../ui";

const auditHighlights = [
  "Free 30-minute strategy call",
  "Tailored automation roadmap",
  "Response within 24 hours",
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Ready to Work Together"
          title="Let's make it happen."
          className="mb-10"
        />

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-3"
        >
          {auditHighlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-sm text-slate-600 sm:text-base"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div
          id="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mx-auto max-w-2xl xl:max-w-3xl"
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <p className="text-sm text-slate-500">Prefer another channel?</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button href={`mailto:${siteConfig.email}`} variant="secondary">
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </Button>
            <Button
              href={siteConfig.social.linkedinCompany}
              variant="secondary"
            >
              <LinkedInIcon className="h-4 w-4" />
              Connect on LinkedIn
            </Button>
          </div>
          <span className="flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            Lahore, Pakistan · Working with clients worldwide
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
