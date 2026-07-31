import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "../../config/site";
import { teamMembers } from "../../constants/team";
import { Button, Container, LinkedInIcon, SectionHeading, TeamMemberCard } from "../ui";

export function TeamSection() {
  return (
    <section id="team" className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Who You'll Work With"
          title="The People Behind NexusGrowths"
          description="A small team that ships real products. Muzammil leads automation strategy, Hasnain builds the apps, Salman handles everything mobile, and Rimsha owns all things WordPress."
        />

        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 sm:flex-row"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
              <LinkedInIcon className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Follow NexusGrowths on LinkedIn
              </p>
              <p className="text-xs text-slate-500">
                Software Development · Founded {siteConfig.founded} · Lahore, PK
              </p>
            </div>
          </div>
          <Button
            href={siteConfig.social.linkedinCompany}
            variant="secondary"
            className="shrink-0 text-sm"
          >
            View Company Page
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
