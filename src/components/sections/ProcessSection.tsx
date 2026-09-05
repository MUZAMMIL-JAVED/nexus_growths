import { processSteps } from "../../constants/process";
import { Container, SectionHeading, TimelineCards } from "../ui";

export function ProcessSection() {
  return (
    <section id="process" className="bg-slate-50 py-8">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="How We Work Together"
          description="Four clear steps from your first conversation to a system that runs itself."
        />

        <TimelineCards
          columns={4}
          items={processSteps.map((step) => ({
            number: step.number,
            title: step.title,
            description: step.description,
            icon: step.icon,
          }))}
        />
      </Container>
    </section>
  );
}
