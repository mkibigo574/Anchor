import {
  Home,
  HeartHandshake,
  Users,
  HandHeart,
  Compass,
  GraduationCap,
  Sparkles,
  Building2,
  UsersRound,
  Car,
  Brush,
  KeyRound,
  Lock,
  TrendingUp,
  ShieldCheck,
  Award,
  HeartPulse,
  EyeOff,
  Phone,
  Mail,
  FileText,
  type LucideIcon
} from "lucide-react";

export const company = {
  name: "Anchor NDSS",
  longName: "Anchor Nursing & Disability Support Services",
  tagline: "Care That Anchors. Support That Empowers.",
  phone: "+61 408 464 473",
  phoneRaw: "+61408464473",
  email: "hello@anchornds.com.au",
  address: "28 Coleman Street, Muirhead, NT 0810",
  city: "Darwin",
  abnLine: "Registered NDIS Provider · Northern Territory, Australia",
  hours: "Mon – Fri: 8:30am – 5:00pm  ·  After-hours support available"
};

// Full navigation with dropdowns (services + NDIS submenu)
export type NavLink = {
  href?: string;
  label: string;
  external?: boolean;
  children?: NavLink[];
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    label: "Services",
    href: "/services",
    children: [] // populated below from services list
  },
  { href: "/refer", label: "Refer a Participant" },
  { href: "/contact", label: "Contact Us" },
  { href: "/work-with-us", label: "Work With Us" },
  {
    label: "NDIS",
    children: [
      {
        href: "https://www.ndis.gov.au",
        label: "NDIS Official Site",
        external: true
      },
      {
        href: "https://www.ndiscommission.gov.au",
        label: "NDIS Quality & Safeguards Commission",
        external: true
      }
    ]
  },
  { href: "/advocacy", label: "Advocacy" },
  { href: "/feedback", label: "Feedback" }
];

export const heroCopy = {
  headlineLine1: "Care That Anchors.",
  headlineLine2: "Support That Empowers.",
  sub: "Anchor Nursing & Disability Support Services delivers high-quality, person-centred disability and community-based supports across the Northern Territory — helping you live independently, confidently, and with dignity.",
  primaryCta: { label: "Discover More", href: "/about" },
  secondaryCta: { label: "Our Services", href: "#services" },
  bgImage: "/images/joyful-care.jpg"
};

// Four core values shown directly under the hero
export const values = [
  {
    title: "Respect",
    icon: HeartHandshake,
    body: "We honour your culture, identity, and beliefs — treating every participant with the dignity they deserve."
  },
  {
    title: "Compassion",
    icon: HandHeart,
    body: "We walk alongside you with kindness and care, showing up consistently when you need us most."
  },
  {
    title: "Empathy",
    icon: Users,
    body: "We listen patiently, understand your goals, and tailor our supports to the life you want to live."
  },
  {
    title: "Integrity",
    icon: Compass,
    body: "We are transparent, accountable, and committed to safe, ethical practice that meets NDIS standards."
  }
];

// Three secondary values shown inside the About section
export const secondaryValues = [
  {
    title: "Privacy and Confidentiality",
    icon: Lock,
    body: "Your information stays your own — handled with strict confidentiality at every step."
  },
  {
    title: "Development and Improvement",
    icon: TrendingUp,
    body: "Continuous review, training, and growth so the supports we deliver keep getting better."
  },
  {
    title: "Safe and Harmonious Environment",
    icon: ShieldCheck,
    body: "Spaces and relationships built on safety, respect, and inclusion — for everyone we serve."
  }
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: LucideIcon;
  image: string;
};

