import {
  Trash2,
  PencilRuler,
  Headphones,
  BadgeDollarSign,
  RotateCcw,
  Volume2,
  LayoutGrid,
  ClipboardList,
  Bell,
  User,
  Search,
  IndianRupee,
  Video,
  Mic,
  PhoneCall,
  Hexagon,
  LogOut,
  Headset,
  ChevronDown,
  Trash,
  Plus,
  Check,
  MessageSquare,
  ShieldCheck,
  Bookmark,
  Users,
  Eye,
  ChevronRight,
  ChevronLeft,
  ChevronDownIcon,
  Gauge,
  Pencil,
} from "lucide-react";

export const heroData = {
  left: {
    title: ["WE MAKE BUSINESSES", "THE BEST THEY CAN BE"],
    button: "About us",
    
    description: `We Are A Creative Brand Consultancy. We've Been
    Collaborating With Leading Organizations To Solve Brand
    And Business Challenges Since 1979. Our Team Across Nine
    Locations Uses The Power Of Creativity To Transform
    Businesses For The Better.`,
  },
  right: {
    title: ["CREATIVITY WITH THE ", "POWER TO TRANSFORM"],
    button: "OUR WORK",

    description: `See how the work we have done for our clients and 
    partners across industries, regions, and markets has shaped
     their future and set them up for long-term sustainable 
     success.`,
    author: ["Marzena", "Creative Director", "Brand Strategist"],
    image: "/images/hero.jpg",
  },
  nav: [
    { name: "About", path: "/about" },
    { name: "Works", path: "/works" },
    { name: "Blogs", path: "/blog" },
    { name: "Get in Touch", path: "/contact" },
  ],
  logo: "/images/logo.png",
};

export const footerData = {
  left: {
    title: "Let’s talk",
    link: "Contact",
  },
  right: {
    title: "Join our teams",
    link: "Careers",
  },
  socialLinks: ["LinkedIn", "Instagram"],
  legalLinks: ["Imprint", "Data Privacy", "Cookies Settings"],
  copyright: "© Veins Studio 2026. All rights reserved.",
};

// About Page Data

 export const servicesData = [
  {
    title: "UI/UX Designing",
    image: "/images/service1.png",
  },
  {
    title: "Marketing",
    image: "/images/service1.png",
  },
  {
    title: "Creative Strategy",
    image: "/images/service1.png",
  },
  {
    title: "Development",
    image: "/images/service1.png",
  },
];

export const whyChooseData = [
  {
    id: "01",
    title: "User-Centric Approach",
    description:
      "We design based on real user behavior—not assumptions. Every decision is backed by user flows, pain points, and usability insights.",
  },
  {
    id: "02",
    title: "Design Strategy Technology",
    description:
      "We design based on real user behavior—not assumptions. Every decision is backed by user flows, pain points, and usability insights.",
  },
  {
    id: "03",
    title: "Results-Driven Execution",
    description:
      "We design based on real user behavior—not assumptions. Every decision is backed by user flows, pain points, and usability insights.",
  },
  {
    id: "04",
    title: "Transparent Communication",
    description:
      "We design based on real user behavior—not assumptions. Every decision is backed by user flows, pain points, and usability insights.",
  },
  {
    id: "05",
    title: "Scalable Solutions",
    description:
      "We design based on real user behavior—not assumptions. Every decision is backed by user flows, pain points, and usability insights.",
  },
];

// processData.js

export const processData = {
  title: "Our Process",
  items: [
    {
      title: "Digital Products & Websites",
      description:
        "We design based on real user behavior—not assumptions. Every decision is backed by user flows, pain points, and usability insights.",
      image: "/images/shape1.png",
    },
    {
      title: "Branding",
      description:
        "We build new age digital first brands that makes you stand out by invoking purpose and emotional narratives.",
      image: "/images/shape2.png",
    },
    {
      title: "Research & Strategy",
      description:
      "Data and Insights are backbone of building successful products. We ensure laying a perspective that balances business objectives and customer expectations.",
      image: "/images/shape3.png",
    },
     {
      title: "Content Strategy",
      description:
      "Distinctive Content is the connecting thread that communicates with your user and enhances the user experience. We create these hooks through textual, animated and video content.",
      image: "/images/shape1.png",
    },
     {
      title: "Development",
      description:
      "Our development expertise help bring design as created to life. helping you be on the apt tech stacks and frameworks for products to scale.",
      image: "/images/shape2.png",
    },
  ],
};

