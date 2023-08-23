/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Alonzo",
  logo_name: "Alonzo C.",
  full_name: "Alonzo Camille",
  subTitle:
    "Full Stack Developer, Thrill Seeker, Lover of All Things Sports, Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1rSEPMj_IpMHbUigC4jjAwVHWL4uV6lNa/view?usp=sharing",
  mail: "mailto:alonzocamille15@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/alonzoc15/",
  linkedin: "https://www.linkedin.com/in/alonzo-camille/",
  gmail: "mailto:alonzocamille15@gmail.com",
  twitter: "https://twitter.com/Alonzocamille1/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "🐍 Develop highly interactive User Interfaces and Backend for web applications",
        "🐍 Building responsive websites front end using ReactJS",
        "🐍 Creating application backends in Python, GraphQL, Flask, and REST-API",
        "🐍 Integration of third party services such as Firebase/ AWS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        // {
        //   skillName: "Apache",
        //   fontAwesomeClassname: "simple-icons:apache",
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "🐍 Experience working on multiple cloud platforms",
        "🐍 Experience hosting and managing websites",
        "🐍 Experience with Kubernetes Docker Environment",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "About Me",
  subtitle: "Hello I Am",
  description:
    "Alonzo Camille, a full stack software developer that loves finding innovative ways to use technology to make a simple lifestyle for anyone using it. I graduated from Florida A&M University with a Bachelors of Science in Business Administration. After Spending just over a year at Penske Truck Rental I realized that I liked the feeling of being able to wear various hats and connect with people from different backgrounds but I did not find myself emotionally fulfilled from the work I was doing. It was during this time that I had started to challenge myself and learn to code and I had learned to love the feeling of being able build something on my computer. Shortly after I had found the Digital Crafts Software Engineering Immersive and it wasn't long before I was enrolled. The Digital Crafts immersive has been my most satisfying challenge to date and has helped me fulfill a strong desire to create products with value. Since receiving my certificate in software engineering from DigitalCrafts in Atlanta, GA I relocated to Tampa, Fl where I have been employed as a Full Stack Software Developer with companies such as Peraton and FedEx Services.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Education",
      experiences: [
        {
          title: "Software Engineering Certification",
          company: "DigitalCrafts",
          company_url: "https://www.digitalcrafts.com/",
          logo_path: "dc2021-logo.png",
          duration: "August 2019 - December 2019",
          location: "Atlanta, GA",
          description: `Completed the DigitalCrafts 16 week software engineering Immersive in the Atlanta Tech Village. While enrolled in the DigitalCrafts software engineering immersive I gained experience with several highly sought after skills such as JavaScript, Python, React.js, Node.js, PostgreSQL, AWS, & more.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "B.S. in Business Administrastion ",
          company: "Florida A&M University",
          company_url: "https://www.famu.edu/",
          logo_path: "famu-logo.png",
          duration: "August 2013 - December 2017",
          location: "Tallahassee, FL",
          description: `Earned my Bachelors of Science in Business Adminstration from Florida A&M University in December of 2017.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Java Developer",
          company: "FedEx Services",
          company_url: "https://www.fedex.com/",
          logo_path: "FedEx_logo.png",
          duration: "March 2022 - July 2023",
          location: "Tampa, FL",
          description:
            "Full Stack Java Developer at FedEx Services where I oversee the end to end life cycle of software applications and products in a Agile SDLC methodology with a fully remote team. As a member of the Linehual team I have managed the software lifecycle of various products and applications. Some of the tools that I am fortunate enough to have added to skillset to contribute to my team include Java, SQL, WinSCP, Linux, and more.",
          color: "#4285F4",
        },
        {
          title: "Software Developer I",
          company: "Peraton",
          company_url: "https://www.peraton.com/",
          logo_path: "peraton-logo.png",
          duration: "October 2020 - February 2022",
          location: "Tampa, FL",
          description:
            "Full time employee contracted out the Department of Defense where I contribute to various projects as a member of the incubator development team. As a member of the incubator development team I quickly learned new backend languages and skills that i have now added to my vast knowledge in the field of Software Development. Some of the technologies that I have picked up and used to add value to my team include MongoDB, GraphQL, Docker, and more.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My Preferred method is to create Python and Node.js Backend Projects and React.js front end Project. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Let's Connect!",
    profile_image_path: "Alonzo-Prof.jpg",
    description:
      "Feel free to connect with me on my Social Media profiles found below. If you would like you can even send me an email or give me a phone call. I would love to hear from you!",
    location: "Tampa, FL",
    email: "Alonzocamille15@gmail.com",
    phone: "516 - 512 - 1996",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Chicken Crossing",
      url: "https://github.com/alonzoc15/DC-Wk-2-pygame",
      description:
        "This is a simple game of written in the python language.  Written as a group project as an interactive game where the goal of the game is to cross the road without being hit in order to increase your score.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "2",
      name: "Recipe Junkie",
      url: "https://github.com/alonzoc15/front-end-rj",
      description:
        "This is a sample of my front end demo.  Written as a group project pulling an API from two endpoints. Recipe Junkie helps users find recipes for meals based on the search of a single ingredient. Written with HTML, CSS, and JavaScript.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "3",
      name: "SportsBryte",
      url: "https://github.com/alonzoc15/Sports-Bryte",
      description:
        "Full Stack Project made as the capstone for the Digital Crafts Web Development Imemrsive. SportsBryte is a single page web application built using react and redux Javascript frameworks on the front and end and a NoSQL Google Firebase database as the backend api.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