export const services: Service[] = [
  {
    slug: "sil-24-7-care",
    title: "Supported Independent Living (SIL) — 24/7 Care",
    short:
      "Round-the-clock support in shared or individual homes — staffed for safety, comfort, and independence.",
    long:
      "Our SIL services provide 24-hour assistance for participants who need consistent support to live in their own home. We focus on building daily routines, fostering relationships with housemates, and developing the skills participants need to live as independently as possible.",
    icon: Home,
    image: "/images/walker-couch.webp"
  },
  {
    slug: "ilo",
    title: "Individualised Living Options (ILO)",
    short:
      "Flexible living arrangements designed around your choices, lifestyle, and the people who matter to you.",
    long:
      "ILO is about exploring and shaping a living arrangement that works for you — whether that's living alone with drop-in support, with a host family, or with chosen housemates. We help you design and trial what fits.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "innovative-community-participation",
    title: "Innovative Community Participation",
    short:
      "Creative pathways into community life — clubs, classes, volunteering, hobbies, and skill-building.",
    long:
      "We connect participants with new community-based experiences that build social skills, confidence, and a sense of belonging. Programs are tailored to your interests and culturally safe.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "home-care-support",
    title: "Home Care Support",
    short:
      "Practical in-home assistance with meals, cleaning, laundry, and household routines.",
    long:
      "Our team supports participants with the everyday tasks of running a home, helping you maintain a safe, clean, and comfortable living environment while building independence.",
    icon: HeartHandshake,
    image: "/images/walker-indoor.webp"
  },
  {
    slug: "support-coordination",
    title: "Support Coordination",
    short:
      "Helping you understand, navigate, and get the most out of your NDIS plan.",
    long:
      "We work with you to coordinate the right mix of supports, connect with quality providers, resolve issues, and prepare for plan reviews — so your plan delivers the outcomes you want.",
    icon: Compass,
    image:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "daily-living-life-skills",
    title: "Development of Daily Living and Life Skills",
    short:
      "Skill-building so you can manage more of daily life on your own terms.",
    long:
      "From budgeting and cooking to using public transport and self-care routines, we deliver structured skill development that grows your independence step-by-step.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "tenancy-assistance",
    title: "Accommodation / Tenancy Assistance",
    short:
      "Support with finding, securing, and maintaining a home that suits your needs.",
    long:
      "We help you understand tenancy rights and obligations, navigate housing applications, communicate with landlords, and resolve issues — so you can stay safe, settled, and independent in your home.",
    icon: KeyRound,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "daily-personal-activities",
    title: "Daily Personal Activities",
    short:
      "Personalised support for personal care and the everyday tasks that matter.",
    long:
      "Our trained support workers assist with showering, dressing, grooming, mobility, medication prompts, and other activities of daily living — always with respect and your preferences front of mind.",
    icon: HandHeart,
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "transport-assistance",
    title: "Transport Assistance",
    short:
      "Reliable transport so you can attend appointments, work, study, and community life.",
    long:
      "We provide safe, dignified transport supports that connect participants to medical appointments, social outings, employment, education, and community activities across the Northern Territory.",
    icon: Car,
    image:
      "https://images.unsplash.com/photo-1556122071-e404eaedb77f?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "household-tasks",
    title: "Household Tasks",
    short:
      "Hands-on help with cleaning, laundry, meal prep, and the running of your home.",
    long:
      "Our support workers assist with the practical tasks of keeping a home running — from grocery shopping and meal preparation to laundry, cleaning, and yard upkeep — so daily life stays manageable.",
    icon: Brush,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "social-economic-community",
    title: "Social, Economic & Community Participation Support",
    short:
      "Encouraging participation in social, recreational, civic, and economic life.",
    long:
      "We support participants to attend events, take part in cultural activities, volunteer, build economic independence, and engage in their community — so everyone has a place at the table.",
    icon: UsersRound,
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=85"
  }
];

// populate Services dropdown for nav
navLinks.forEach((l) => {
  if (l.label === "Services" && l.children) {
    l.children = services.map((s) => ({
      href: `/services#${s.slug}`,
      label: s.title.replace(" — 24/7 Care", "")
    }));
  }
});

