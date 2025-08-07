import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Thomas",
  lastName: "Azar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Chief Innovation Officer",
  avatar: "/images/avatar.jpg",
  email: "info@thomazar.com",
  location: "America/Chicago", // IANA timezone for Huntsville, Alabama
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about legal tech, AI, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/tazar003",
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
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Thomas, Chief Innovation Officer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
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
        {person.firstName} is a {person.location}-based {person.role} helping legal associations and law firms scale with automation, AI, and digital systems. He leads platform strategy, tech innovation, and operational transformation across some of the most influential trial lawyer brands in the country.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Legal Associations Management",
        timeframe: "2018 – Present",
        role: "Chief Innovation Officer",
        achievements: [
          <>Scaled operations for 30+ associations using Salesforce, Fonteva, WordPress, and AI — increasing membership from 7,500 to 14,000.</>,
          <>Directed tech strategy for 12+ major conferences including Trial Lawyers Summit and Lanier Trial Academy — supporting 15,000+ attendees.</>,
          <>Launched Connect.law and TrialStack.io to power online communities, education, and marketing for trial lawyers and vendors.</>,
          <>Generated $1M+ in new non-dues revenue via tech-driven campaigns, sponsorships, and automation-first workflows.</>,
          <>Cut manual work 40% across teams by implementing n8n, Make.com, Salesforce Marketing Cloud, and custom WordPress plugins.</>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Connect.law Platform",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Troy University",
        description: <>B.S. in Applied Computer Science, 2017</>,
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    institutions: [
      {
        name: "CAE – Certified Association Executive",
        description: <>ASAE, 2023</>,
      },
      {
        name: "CMP – Certified Meeting Professional",
        description: <>Events Industry Council, 2024</>,
      },
      {
        name: "PMP – Project Management Professional",
        description: <>Project Management Institute, 2022</>,
      },
      {
        name: "Salesforce Certified Administrator",
        description: <>Credential ID #21728324, 2020</>,
      },
      {
        name: "Salesforce Business Analyst",
        description: <>Credential ID #22305162, 2021</>,
      },
      {
        name: "Salesforce Marketing Cloud Administrator",
        description: <>Credential ID #22305162, 2021</>,
      },
      {
        name: "Salesforce Experience Cloud Consultant",
        description: <>Credential ID #22248369, 2021</>,
      },
      {
        name: "Professional Scrum Master – PSM1",
        description: <>Scrum.org, 2021</>,
      },
    ],
  },
  awards: {
    display: true,
    title: "Awards",
    institutions: [
      {
        name: "Fonteva AMS Innovation Award",
        description: <>Recognized for cross-org CRM transformation, 2020</>,
      },
      {
        name: "Association Forum 40 Under 40",
        description: <>Top emerging leader in association space, 2024</>,
      },
      {
        name: "ASAE ReadyMe Leadership Program",
        description: <>Selected for national leadership initiative, 2024</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Automation & AI",
        description: <>n8n, Make, OpenAI, GPT agents — automating workflows, syncing data, and replacing manual tasks.</>,
        images: [],
      },
      {
        title: "CRM & Marketing Systems",
        description: <>Salesforce, Fonteva, HubSpot, WordPress, TwentyCRM — implemented across 30+ organizations and events.</>,
        images: [],
      },
      {
        title: "Platform & Product Dev",
        description: <>Next.js, Supabase, Tailwind, TypeScript — powering products like TrialStack.io, Connect.law, and speaker portals.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "TrialStack UI",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Platform workflow",
            width: 16,
            height: 9,
          },
        ],
      },
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
