export const resume = {
  name: "Avadhesh Mishra",
  title:
    "Senior Principal Specialist Delivery – Enterprise & Consulting | Program / Delivery Management | Cloud & Security Architecture",
  location: "Bournemouth, England, United Kingdom",
  website: "https://www.avadheshmishra.com",
  email: "avadhesh.cs@gmail.com",
  phone: "+44 7956368638",
  linkedin: "https://www.linkedin.com/in/mishraavadhesh",
  github: "https://github.com/avi202020",
  cvDownloadUrl: "/Avadhesh_Mishra_Executive_CV.pdf",
  googleFormEmbedUrl: "https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/viewform?embedded=true",
  googleFormEditUrl: "https://docs.google.com/forms/d/REPLACE_WITH_YOUR_FORM_ID/edit",

  summary:
    "Technology and delivery executive with 20+ years of experience leading large-scale, high-value transformation programmes across Tier-1 banking, global consulting, and UK public sector organisations. Proven track record delivering multi-billion-dollar banking programmes and multi-million-pound government initiatives, combining programme governance, stakeholder leadership, and risk management with deep hands-on technical credibility in cloud, DevSecOps, and security architecture.",

  highlights: [
    "Global programme & release governance (business, production, operations, vendors)",
    "Multi-region delivery planning aligned to regulatory timelines",
    "DevSecOps, Zero Trust, IAM/PAM, vulnerability management & audit readiness",
    "Mentoring & enablement: KT for new joiners, graduates and interns",
  ],

  projects: [
    {
      title: "Ministry of Defence (UK) — Enterprise Identity & Access Management",
      role: "Principal Delivery Consultant / DevSecOps Lead (Mastek UK)",
      description:
        "Led delivery of the Non-Employee Onboarding sub-program within a multi-million-pound national IAM modernisation initiative. Implemented secure DevSecOps pipelines, operating runbooks, and cloud migration practices in a highly regulated defence environment, improving audit readiness and operational resilience.",
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
        "Delivered technology leadership within a multi-billion-dollar global Direct Custody & Clearance transformation programme. Led DevSecOps transformation, platform modernisation, private cloud migration, and global release governance for custody and asset servicing platforms across regulated markets, improving release reliability and audit readiness.",
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
        "Provide CTO-level delivery leadership for multi-million-pound UK public sector programmes spanning defence, identity, and cloud transformation.",
        "Lead programme planning, stakeholder engagement, and delivery governance across government departments, integrators, and platform teams.",
        "Run release planning, delivery assurance, and executive reviews, ensuring security, compliance, and operational readiness.",
        "Mentor delivery leads, engineers, graduates, and interns; deliver structured KT and onboarding playbooks.",
      ],
    },
    {
      company: "JPMorgan Chase UK",
      role: "Lead DevSecOps / Security & Platform Architect / Project Delivery Lead",
      dates: "2012 – 2019",
      bullets: [
        "Delivery leadership within a multi-billion-dollar global Direct Custody & Clearance transformation programme; owned oversight for 20+ applications across UK, US, India, and Middle East.",
        "Chaired global release planning and governance calls with business, production management, infrastructure, security, QA, and vendors; drove go/no-go and production readiness.",
        "Led large-scale private cloud migration initiatives, modernising custody platforms onto JPMorgan’s internal private cloud to improve scalability and resilience.",
        "Served as Line-of-Business Risk Champion; maintained risk registers and remediated audit, vulnerability scanning and penetration-testing findings.",
        "Awarded Best Team (2015–2016) for enterprise-scale release automation; led KT and onboarding for new joiners, graduates, and interns.",
      ],
    },
    {
      company: "Cognizant India & UK",
      role: "Technology Lead / Architect",
      dates: "2006 – 2012",
      bullets: [
        "Delivered banking transformation programmes for global investment banking clients; led application modernisation, reporting, and reconciliation platforms.",
        "Converted POCs into funded engagements (including $50K+ greenfield project and a million-dollar reporting programme); led platform migration and offshore team scaling.",
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
    "Cloud: AWS (landing zones, governance, security, VPC, S3, EKS/ECS), Azure (Entra, governance)",
    "Platforms: Kubernetes, containers, cloud-native operating models; observability & monitoring",
    "DevSecOps: CI/CD, Infrastructure as Code (Terraform), GitOps, automation, Jenkins, Ansible, Vault",
    "Security: Zero Trust, IAM/SSO, PAM, threat modelling, vulnerability management, audit readiness",
    "Engineering: Java/Spring Boot, Node.js, React/Next.js, Python (Django/FastAPI), PostgreSQL/Oracle",
  ],
} as const;
