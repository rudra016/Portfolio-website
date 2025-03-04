import {
    mobile,
    backend,
    creator,
    web,
    intern,
    download,
    javascript,
    typescript,
    html,
    css,
    aman,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    gdsc,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJs Developer",
      icon: mobile,
    },
    {
      title: "Java Programmer",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    
  ];
  
  const experiences = [
    
    {
      title: "Freelance UI/UX",
      company_name: "Freelance",
      icon: figma,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Implementing responsive design and ensuring cross-browser compatibility.",
        " Demonstrated a strong track record of meeting project deadlines and exceeding client expectations, resulting in repeat business and positive referrals.",
        "Successfully collaborated with diverse clients to deliver customized UI/UX design solutions that enhanced user experiences and increased website engagement.",
      ],
    },
    
    {
      title: "Web Development Intern",
      company_name: "Let's Grow More",
      icon: intern,
      iconBg: "#fff",
      date: "Feb 2021 - March 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Technical Lead",
      company_name: "GDSC BBDITM",
      icon: gdsc,
      iconBg: "#fff",
      date: "Sept 2023 - Sept 2024",
      points: [
        "Provided strong technical leadership to the GDSC team, fostering a collaborative and innovative environment.",
        "Led the planning and execution of technical projects within the GDSC, ensuring successful delivery and meeting project objectives.",
        "Organized and conducted technical workshops, hackathons, and training sessions to educate club members on relevant technologies and tools.",
        "Facilitated hands-on coding sessions, encouraging practical learning experiences for members.",
      ],
    },
{
      title: "Full Stack Developer Intern",
      company_name: "Banao Technologies",
      icon: download,
      iconBg: "#fff",
      date: "July 2024 - Present",
      points: [
        "Managing the full-stack development lifecycle, implementing Node.js for scalable backend solutions, resulting in a 25% improvement in application responsiveness and reliability.",
        "Collaborated with cross-functional teams to design and deploy innovative features, driving a 15% increase in project completion efficiency and enhancing overall user experience.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rudra proved me wrong.",
      name: "Sanjay Rawat",
      designation: "Owner",
      company: "Plastify",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "Rudra was able to learn new skills and adapt to new technologies in a very short span of time, thus being productive quickly.",
      name: "Aman Kesarwani",
      designation: "Founder",
      company: "Lets Grow More",
      image: aman,
    },
    {
      testimonial:
        "Designed clean UI for our company and he was able to work very productively and punctually.",
      name: "Shiv Sharma",
      designation: "Founder",
      company: "ABT Enterprises",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
      {
      name: "Flux Form",
      description:
        "Effortlessly design AI-driven forms that captivate users and gather insights like never before. Transform data collection into a seamless experience!",
      tags: [
        {
          name: "NextJS13",
          color: "blue-text-gradient",
        },
        {
          name: "NeonDB",
          color: "green-text-gradient",
        },
        {
          name: "DrizlleORM",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://flux-form.vercel.app",
    },
    {
      name: "Deal Dropper",
      description:
        " Developed using Next.js and Bright Data's webunlocker, this e-commerce product scraping site is designed to assist users in making informed decisions.",
      tags: [
        {
          name: "NextJs13",
          color: "blue-text-gradient",
        },
        {
          name: "BrightData",
          color: "green-text-gradient",
        },
        {
          name: "Web Scraping",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://trackittoday.vercel.app",
    },
    {
      name: "Crypto Tracker",
      description:
        "Developed and launched a cryptocurrency tracking website leveraging CoinGecko API, providing real-time market data, price charts, and essential information for investors and enthusiasts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Vercel",
          color: "green-text-gradient",
        },
        {
          name: "ChakraUI",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://xcrypto-react-js-chakra-ui.vercel.app",
    },
    
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };
