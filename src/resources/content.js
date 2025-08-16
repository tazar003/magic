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
  headline: <>Building smarter systems, not just prettier screens</>,
  featured: {
    display: true,
    title: <><strong className="ml-4">Featured case study</strong></>,
    href: "/work/trialstack-io-litigation-workflows",
  },
  subline: (
    <>
      I design and automate experiences that make technology feel effortless.
      <br /> From concept to launch, I bridge the gap between vision and execution, crafting tools, workflows, and platforms that work as good as they look.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://tidycal.com/thomasazar",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Thomas Azar, Chief Innovation Officer, and I believe technology should feel like an accelerant — not a bottleneck.
        <br /><br />
        I work at the intersection of strategy, tech, and growth, building platforms, automations, and partnerships that help associations scale without piling on more complexity.
        <br /><br />
        Over the past few years, I've built and launched platforms, automations, and campaigns that have reshaped how associations engage members and generate revenue. From architecting Connect.law — a centralized membership platform uniting 25+ associations with communities, referrals, and event resources — to designing AI-powered data pipelines, modern CRMs, and sponsor-ready digital assets, my work consistently turns strategy into measurable results.
        <br /><br />
        My approach is simple: find the friction, remove it, and replace it with something that works harder for the people using it. Sometimes that means deploying automation to cut hours of manual work, other times it's rolling out a sales playbook or integrating event platforms with CRMs for real-time visibility. Whatever the project, the goal is the same — measurable growth, clearer insight, and better experiences for members, partners, and teams.
        <br /><br />
        I've led cross-functional teams, cultivated high-value partnerships, and launched unified campaigns that drive engagement and open new non-dues revenue streams. Along the way, I've rolled out operational playbooks that boost productivity by 30%, integrated systems like Salesforce, Cvent, Fonteva, Feathr, and Mailchimp, and championed a culture of experimentation so teams can adapt fast and execute even faster.
        <br /><br />
        When I'm not building systems or scaling programs, you'll usually find me outdoors with my family, chasing my kids around the backyard, or in the garage turning a stack of lumber into something useful.
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
          <>As Chief Innovation Officer, I drive growth and digital transformation across associations by aligning technology with business goals. I've forged partnerships with key vendors to expand member benefits and open new revenue streams, while streamlining operations through automation, CRM, and AI. I led the launch of Connect.law, a centralized membership platform uniting 25+ associations with communities, referral tools, and event resources. Alongside that, I've delivered AI-powered data pipelines and dashboards, modernized sales pipelines and CRMs, and rolled out playbooks that boosted cross-functional productivity by 30%. My focus is creating scalable systems, unified campaigns, and strategic collaborations that fuel measurable growth and adoption across the association ecosystem.</>,
        ],
        images: [],
      },
      {
        company: "Legal Associations Management",
        timeframe: "2018 – 2024",
        role: "Director of Information Technology",
        achievements: [
          <>In this role, I scaled technology operations to support 30+ associations and over 15,000 annual event attendees. By customizing Salesforce Fonteva, I helped membership grow from 7,500 to 14,000, while leading IT strategy for major conferences like the Trial Lawyers Summit and Lanier Trial Academy. I introduced automation, AI, and marketing platforms like n8n, Make, and Salesforce Marketing Cloud to reduce manual workloads by 40% and increase engagement by 25%. My work also unlocked $1M+ in non-dues revenue through digital campaigns, webinars, and sponsorships. Beyond revenue and platforms, I focused on organizational efficiency — integrating systems, launching member portals and online communities, and training staff on new tools to raise team productivity by 30%.</>,
        ],
        images: [],
      },
      {
        company: "Micro Support Services",
        timeframe: "2015 – 2018",
        role: "Senior Systems Administrator",
        achievements: [
          <>I managed IT systems and event technology infrastructure, ensuring stability and security for conferences and client operations. I designed disaster recovery protocols, maintained cybersecurity measures, and supported organizations with Office 365 and other cloud-based tools to enhance collaboration and operational efficiency.</>,
        ],
        images: [],
      },
      {
        company: "The National Trial Lawyers",
        timeframe: "2012 – 2014",
        role: "Web Developer",
        achievements: [
          <>I built a scalable network of 25+ association websites, streamlining publishing workflows and driving 20% higher engagement through improved SEO and usability. These early projects laid the foundation for my later focus on scalable platforms and digital strategy.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },
  certifications: {
    display: true,
    title: "Certifications",
    images: [
      { src: "/images/certifications/CAE.png", alt: "CAE - Certified Association Executive", title: "CAE - Certified Association Executive", width: 100, height: 100 },
      { src: "/images/certifications/cmp.png", alt: "CMP - Certified Meeting Professional", title: "CMP - Certified Meeting Professional", width: 100, height: 100 },
      { src: "/images/certifications/pmp.png", alt: "PMP - Project Management Professional", title: "PMP - Project Management Professional", width: 100, height: 100 },
      { src: "/images/certifications/psm.png", alt: "Professional Scrum Master – PSM1", title: "Professional Scrum Master – PSM1", width: 100, height: 100 },
      { src: "/images/certifications/sfadmin.png", alt: "Salesforce Certified Administrator", title: "Salesforce Certified Administrator", width: 100, height: 100 },
      { src: "/images/certifications/sfanalyst.png", alt: "Salesforce Business Analyst", title: "Salesforce Business Analyst", width: 100, height: 100 },
      { src: "/images/certifications/sfmarketing.png", alt: "Salesforce Marketing Cloud Administrator", title: "Salesforce Marketing Cloud Administrator", width: 100, height: 100 },
      { src: "/images/certifications/sfexperience.png", alt: "Salesforce Experience Cloud Consultant", title: "Salesforce Experience Cloud Consultant", width: 100, height: 100 },
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
      "Leadership & Strategy",
      "Salesforce Admin",
      "Fonteva",
      "Experience Cloud", 
      "Marketing Cloud",
      "HubSpot",
      "WordPress",
      "n8n",
      "Make",
      "OpenAI",
      "Cvent",
      "Automation",
      "AI Workflows",
      "CRM Integration",
      "Event Technology",
      "Revenue Operations"
    ],
  }
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
