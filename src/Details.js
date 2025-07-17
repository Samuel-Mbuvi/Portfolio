// Enter all your detials in this file
// Logo images
import logogradient from "./assets/Logo.png";
import logo from "./assets/LogoBlack.png";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import aftereffects from "./assets/techstack/after-effects.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import css from "./assets/techstack/css.png";
import figma from "./assets/techstack/figma.png";
import git from "./assets/techstack/git.png";
import github from "./assets/techstack/github.png";
import html from "./assets/techstack/html.png";
import indesign from "./assets/techstack/indesign.png";
import js from "./assets/techstack/js.png";
import npm from "./assets/techstack/npm.png";
import photoshop from "./assets/techstack/photoshop.png";
import php from "./assets/techstack/php.png";
import postman from "./assets/techstack/postman.png";
import premier from "./assets/techstack/premiere-pro.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import sass from "./assets/techstack/sass.png";
import tailwind from "./assets/techstack/tailwind.png";
import vscode from "./assets/techstack/vscode.png";
// Porject Images
import projectImage1 from "./assets/projects/CharityAwoke.png";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Samuel Mbuvi Obaigwa",
  tagline: "Web Developer | Graphic Designer | IT Support | Cyber Security Enthusiast | Cloud Security Specialist ",
  img: profile,
  about: `I am a passionate and versatile tech creative with hands-on experience in web development, IT support, and visual design. I enjoy turning ideas into clean, functional digital experiences—whether that’s building responsive websites, designing eye-catching graphics, or solving real-world tech problems.

  I’m constantly learning and upskilling in areas like cyber security. When I’m not coding or designing, you’ll probably find me crafting music mixes, editing videos, or managing content across social media. I love blending tech and creativity to tell stories, solve problems, and connect with people.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/samuel-obaigwa",
  github: "https://github.com/Sam-Loops",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Web Developer",
    Company: `Freelance`,
    Location: "Remote",
    Type: "Part Time",
    Duration: "Jan 2024 - Currently",
  },
  {
    Position: "Graphic Designer",
    Company: `Cerub Insurance and Investment Agency`,
    Location: "Remote",
    Type: "Full Time",
    Duration: "Sep 2019 - Aug 2023",
  },
  {
    Position: "Industrial Attatchment",
    Company: `Gusii Water and Sanitation Company`,
    Location: "Kisii",
    Type: "Full Time",
    Duration: "May 2023 - Aug 2023",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Cloud Security Specialist",
    Company: "Cyber Shujaa, Microsoft",
    Location: "Online",
    Type: "Part Time",
    Duration: "May 2025 - Present",
  },
  {
    Position: "Ethical Hacking Essentials",
    Company: `Cyber Shujaa`,
    Location: "Online",
    Type: "Part Time",
    Duration: "Oct 2024 - Nov 2024",
  },
  {
    Position: "Bachelor of Science in Computer Science",
    Company: `Kisii University`,
    Location: "Kisii Main Campus",
    Type: "Full Time",
    Duration: "Sep 2019 - Dec 2023",
  },
  {
    Position: "Diploma in Information Technology",
    Company: `Kisii University`,
    Location: "Kisii Main Campus",
    Type: "Full Time",
    Duration: "Sep 2016 - Dec 2018",
  },
  {
    Position: "Kenya	Certificate	of	Secondary	Education	(KCSE)",
    Company: `Nyanchwa High School`,
    Location: "Kisii",
    Type: "Full Time",
    Duration: "Jan 2011 - Dec 2014",
  },
   {
    Position: "Kenya	Certificate	of	Primary	Education	(KCPE)",
    Company: `Gilgil Hills Academy`,
    Location: "Gilgil",
    Type: "Full Time",
    Duration: "Jan 2002 - Dec 2010",
  },
];

// Certifications
export const certDetails = [
  {
    title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    organization: "Microsoft",
    earnedOn: "May 11, 2025",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/SamuelMbuvi-4559/6415AEBA0A872215?sharingId=BFF5ECEE6F9AF62F"
  },
  {
    title: "Cloud Security Specialist",
    organization: "Cyber Shujaa & Microsoft",
    earnedOn: "May 2025",
    link: ""
  },
  {
    title: "Ethical Hacking Essentials",
    organization: "EC-Council",
    earnedOn: "Nov 2024",
    link: "",
  }
];


// Skills
export const skills = [
  "HTML5", "CSS3", "JavaScript", "React", "PHP",
  "Tailwind CSS", "Git & GitHub", "Photoshop", "Premiere Pro",
  "InDesign", "Figma",
  "Postman", "Cybersecurity Fundamentals", "Cloud Security"
];


// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  php: php,
  photoshop: photoshop,
  aftereffects: aftereffects,
  premier: premier,
  indesign: indesign,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Charity Awoke Foundation Website",
    image: projectImage1,
    description: `The Charity Awoke Foundation website showcases community empowerment projects in Kisii, with clear donation options, impact stories, and easy navigation for visitors to learn, support, and get involved.`,
    techstack: "HTML/CSS, JavaScript, PHP, MySQL",
    previewLink: "https://charityawokefoundation.org/",
    githubLink: "https://github.com",
  },
  {
    title: "Breast Cancer prediction model using machine learning",
    image: projectImage2,
    description: `Built a machine learning model to predict whether a tumor is malignant or benign using algorithms like Logistic Regression and Random Forest, trained on medical data for accurate classification.`,
    techstack: "Jupyter Notebook, Python, NumPy, Pandas, Matplotlib",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 3",
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 4",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "mbuvisamm@gmail.com",
  phone: "+254 717 406 525",
};
