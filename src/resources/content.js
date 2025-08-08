import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Thomas",
  lastName: "Azar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Chief Innovation Officer",
  avatar: "/images/avatar.jpg",
  email: "Thomas.Azar@gmail.com",
  location: "America/Chicago", // IANA timezone for Huntsville, Alabama
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I share systems thinking for legal associations: AI workflows, Salesforce/Fonteva playbooks, and product updates from TrialStack.io and Connect.law.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/tazar003/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/tomazar/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>AI, automation, and platforms for trial lawyer growth</>,
  featured: {
    display: true,
    title: <><strong className="ml-4">Featured case study</strong></>,
    href: "/work/trialstack-io-litigation-workflows",
  },
  subline: (
    <>
      I'm Thomas, Chief Innovation Officer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I scale
      <br /> legal associations with Salesforce, Fonteva, and AI-driven automation. I also build products like TrialStack.io and Connect.law.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/trialstack/new-meeting-1",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Visionary executive based in Huntsville, AL with a track record of aligning technology with business goals to drive engagement, non-dues revenue, and operational scale. I lead cross-functional teams, forge strategic partnerships, and deliver platforms and automations that power measurable growth across the legal association ecosystem.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Legal Associations Management",
        timeframe: "2024 – Present",
        role: "Chief Innovation Officer",
        achievements: [
          <>Secured partnerships with key platforms and vendors, opening $1M+ in new non-dues revenue opportunities.</>,
          <>Streamlined operations with automation, CRM, and AI—enabling scale without increasing headcount.</>,
          <>Led unified messaging and campaigns that elevated Connect.law’s brand and sponsor conversion.</>,
          <>Cultivated investor, vendor, and executive partnerships to co-develop offerings and accelerate adoption.</>,
          <>Architected and launched Connect.law, uniting 12,000+ members with communities, referrals, and event resources.</>,
          <>Directed full-stack product development and go-to-market strategy; integrated Salesforce, Cvent, Attorney Share, and automation workflows.</>,
          <>Built sponsorship/content strategy and media kit, fueling sponsor growth and non-dues revenue.</>,
          <>Designed and deployed a modernized sales pipeline and CRM improving visibility, forecasting, and sales velocity.</>,
          <>Built AI-powered data pipelines and dashboards for membership behavior, content engagement, and event performance.</>,
          <>Rolled out operational playbooks across sales, marketing, and events, improving productivity by ~30%.</>,
          <>Championed a culture of experimentation and agility to continuously improve engagement and conversion.</>,
          <>Provided executive oversight on innovation projects across associations, ensuring alignment with strategic goals.</>,
          <>Advised on platform scalability and enterprise-wide integration planning for future expansion.</>,
        ],
        images: [],
      },
      {
        company: "Legal Associations Management",
        timeframe: "2018 – 2024",
        role: "Director of Information Technology",
        achievements: [
          <>Customized Salesforce/Fonteva for 30+ associations, driving membership growth from 7,500 → 14,000.</>,
          <>Directed IT strategy for 12+ annual conferences (Trial Lawyers Summit, Lanier Trial Academy) serving 15,000+ attendees.</>,
          <>Generated $1M+ in additional revenue via tech-enabled advertising, webinars, and strategic sponsorships.</>,
          <>Implemented automation, custom WordPress plugins, API integrations, and AI tools to reduce manual work ~40% and boost engagement ~25%.</>,
          <>Integrated Salesforce, Fonteva, WordPress, and PM tools to increase operational efficiency ~50% and reduce redundancies.</>,
          <>Developed member portals, online communities, and cross-platform data sync via APIs to improve collaboration and engagement.</>,
          <>Introduced task management systems and training programs, improving team efficiency ~30%.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Troy University",
        description: <>B.S., Applied Computer Science — 2017</>,
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    institutions: [
      { name: "CAE – Certified Association Executive", description: <>ASAE — Dec 2023</> },
      { name: "CMP – Certified Meeting Professional", description: <>Events Industry Council — Jan 2024</> },
      { name: "PMP – Project Management Professional", description: <>Project Management Institute — Jul 2022</> },
      { name: "Salesforce Certified Administrator", description: <>ID #21728324 — Dec 2020</> },
      { name: "Salesforce Business Analyst", description: <>ID #22305162 — Jun 2021</> },
      { name: "Salesforce Marketing Cloud Administrator", description: <>ID #22305162 — Jun 2021</> },
      { name: "Salesforce Experience Cloud Consultant", description: <>ID #22248369 — Jun 2021</> },
      { name: "Professional Scrum Master – PSM1", description: <>Jul 2021</> },
    ],
  },
  awards: {
    display: true,
    title: "Awards",
    institutions: [
      { name: "Association Forum 40 Under 40", description: <>Top emerging leader in association space</> },
      { name: "ASAE ReadyMe Leadership Program", description: <>Selected for national leadership initiative (2024)</> },
      { name: "Fonteva AMS Innovation Award", description: <>Recognized for cross-org CRM transformation</> },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      { title: "Leadership & Strategy", description: <>Executive leadership, business development, growth strategy, cross-functional delivery.</>, images: [] },
      { title: "CRM & Platforms", description: <>Salesforce (Admin, BA), Fonteva, Experience Cloud, Marketing Cloud, HubSpot, WordPress.</>, images: [] },
      { title: "Automation & AI", description: <>n8n, Make, OpenAI agents — workflow automation, data sync, and analytics.</>, images: [] },
      { title: "Events & Revenue Ops", description: <>Cvent, sponsorship ops, lifecycle comms, GTM enablement and analytics.</>, images: [] },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
