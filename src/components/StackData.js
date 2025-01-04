import homerental from "../assets/homerental.png";
import readyspace from "../assets/readyspace.png";
import ecom from "../assets/ecommers.png";
import faqproject from "../assets/intern.png";
import mediblog from "../assets/Medical.png";
import tincat from "../assets/TinCat.png";
import portfolio from "../assets/hackii.png";

export const projectsData = {
  webApps: [
    {
      title: "Portfolio Website",
      description: "Personal portfolio with cyberpunk theme built using React and modern web technologies. Features interactive UI, animations, and responsive design with Tailwind CSS.",
      tech: ["React", "JavaScript", "CSS", "Tailwind"],
      link: "https://github.com/yourusername/portfolio",
      status: "Completed",
      image: portfolio
    },
    {
      title: "Interactive FAQ & Swiper",
      description: "Implemented interactive FAQ toggles, video scroller with background highlights, and Swiper coverflow effect. Features responsive design and horizontal scroll animations.",
      tech: ["JavaScript", "HTML", "CSS", "Swiper.js"],
      link: "https://github.com/shashishsoni/intern-web",
      status: "Completed • Internship",
      image: faqproject
    },
    {
      title: "MediBlog Platform",
      description: "A responsive healthcare blogging platform with article management, profile systems, and rich media support. Includes category management and dynamic navigation.",
      tech: ["JavaScript", "HTML", "CSS", "Bootstrap"],
      link: "https://github.com/shashishsoni/mediblog",
      status: "Completed",
      image: mediblog
    },
    {
      title: "TinCat Website",
      description: "A fun, Tinder-inspired website for cats. Features responsive design and modern UI elements using Tailwind CSS and Bootstrap.",
      tech: ["Tailwind", "Bootstrap", "HTML", "CSS"],
      link: "https://github.com/shashishsoni/TinCat-Website",
      status: "Completed",
      image: tincat
    }
  ],
  fullStack: [
    {
      title: "E-Commerce Anime Store",
      description: "Designed an anime merchandise platform with advanced authentication and cart features. Implemented context-based state management and seamless backend-frontend interaction.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "JWT", "Axios"],
      link: "https://github.com/shashishsoni/MERN-E-COMMERCE?tab=readme-ov-file",
      status: "Completed • Jul 2024",
      image: ecom
    },
    {
      title: "ReadySpace CMS",
      description: "Developed a Django-based web app with Wagtail CMS, custom models, and responsive design. Configured ModelAdmin for optimized content management workflows.",
      tech: ["Django", "Python", "PostgreSQL", "Wagtail CMS", "JavaScript", "SCSS"],
      link: "https://github.com/shashishsoni/ReadySpace-website",
      status: "Completed • Oct 2022",
      image: readyspace
    },
    {
      title: "Home Rental Booking System",
      description: "Designed an intuitive booking interface with Material UI and React.js. Implemented JWT authentication and Stripe payment processing, improving engagement by 40%.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Express", "Stripe", "Material UI", "Redux"],
      link: "https://github.com/shashishsoni/Home-rental-booking",
      status: "Completed • Nov 2024",
      image: homerental
    }
  ]
};