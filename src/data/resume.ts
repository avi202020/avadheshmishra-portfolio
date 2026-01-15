export const resume = {
  name: "Avadhesh Mishra",
  title: "Principal Delivery Consultant – Enterprise, Platform & CTO Advisory",
  location: "Bournemouth, England, United Kingdom",
  email: "avadheshcissp@gmail.com",
  phone: "+44 7956368638",
  linkedin: "https://www.linkedin.com/in/UPDATE_ME",
  github: "https://github.com/UPDATE_ME",
  cvDownloadUrl: "/Avadhesh_Mishra_Final_Clean_CV.pdf",
  googleFormEmbedUrl: "https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/viewform?embedded=true",
  googleFormEditUrl: "https://docs.google.com/forms/d/REPLACE_WITH_YOUR_FORM_ID/edit",

  summary:
    "Technology executive with 20+ years of experience leading enterprise engineering, cloud, security, and digital transformation across Tier-1 banking, global consulting, and UK public sector programmes. Proven senior technology leader combining strategic vision with hands-on execution, mentoring leaders, building MVPs, defining runbooks, and scaling secure, resilient platforms in highly regulated environments.",

  highlights: [
    "CTO-level delivery leadership in regulated environments",
    "Mentoring, training, enablement, and operating model uplift",
    "DevSecOps, Zero Trust, IAM/PAM, cloud-native platforms",
    "MVP-to-scale execution with strong governance and resilience",
  ],

  projects: [
    {
      title: "Ministry of Defence (UK) — Enterprise Identity & Access Management",
      role: "Principal Delivery Consultant / DevSecOps Lead (Mastek UK)",
      description:
        "Led a national-scale IDAM modernisation programme delivering centrally governed digital identities for military personnel, civilians, and contractors. Designed DevSecOps pipelines, self-service delivery models, and secure operating runbooks to improve deployment velocity, audit readiness, and platform resilience in a highly regulated defence environment.",
      focusAreas: [
        "Identity & Access Management",
        "DevSecOps",
        "Secure CI/CD",
        "Governance & Compliance",
        "Public Sector",
      ],
    },
    {
      title: "UK Home Office / Leidos — National Biometrics Cloud Migration",
      role: "Cloud & DevSecOps Architect",
      description:
        "Supported migration and convergence of critical UK biometric systems (IDENT1 & IABS) from legacy mainframe infrastructure to AWS. Led DB2-to-PostgreSQL migration, AWS control plane setup, secure hybrid networking, and CI/CD automation, enabling a scalable, resilient, and compliant platform for law enforcement and immigration services.",
      focusAreas: [
        "AWS Cloud Migration",
        "DevSecOps",
        "Secure Networking",
        "Data Migration",
        "National-Critical Systems",
      ],
    },
    {
      title: "JPMorgan Chase UK — Custody & Asset Servicing Platform Transformation",
      role: "Lead DevSecOps / Security & Platform Architect",
      description:
        "Led multi-year DevSecOps and platform modernisation for custody, settlement, and asset servicing platforms across global markets. Delivered CI/CD automation, containerised microservices, infrastructure-as-code, self-healing capabilities, and BAU runbooks, improving release velocity, resilience, and regulatory compliance in a Tier-1 banking environment.",
      focusAreas: [
        "DevSecOps",
        "Platform Engineering",
        "Kubernetes",
        "Resilience & SRE",
        "Regulated Banking",
      ],
    },
  ],

  experience: [
    {
      company: "Mastek UK",
      role: "Principal Delivery Consultant – Enterprise & Consulting",
      dates: "2021 – Present",
      bullets: [
        "CTO-level technology delivery leadership for national-scale UK public sector identity, security, and cloud transformation programmes.",
        "Mentor and coach developers, graduate interns, platform engineers, and delivery leads; establish platform-builder mindsets and secure delivery maturity.",
        "Define cloud, DevSecOps, and Zero Trust reference architectures supported by operational runbooks and governance models.",
        "Lead planning and hands-on delivery of MVPs and pilot platforms; validate architecture, security, and operating models before scale-out.",
      ],
    },
    {
      company: "JPMorgan Chase UK",
      role: "Lead DevSecOps / Security & Platform Architect",
      dates: "2012 – 2019",
      bullets: [
        "Led DevSecOps enablement, cloud adoption, and platform modernisation initiatives in a Tier-1 regulated banking environment.",
        "Designed IAM, PAM, and Zero Trust architectures aligned to enterprise risk requirements and audit expectations.",
        "Authored runbooks/playbooks for incident response, vulnerability management, IAM/PAM operations, and resiliency testing.",
      ],
    },
    {
      company: "Cognizant India & UK",
      role: "Technology Lead / Architect",
      dates: "2006 – 2012",
      bullets: [
        "Delivered multi-market banking transformation programmes for global investment banking clients.",
        "Led application modernisation, reporting, and reconciliation platforms; scaled offshore teams; standardised SDLC.",
      ],
    },
  ],

  certifications: [
    "CISSP (ISC²)",
    "CISM (ISACA)",
    "CCSP",
    "PMP (PMI)",
    "AWS DevOps Engineer – Professional",
    "Microsoft Azure Fundamentals",
  ],

  skills: [
    "Cloud: AWS (EKS, Bedrock, SageMaker), Azure (AKS), OpenShift",
    "Security: Zero Trust, IAM/SSO, PAM, Risk & Audit Readiness, AI Security/MRM",
    "DevSecOps: CI/CD, Policy-as-code, SAST/DAST, Snyk/Trivy, SonarQube",
    "Platforms: Kubernetes, Observability (Prometheus/Grafana/ELK), SRE/Resilience",
    "Data/Integration: Kafka, Redis, DynamoDB, PostgreSQL, Oracle, MySQL",
  ],
} as const;