export const testimonialSection = {
  heading: "Testimonial",

  subheading:
    "Don't just take our word for it - see what actual users of our service have to say about their experience.",
  testimonials: [
    {
      id: 1,
      text: "I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!",
      name: "Dr. Hamida Banu",
      role: "Freelance Designer",
      image: "/images/user4.png",
      rating: 5,
    },
    {
      id: 2,
      text: "I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.",
      name: "Tom Williams",
      role: "Software Developer",
      image: "/images/user2.png",
      rating: 4,
    },
    {
      id: 3,
      text: "I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.",
      name: "Michael Brown",
      role: "Online Entrepreneur",
      image: "/images/user3.png",
      rating: 4,
    },
    {
      id: 4,
      text: "“I was a little hesitant to switch to a new web hosting company, but I'm glad I took the plunge. The control panel is user-friendly and I love the one-click installation for popular apps. Everything has been smooth sailing since I made the switch.”.",
      name: "Sarah Johnson",
      role: "Blogger",
      image: "/images/user4.png",
      rating: 5,
    },
  ],
};

// Works Page Data
export const workData = [
  {
    title: "Eduvate",
    category: "Brand Identity, Product Strategy",
    image: "/images/work1.png",
  },
  {
    title: "Bridge It",
    category: "Brand Identity, Web Design",
    image: "/images/work2.png",
  },
  {
    title: "Maverick",
    category: "Native App, Brand Identity",
    image: null,
  },
  {
    title: "Morning Crunch",
    category: "Brand Identity, Packaging",
    image: null,
  },
  {
    title: "Eduvate",
    category: "Brand Identity, Product Strategy",
    image: null,
  },
  {
    title: "Eduvate",
    category: "Brand Identity, Product Strategy",
    image: null,
  },
   {
    title: "Maverick",
    category: "Native App, Brand Identity",
    image: null,
  },
  {
    title: "Morning Crunch",
    category: "Brand Identity, Packaging",
    image: null,
  },
  {
    title: "Eduvate",
    category: "Brand Identity, Product Strategy",
    image: null,
  },
  {
    title: "Eduvate",
    category: "Brand Identity, Product Strategy",
    image: null,
  },
   {
    title: "Eduvate",
    category: "Brand Identity, Product Strategy",
    image: null,
  },
  {
    title: "Eduvate",
    category: "Brand Identity, Product Strategy",
    image: null,
  },
];

// BlogPage Data
// export const blogData = {
//   main: {
//     title: "UIUX Portfolio",
//     subtitle: "Brand Identity, Product Strategy",
//     image: "/images/veins-banner.png",
//   },

//   side: [
//     {
//       title: "Integer Maecenas Eget Viverra",
//        description:
//       "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictu.",
//       image: "/images/side.jpg",

//       user: {
//         name: "Joanna Wellick",
//         profile: "/images/user.jpg",
//       },

//       date: "June 28, 2018",
//       viewText: "View Post",
//       tags: ["Aenean Blend", "Aliquam"],
//     },

//      {
//       title: "Integer Maecenas Eget Viverra",
//        description:
//       "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictu.",

//       image: "/images/side.jpg",

//       user: {
//         name: "Joanna Wellick",
//         profile: "/images/user.jpg",
//       },

//       date: "June 28, 2018",
//       viewText: "View Post",
//       tags: ["Aenean Blend", "Aliquam"],
//     },

//     {
//       title: "Integer Maecenas Eget Viverra",
//        description:
//      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictu.",

//       image: "/images/side.jpg",

//       user: {
//         name: "Joanna Wellick",
//         profile: "/images/user.jpg",
//       },

//       date: "June 28, 2018",
//       viewText: "View Post",
//       tags: ["Aenean Blend", "Aliquam"],
//     },
//   ],

//   grid: [
//     {
//       title: "Integer Maecenas Eget Viverra",
//        description:
//       "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
//       image: "/images/grid.jpg",

//       user: {
//         name: "Joanna Wellick",
//         profile: "/images/user.jpg",
//       },

//       date: "June 28, 2018",
//       viewText: "View Post",
//       tags: ["Brand Posting", "UIUX"],
//     },

//     {
//       title: "Integer Maecenas Eget Viverra",
//        description:
//       "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
//       image: "/images/grid.jpg",