export const trustSafety = {
  eyebrow: "Skilled Team + Strong Values",
  title: "Trust & Safety Focused",
  paragraphs: [
    "Every Anchor support worker is screened, qualified, and inducted to the standards expected of a registered NDIS provider — so participants and their families can feel safe from the very first conversation.",
    "Our team is trained in person-centred practice, cultural safety, manual handling, medication support, and safeguarding. We invest in continuous professional development because the people we support deserve the best.",
    "Behind every shift is a backbone of clinical oversight, robust documentation, and clear escalation pathways. When something needs attention, it gets attention — fast.",
    "We hold ourselves accountable to the NDIS Practice Standards, the NDIS Code of Conduct, and the Quality and Safeguards Commission — and we welcome feedback as a way to keep getting better.",
    "Above all, we believe trust is earned through consistency. Showing up. Doing what we say we'll do. Walking alongside participants and their families for the long run."
  ],
  ctaLabel: "Discover More",
  ctaHref: "/about"
};

// 3-step booking section
export const bookingSteps = [
  {
    step: "01",
    title: "Call Us",
    body: "Speak directly with our intake team about your NDIS plan and your goals.",
    icon: Phone,
    cta: { label: "Call Now", href: `tel:${company.phoneRaw}` }
  },
  {
    step: "02",
    title: "Submit Contact Form",
    body: "Send us a few details and we'll get back to you within one business day.",
    icon: FileText,
    cta: { label: "Submit Form", href: "/contact" }
  },
  {
    step: "03",
    title: "Email Us",
    body: "Prefer email? Drop us a line and we'll respond promptly with next steps.",
    icon: Mail,
    cta: { label: "Mail Now", href: `mailto:${company.email}` }
  }
];

// NDIS banner copy
export const ndisBanner = {
  title: "Proudly NDIS Registered Provider",
  paragraphs: [
    "Anchor is a registered provider with the National Disability Insurance Scheme — meeting the NDIS Practice Standards and Code of Conduct, and operating under the oversight of the NDIS Quality and Safeguards Commission.",
    "What that means for you: independently audited services, qualified staff, transparent pricing, and the full set of safeguards designed to protect participants and uphold their rights."
  ],
  ctaLabel: "Discover More",
  ctaHref: "/about"
};

// Why Choose 4 reasons
export const whyChoose = [
  {
    title: "Experienced and Compassionate Team",
    body: "Our support workers and clinicians bring deep experience and genuine care to every shift — backed by ongoing training and clinical oversight.",
    icon: Award
  },
  {
    title: "Respect & Integrity",
    body: "We treat every participant with dignity, honesty, and cultural respect — the same way we'd want our own family supported.",
    icon: HeartHandshake
  },
  {
    title: "Commitment to Safety & Quality",
    body: "We meet and exceed NDIS Practice Standards through rigorous documentation, training, and continuous improvement.",
    icon: HeartPulse
  },
  {
    title: "Confidentiality & Privacy",
    body: "Your information is handled with strict privacy controls so you stay in control of who knows what about your supports.",
    icon: EyeOff
  }
];

// Inspirational quote
export const inspirationalQuote =
  "Disability is not a roadblock but a unique pathway to resilience.";

export const testimonials = [
  {
    quote:
      "Anchor's team has made a real difference in my daily life. They listen, they show up, and they put my needs first.",
    author: "Sarah L.",
    role: "Participant, Darwin"
  },
  {
    quote:
      "From support coordination to daily living, the staff are professional, kind, and consistently reliable. I feel supported.",
    author: "James T.",
    role: "Participant, NT"
  },
  {
    quote:
      "Thanks to Anchor NDSS, I've been able to take part in community activities I never thought I'd manage on my own.",
    author: "Emily R.",
    role: "Participant, Darwin"
  }
];

// Acknowledgement of Country
export const acknowledgement = {
  title: "Acknowledgement of Country",
  body: "Anchor Nursing & Disability Support Services acknowledges the Larrakia people as the Traditional Custodians of the lands on which we live and work, and we extend that respect to all Aboriginal and Torres Strait Islander peoples across the Northern Territory. We pay our respects to Elders past, present, and emerging, and recognise their continuing connection to land, waters, and culture."
};

// Footer link sets (4-column structure)
export const footerLinks = {
  useful: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
    { href: "/feedback", label: "Feedback & Complaints" },
    { href: "/advocacy", label: "Advocacy" },
    { href: "/privacy", label: "Privacy Policy" }
  ]
};
