import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import type { ReactNode } from "react";

export const DATA = {
  name: "Eze Ransom",
  initials: "ER",
  url: "https://ransomeze.com",
  location: "Nigeria",
  locationLink: "https://www.google.com/maps/place/Nigeria",
  heroTitle: "Web3 Guy",
  description: "Shiping Cool Stuffs",
  summary:
    "I’m Eze Ransom, a Web3 developer, ecosystem growth strategist, and community builder from Nigeria. I’ve built and shipped real products across multiple blockchain ecosystems, worked with Core and Sui, and I currently work with Zero Gravity, a leading AI Layer-1. Beyond building, I host and lead developer events, onboard hundreds of builders, and focus on creating products and communities that actually deliver value across Africa.",
  avatarUrl: "/eze.png",
  skills: [
    { name: "Web3 Development", icon: ReactLight },
    { name: "Smart Contracts", icon: NextjsIconDark },
    { name: "DeFi", icon: Typescript },
    { name: "Ecosystem Growth", icon: Nodejs },
    { name: "Community Building", icon: Nodejs },
    { name: "Developer Relations", icon: Nodejs },
    { name: "Events & Onboarding", icon: Nodejs },
  ],
  highlights: [
    { title: "Web3 Dev", value: "Smart Contracts & DeFi" },
    { title: "Awards", value: "Tutor of the Year" },
    { title: "Community", value: "0G Ng and Africa" },
    { title: "Job", value: "Leading 0G Initiative in Nigeria" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" }, -- IGNORE
  ],
  contact: {
    email: "name@example.com",
    tel: "+2340000000000",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/Ransom070400", icon: Icons.github, navbar: true },
      LinkedIn: { name: "LinkedIn", url: "https://www.linkedin.com/in/eze-ransom-281640295", icon: Icons.linkedin, navbar: true },
      X: { name: "X", url: "https://x.com/ezeransome", icon: Icons.x, navbar: true },
      email: { name: "Send Email", url: "#", icon: Icons.email, navbar: false },
    },
  },
  work: [
    {
      company: "Zero Gravity",
      href: "#",
      badges: [],
      location: "Nigeria",
      title: "Leading 0G Initiative in Nigeria",
      logoUrl: "/0g_logo.webp",
      start: "2024",
      end: "Present",
      description:
        "Leading ecosystem growth activities and developer onboarding for Zero Gravity in Nigeria and across Africa.",
    },
    {
      company: "Core Ecosystem",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Web3 Developer & Ecosystem Contributor",
      logoUrl: "/CORE.png",
      start: "2023",
      end: "2024",
      description:
        "Built and shipped Web3 products, supported builders, and contributed to ecosystem growth initiatives.",
    },
    {
      company: "Sui Ecosystem",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Builder & Community Contributor",
      logoUrl: "/sui.jpg",
      start: "2023",
      end: "2024",
      description:
        "Worked on cross-border liquidity products and helped onboard builders through education and events.",
    },
  ],
  education: [],
  projects: [
    {
      title: "Metamuse",
      href: "https://muse-364595.netlify.app/",
      dates: "2024",
      active: true,
      description:
        "A Web3 platform for artists to collaborate, mint NFTs, and auction their artwork.",
      technologies: ["Web3", "NFTs", "Community"],
      links: [
        { type: "GitHub", href: "https://github.com/Ransom070400/METAMUSE1.git", icon: <Icons.github className="size-3" /> },
        { type: "Live Demo", href: "https://muse-364595.netlify.app/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "/metamuse.jpg",
      video: "",
    },
    {
      title: "Flow",
      href: "https://flow-x-landing-page.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A cross-border liquidity protocol for stablecoins on Sui, solving remittance and liquidity challenges in Africa.",
      technologies: ["Sui", "Stablecoins", "DeFi"],
      links: [
        { type: "GitHub", href: "https://github.com/Ransom070400/flowx_npm_package.git", icon: <Icons.github className="size-3" /> },
        { type: "Live Demo", href: "https://flow-x-landing-page.vercel.app/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "/flow.webp",
      video: "",
    },
    {
      title: "Pingou",
      href: "https://www.ransomeze.site/pingou.live",
      dates: "2024",
      active: true,
      description:
        "A cross-border liquidity protocol for stablecoins on Sui, solving remittance and liquidity challenges in Africa.",
      technologies: ["Sui", "Cross-border Payments", "Liquidity"],
      links: [
        { type: "GitHub", href: "https://github.com/Ransom070400/pingou.git", icon: <Icons.github className="size-3" /> },
        { type: "Live Demo", href: "https://www.ransomeze.site/pingou.live", icon: <Icons.globe className="size-3" /> },
      ],
      image: "/pingou.png",
      video: "",
    },
    {
      title: "Bingo",
      href: "https://5ostl-faaaa-aaaah-aq3pq-cai.icp0.io/",
      dates: "2024",
      active: true,
      description: "A decentralized Web3 site that connects wastes to recyclers.",
      technologies: ["Web3", "Sustainability", "Marketplace"],
      links: [
        { type: "GitHub", href: "https://github.com/Ransom070400/BinGO1.git", icon: <Icons.github className="size-3" /> },
        { type: "Live Demo", href: "https://5ostl-faaaa-aaaah-aq3pq-cai.icp0.io/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "/Bingo.jpg",
      video: "",
    },
    {
      title: "VeriChain",
      href: "https://verichain-site-ywgs.vercel.app/",
      dates: "2024",
      active: true,
      description: "A KYC app that enables you to do your KYC once and reuse it anytime.",
      technologies: ["KYC", "Identity", "Blockchain"],
      links: [
        { type: "GitHub", href: "https://github.com/Ransom070400/Verichain-site.git", icon: <Icons.github className="size-3" /> },
        { type: "Live Demo", href: "https://verichain-site-ywgs.vercel.app/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "/verichain.jpg",
      video: "",
    },
  ],
  hackathons: [] as Array<{
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    links: Array<{ title: string; icon: ReactNode; href: string }>;
  }>,
} as const;