//       user: {
//         name: "Joanna Wellick",
//         profile: "/images/user.jpg",
//       },

//       date: "June 28, 2018",
//       viewText: "View Post",
//       tags: ["Brand Posting", "UIUX"],
//     },

//     {
//       title: "Integer Maecenas Eget Viverra",
//        description:
//       "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
//       image: "/images/grid.jpg",

//       user: {
//         name: "Joanna Wellick",
//         profile: "/images/user.jpg",
//       },

//       date: "June 28, 2018",
//       viewText: "View Post",
//       tags: ["Brand Posting", "UIUX"],
//     },
//   ],
// };

export const blogData = {
  main: {
    title: "UIUX Portfolio",
    subtitle: "Brand Identity, Product Strategy",
    image: "/images/blog-banner.png",

    user: {
      name: "Joanna Wellick",
      profile: "/images/user.jpg",
    },

    date: "June 28, 2018",
    viewText: "View Post",
    tags: ["UIUX", "Brand"],
  },

  side: [
    {
      title: "Integer Maecenas Eget Viverra",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum.",
      image: "/images/side.jpg",

      user: {
        name: "Joanna Wellick",
        profile: "/images/user.jpg",
      },

      date: "June 28, 2018",
      viewText: "View Post",
      tags: ["Aenean Blend", "Aliquam"],
    },
    {
      title: "Integer Maecenas Eget Viverra",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum.",
      image: "/images/side.jpg",

      user: {
        name: "Joanna Wellick",
        profile: "/images/user.jpg",
      },

      date: "June 28, 2018",
      viewText: "View Post",
      tags: ["Aenean Blend", "Aliquam"],
    },
    {
      title: "Integer Maecenas Eget Viverra",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum.",
      image: "/images/side.jpg",

      user: {
        name: "Joanna Wellick",
        profile: "/images/user.jpg",
      },

      date: "June 28, 2018",
      viewText: "View Post",
      tags: ["Aenean Blend", "Aliquam"],
    },
  ],

  grid: [
    {
      title: "Integer Maecenas Eget Viverra",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
      image: "/images/grid.jpg",

      user: {
        name: "Joanna Wellick",
        profile: "/images/user.jpg",
      },

      date: "June 28, 2018",
      viewText: "View Post",
      tags: ["Brand Posting", "UIUX"],
    },
    {
      title: "Integer Maecenas Eget Viverra",
      description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
      image: "/images/grid.jpg",

      user: {
        name: "Joanna Wellick",
        profile: "/images/user.jpg",
      },

      date: "June 28, 2018",
      viewText: "View Post",
      tags: ["Brand Posting", "UIUX"],
    },
    {
      title: "Integer Maecenas Eget Viverra",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
      image: "/images/grid.jpg",

      user: {
        name: "Joanna Wellick",
        profile: "/images/user.jpg",
      },

      date: "June 28, 2018",
      viewText: "View Post",
      tags: ["Brand Posting", "UIUX"],
    },
    {
      title: "Integer Maecenas Eget Viverra",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
      image: "/images/grid.jpg",

      user: {
        name: "Joanna Wellick",
        profile: "/images/user.jpg",
      },

      date: "June 28, 2018",
      viewText: "View Post",
      tags: ["Brand Posting", "UIUX"],
    },
    {
      title: "Integer Maecenas Eget Viverra",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
      image: "/images/grid.jpg",

      user: {
        name: "Joanna Wellick",
        profile: "/images/user.jpg",
      },

      date: "June 28, 2018",
      viewText: "View Post",
      tags: ["Brand Posting", "UIUX"],
    },
  ],
};

