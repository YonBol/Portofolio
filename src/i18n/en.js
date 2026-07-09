export default {
  navbar: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    aiShowcase: 'AI Showcase',
    work: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm Yon 👋",
    toggleDeveloper: 'Web Developer',
    toggleAi: 'AI Content',
    resumeBtn: 'Resume',
    portfolioBtn: 'Projects',
    developer: {
      main: 'Full Stack Developer for ',
      accent: 'Web Apps',
      subtitle: 'I turn ideas into working products, from the interface down to the backend.',
    },
    ai: {
      main: 'AI Developer for ',
      accent: 'Automation & UGC',
      subtitle: 'I design AI agents, automations and UGC-style content for social media.',
    },
  },
  about: {
    title: 'About',
    description:
      "Hi there! I'm Yon Bollain. I spend my time building AI agents and automated workflows that run tasks on their own, and experimenting with AI-generated avatars, voices and UGC-style videos. I come from a web development background, so I like taking things from an idea all the way to a working product.",
    educationTitle: 'Education:',
    education: ['Software Developer', 'Technician in Networks and Computer Systems'],
    coreStackTitle: 'Core Stack:',
    aiStackTitle: 'AI & Automation Stack:',
  },
  services: {
    title: 'Services',
    subtitle: 'What I can build for you, end to end.',
    items: [
      {
        icon: '⚙️',
        title: 'AI Automation',
        desc: 'Custom workflows and API integrations that remove repetitive tasks and connect your tools.',
      },
      {
        icon: '🎬',
        title: 'AI Content & UGC',
        desc: 'AI-generated avatars, voices and short-form video content built for social media and marketing.',
      },
      {
        icon: '💻',
        title: 'Web Development',
        desc: 'I turn ideas into working products — websites, dashboards and internal tools that your team actually uses.',
      },
    ],
  },
  aiShowcase: {
    title: 'AI Showcase',
    subtitle: "AI avatars, voices and UGC-style content I'm producing right now. Demos landing here soon.",
    badge: 'COMING SOON',
    items: [
      { label: 'UGC AVATAR DEMO', title: 'AI UGC Avatar' },
      { label: 'WORKFLOW PIPELINE DEMO', title: 'Workflows & Pipelines' },
      { label: 'AUTO-GENERATED AD DEMO', title: 'Automated Ad' },
    ],
  },
  process: {
    title: 'Process',
    subtitle: 'How a project with me usually goes.',
    toggleDeveloper: 'Web Developer',
    toggleAi: 'AI Content',
    developer: [
      { n: '01', title: 'Discovery Call', desc: 'We talk through your goals, users and what the product needs to do.' },
      { n: '02', title: 'Plan the Build', desc: 'I map out the pages, data and features before writing code.' },
      { n: '03', title: 'Develop', desc: 'Building the frontend and backend, piece by piece.' },
      { n: '04', title: 'Ship & Support', desc: 'Launch it, then fix and improve based on real use.' },
    ],
    ai: [
      { n: '01', title: 'Discovery Call', desc: 'We talk through your goals and figure out what to automate or create.' },
      { n: '02', title: 'Map the Workflow', desc: 'I design the flow: tools, data, and where AI fits in.' },
      { n: '03', title: 'Build & Train', desc: 'Development of the automation, agent or content pipeline.' },
      { n: '04', title: 'Deploy & Iterate', desc: 'Ship it, monitor results, and refine based on real usage.' },
    ],
  },
  work: {
    title: 'Projects',
    subtitle: 'Some of my web development projects.',
    codeBtn: 'Code',
    demoBtn: 'Demo',
    items: [
      {
        title: 'POWERLUX',
        description: 'Supply company management app built in Laravel.',
        img: 'somllums.webp',
        code: 'https://github.com/YonBol/POWERLUX',
        demo: 'https://seashell-gazelle-602285.hostingersite.com/home',
      },
      {
        title: 'MYPHONERESCUE',
        description: 'Mobile repair shop made with WordPress.',
        img: 'myphonerescue.png',
        code: '#',
        demo: 'https://www.myphonerescue.com.au',
      },
      {
        title: 'Y&ITECHCARE',
        description: 'Web developers business website.',
        img: 'yanditechcare.png',
        code: '#',
        demo: 'https://www.yanditechcare.com',
      },
    ],
  },
  contact: {
    title: 'Get in Touch',
    subtitle: "Don't be shy, and leave me a message :)",
    location: 'Australia / Spain / Indonesia',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending',
      sent: 'Message sent!',
      error: 'Something went wrong. Please try again or email me directly.',
    },
    validations: {
      required: 'This field is required',
      email: 'Please enter a valid email',
    },
  },
  footer: {
    more: 'More about',
    me: 'me',
  },
}
