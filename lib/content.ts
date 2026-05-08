import {
  Home,
  HeartHandshake,
  Users,
  HandHeart,
  Compass,
  GraduationCap,
  Stethoscope,
  Sparkles,
  Building2,
  UsersRound,
  Briefcase,
  type LucideIcon
} from "lucide-react";

export const company = {
  name: "Anchor NDSS",
  longName: "Anchor Nursing & Disability Support Services",
  tagline: "Care That Anchors. Support That Empowers.",
  phone: "+61 408 464 473",
  phoneRaw: "+61408464473",
  email: "hello@anchornds.com.au",
  address: "28 Coleman Street, Muirhead, NT 0810, Darwin",
  abnLine: "Registered NDIS Provider · Northern Territory, Australia",
  hours: "Mon – Fri: 8:30am – 5:00pm  ·  After-hours support available"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Contact" }
];

export const heroCopy = {
  eyebrow: "Registered NDIS Provider",
  headline: "Care That Anchors. Support That Empowers.",
  sub: "Anchor Nursing & Disability Support Services delivers high-quality, person-centred disability and community-based supports across the Northern Territory — helping you live independently, confidently, and with dignity.",
  primaryCta: { label: "Discover More", href: "/about" },
  secondaryCta: { label: "Schedule a Service", href: "/contact" }
};

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

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "sil-24-7-care",
    title: "Supported Independent Living (SIL) — 24/7 Care",
    short: "Round-the-clock support in shared or individual homes — staffed for safety, comfort, and independence.",
    long:
      "Our SIL services provide 24-hour assistance for participants who need consistent support to live in their own home. We focus on building daily routines, fostering relationships with housemates, and developing the skills participants need to live as independently as possible.",
    icon: Home
  },
  {
    slug: "ilo",
    title: "Individualised Living Options (ILO)",
    short: "Flexible living arrangements designed around your choices, lifestyle, and the people who matter to you.",
    long:
      "ILO is about exploring and shaping a living arrangement that works for you — whether that's living alone with drop-in support, with a host family, or with chosen housemates. We help you design and trial what fits.",
    icon: Building2
  },
  {
    slug: "innovative-community-participation",
    title: "Innovative Community Participation",
    short: "Creative pathways into community life — clubs, classes, volunteering, hobbies, and skill-building.",
    long:
      "We connect participants with new community-based experiences that build social skills, confidence, and a sense of belonging. Programs are tailored to your interests and culturally safe.",
    icon: Sparkles
  },
  {
    slug: "home-care-support",
    title: "Home Care Support",
    short: "Practical in-home assistance with meals, cleaning, laundry, and household routines.",
    long:
      "Our team supports participants with the everyday tasks of running a home, helping you maintain a safe, clean, and comfortable living environment while building independence.",
    icon: HeartHandshake
  },
  {
    slug: "support-coordination",
    title: "Support Coordination",
    short: "Helping you understand, navigate, and get the most out of your NDIS plan.",
    long:
      "We work with you to coordinate the right mix of supports, connect with quality providers, resolve issues, and prepare for plan reviews — so your plan delivers the outcomes you want.",
    icon: Compass
  },
  {
    slug: "daily-living-life-skills",
    title: "Development of Daily Living and Life Skills",
    short: "Skill-building so you can manage more of daily life on your own terms.",
    long:
      "From budgeting and cooking to using public transport and self-care routines, we deliver structured skill development that grows your independence step-by-step.",
    icon: GraduationCap
  },
  {
    slug: "daily-personal-activities",
    title: "Daily Personal Activities",
    short: "Personalised support for personal care and the everyday tasks that matter.",
    long:
      "Our trained support workers assist with showering, dressing, grooming, mobility, medication prompts, and other activities of daily living — always with respect and your preferences front of mind.",
    icon: HandHeart
  },
  {
    slug: "employment-education-assistance",
    title: "Employment & Higher Education Assistance",
    short: "Support to access, find, and maintain meaningful work or further study.",
    long:
      "We help participants explore career goals, prepare for interviews, build workplace skills, navigate study options, and stay supported once they're working or learning.",
    icon: Briefcase
  },
  {
    slug: "community-nursing-care",
    title: "Community Nursing Care",
    short: "Clinically informed nursing supports delivered in your home or community.",
    long:
      "Our registered nurses provide complex care, medication management, wound care, continence support, and coordinated clinical oversight — bringing healthcare to where you live.",
    icon: Stethoscope
  },
  {
    slug: "community-social-civic",
    title: "Community, Social & Civic Activities",
    short: "Encouraging participation in social, recreational, and civic life.",
    long:
      "We support you to attend events, take part in cultural activities, join groups, and engage in your community — ensuring everyone has a place at the table.",
    icon: UsersRound
  },
  {
    slug: "shared-living",
    title: "Daily Life Tasks in Group / Shared Living",
    short: "Support to thrive in shared and group living arrangements.",
    long:
      "We help participants in shared homes develop routines, share responsibilities respectfully, and build positive relationships with housemates and support staff.",
    icon: Users
  }
];

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

export const whyChoose = [
  {
    title: "Participant-Centred Approach",
    body: "Every plan we deliver is built around your goals, culture, and preferences — never around the system."
  },
  {
    title: "Cultural Safety & Respect",
    body: "We deliver culturally safe supports that honour First Nations communities and people from all backgrounds."
  },
  {
    title: "Choice & Control",
    body: "You decide who supports you, when, and how. We're here to back your decisions."
  },
  {
    title: "Focus on Independence",
    body: "Our supports are designed to grow your skills and confidence — not your dependence on us."
  }
];