// Blog Details 
export const blogDetails = {
  hero: {
    title: "Designing Experiences, Not Just Interfaces",
    date: "09 April 2026",
    image: "/images/blog.png", // replace with your image
  },

  sidebar: [
    "About",
    "Our Design Process",
    "Skill and Tools",
    "Conclusion",
  ],

  intro: `I’m a UI/UX designer focused on creating intuitive, user-friendly, and visually engaging digital products. My goal is to bridge the gap between user needs and business goals through thoughtful design.`,

  about: {
    title: "About Us",
    description: [
      `I am a passionate UI/UX designer who believes that design is not just about how things look, but how they work. I specialize in crafting seamless user experiences by understanding user behavior, identifying pain points, and translating them into simple and effective solutions.`,
      `With a strong foundation in design principles and modern tools, I aim to create products that are both functional and aesthetically pleasing.`,
      `Good design is invisible. It should feel natural, intuitive, and effortless. I believe that every design decision should be backed by logic, user research, and clarity of purpose.`,
      `My focus is always on:`
    ],
    focus: ["Simplicity", "Usability", "Consistency", "Accessibility"],
  },

  quote:
    "While UI focuses on the look and feel, UX defines how a product works. A beautiful interface without usability will fail.",

  process: {
    title: "Our Design Process",
    steps: [
      "I am a passionate UI/UX designer who believes that design is not just about how things look, but how they work. I specialize in crafting seamless user experiences by understanding user behavior, identifying pain points, and translating them into simple and effective solutions.",
      "1. Research",
      "I start by understanding the problem, target audience, and business objectives. This includes user research, competitor analysis, and market insights.",
      "2. Define",
      "I identify key problems and user pain points, and define clear goals for the project.",
      "3. Ideation",
    ],
  },

  skills: {
    title: "Skills & Tools",
    design: [
      "UI Design",
      "UX Research",
      "Wireframing & Prototyping",
      "Interaction Design",
      "Usability Testing",
    ],
    tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
  },
};

// Case Study Details
export const caseStudyData = {
  hero: {
    title: `Transforming job hunting with a user-centric, efficient & personalised hiring experience.`,
    image1: "/images/phone1.png",
  },

  sidebar: {
    logo: "/images/bridge-logo.png",
    fields: [
      { label: "Domain", value: "" },
      { label: "Platform", value: "" },
      { label: "Services", value: "" },
    ],
  },

  overview: {
    title: "OVERVIEW",
    description: `Bridge it is a modern, user-friendly job finding application designed to make the job search experience intuitive, personalised, and efficient. The app connects job seekers with the most relevant job opportunities, empowering users to discover, apply, and manage their applications in a seamless, one-stop platform.`,
  },

  problem: {
    title: "PROBLEM",
    description: `Job seekers often struggle to find relevant job opportunities efficiently, as existing platforms lack personalised job recommendations and require extensive search time. Additionally, recruiters face challenges in filtering and connecting with qualified candidates, leading to a mismatch in job-candidate alignment.`,
  },
};

export const designProcessData = {
  titleTop: "Preparation",
  titleBottom: "DESIGN PROCESS",

  steps: [
    {
      id: 1,
      title: "Test",
      items: ["Usability Testing", "A/B Testing", "Design Refinement"],
      icon: "edit",
      position: "top",
    },
    {
      id: 2,
      title: "Prototype",
      items: ["UI Research", "Style Guide", "Wireframes", "HiFi Screens"],
      icon: "search",
      position: "topRight",
    },
    {
      id: 3,
      title: "Ideate",
      items: ["Information Architecture", "User Flow"],
      icon: "bulb",
      position: "right",
    },
    {
      id: 4,
      title: "Define",
      items: ["User Personas", "Competitor Analysis"],
      icon: "grid",
      position: "bottomRight",
    },
    {
      id: 5,
      title: "Empathize",
      items: ["User Research", "Survey Questionnaire", "Affinity Mapping"],
      icon: "divide",
      position: "bottom",
    },
  ],
};

export const userPersonaData = {
  title: "User Persona",

  personas: [
    {
      id: 1,
      name: "Palak Sharma",
      role: "Student",
      image: "/images/person1.png",
      quote:
        "Networking can be helpful, but it’s hard to build connections as a fresh graduate with no experience.",
    },

    {
      id: 2,
      name: "Prajyot Kore",
      role: "Data Analyst",
      image: "/images/person2.png",
      quote:
        "It would be great if platforms could connect us directly with recruiters rather than automated application systems.",
    },

     {
      id: 3,
      name: "Anjali Bhanushali",
      role: "Graphic Designer",
      image: "/images/person3.png",
      quote:
        "Applying for jobs feels like a black hole—there’s rarely any transparency in the hiring process.",
    },
  ],
};

