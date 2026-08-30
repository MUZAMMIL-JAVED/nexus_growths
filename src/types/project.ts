export interface ProjectLinks {
  playStore?: string;
  appStore?: string;
  website?: string;
}

export interface ProjectService {
  title: string;
  description: string;
}

export interface TechStackGroup {
  category: string;
  items: string[];
}

export interface ArchitectureLayer {
  title: string;
  description: string;
}

export interface UserFlowStep {
  step: string;
  title: string;
  description: string;
}

export interface DevelopmentHighlight {
  title: string;
  description: string;
}

export interface ProblemSolutionBlock {
  title: string;
  points: string[];
}

export interface ProjectDetail {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  category: "mobile" | "web";
  links: ProjectLinks;
  images: string[];
  services: ProjectService[];
  features: string[];
  techStack: TechStackGroup[];
  architecture: ArchitectureLayer[];
  flows: UserFlowStep[];
  developmentApproach: DevelopmentHighlight[];
  problem: ProblemSolutionBlock;
  solution: ProblemSolutionBlock;
}