export const competitiveAnalysisData = {
  title: "Competitive Analysis",

  companies: [
    {
      name: "Indeed",
      logo: "/images/indeed.png",
    },
    {
      name: "LinkedIn",
      logo: "/images/linkedin.png",
    },
    {
      name: "Naukri",
      logo: "/images/naukri.png",
    },
  ],

  rows: [
    {
      feature: "Interview Scheduling",
      values: [false, false, false],
    },
    {
      feature: "PLACEHOLDER",
      values: [true, true, false],
    },
    {
      feature: "Resume/CV Builder",
      values: [true, false, true],
    },
    {
      feature: "ATS Checker",
      values: [false, false, false],
    },
    {
      feature: "PLACEHOLDER",
      values: [true, true, true],
    },
    {
      feature: "PLACEHOLDER",
      values: [true, true, false],
    },
  ],
};

// LogoBreakdown Data

export const logoBreakdownData = {
  title: {
    first: "Logo",
    second: "Breakdown",
  },

  mainLogo: "/images/bridge-logo1.png",

  symbolLogo: "/images/bridge-logo-symbol.png",

  bridgeImage: "/images/bridge-bg.png",

  bottomLogo: "/images/bridge-bottom-logo.png",

  topText: {
    normal1: "Symbolizing the job seeker and",
    highlight1: '"I"',
    normal2: "of the",
    highlight2: '"it"',
    normal3: "of the brand",
  },

  middleText: {
    normal1: "Symbolizing the Bridge that will connect you to your",
    normal2: "dream job and also the",
    highlight1: '"B"',
    normal3: "in",
    highlight2: '"Bridge"',
  },

  bottomText: {
    highlight: "Bridge it",
    normal:
      "- symbolizing that this platform will help connect the user to the job, bridging the gap",
  },
};

// Typography Data
export const typographyData = {
  title: "Typography",

  mainText: {
    heading: "Aa",
    fontName: "Poppins",
  },

    uppercase: {
    firstLine: "ABCDEFGHIJKLMOPQ",
    secondLine: "RSTUVWXYZ",
  },

  lowercase: {
    firstLine: "abcdefghijklmnop",
    secondLine: "qrstuvwxyz",
  },

  numbers: {
    firstLine: "1234567",
    secondLine: "890",
  },
};

// Color Palette Data
export const colourData = {
  title: "Colours",

  colors: [
    {
      bg: "#3A83BB",
      code: "3A83BB",
    },
    {
      bg: "#3A3A3A",
      code: "3A3A3A",
    },
    {
      bg: "#F6F6F6",
      code: "F6F6F6",
    },
    {
      bg: "#8FB9DA",
      code: "8FB9DA",
    },
    {
      bg: "#262626",
      code: "262626",
    },
  ],
};

// Icons Data
export const iconsData = {
  title: "Icons",

  icons: [
    Trash2,
    PencilRuler,
    Headphones,
    BadgeDollarSign,
    RotateCcw,
    Volume2,

    LayoutGrid,
    ClipboardList,
    Bell,
    User,
    Search,
    IndianRupee,

    Video,
    Mic,
    PhoneCall,
    Hexagon,
    LogOut,
    Headset,

    ChevronDown,
    Trash,
    Plus,
    Check,
    MessageSquare,
    ShieldCheck,

    Bookmark,
    Users,
    Eye,
    ChevronRight,
    ChevronLeft,
    ChevronDownIcon,
    Gauge,
    Pencil,
  ],
};

//Conclusion Data
export const conclusionData = {
  title: "Conclusion",

  description: `
Bridge It began with a clear problem: job seekers were frustrated, overlooked, and lost in platforms that weren't built with them in mind. Through thorough research surveys with 169 users, 10 in-depth interviews, competitive analysis, and empathy mapping the design process stayed grounded in real human needs rather than assumptions.

The result is an app that doesn't just list jobs. It understands the user their skills, their goals, their anxieties and builds an experience around them. From personalised recommendations and 1-click apply to built-in interview scheduling and application tracking, every feature was a direct response to a pain point uncovered during research.

What this project reinforced most is that great UX isn't about adding more features it's about removing friction. Job searching is already stressful. Bridge It's role is to make that journey feel supported, transparent, and human.

This case study is a reflection of a design process that listened first and built second and that approach is what makes the final product worth using.
  `,
};

// Contact Page Data
export const contactData = {
  project: {
    image: "/images/contact.png",
  },
  form: {
    title: "Tell us more....",
    fields: [
      { label: "Your name*", type: "text", name: "name" },
      { label: "Phone no.*", type: "text", name: "phone" },
      { label: "Work Email *", type: "email", name: "email" },
      { label: "How can we help? *", type: "textarea", name: "message" },
    ],
    button: "Submit Contact",
  },
};