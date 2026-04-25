import docker from "../tech/docker.png";
import fastapi from "../tech/fastapi.png";
import jwt from "../tech/jwt.png";
import postgresql from "../tech/postgresql.png";
import python from "../tech/python.png";
import tensorflow from "../tech/tensorflow.png";
import work1 from "../projects/work-1.png";
import work2 from "../projects/work-2.png";
import work3 from "../projects/work-3.png";
import work4 from "../projects/work-4.png";
import work5 from "../projects/work-5.png";
import work6 from "../projects/work-6.png";
import work7 from "../projects/work-7.png";

export const techLogos = {
  Docker: docker,
  FastAPI: fastapi,
  JWT: jwt,
  PostgreSQL: postgresql,
  Python: python,
  TensorFlow: tensorflow,
};

export const projectAssets = {
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  work7,
};

export const projectData = [
  {
    title: "E-Commerce Web Application",
    description:
      "A full-stack e-commerce platform built with React and Node.js. Features include user authentication, product search, and a secure checkout process.",
    project_Image: work1,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "#",
    githubLink: "#",
  },
  {
    title: "Inventory Management System",
    description:
      "A comprehensive system to manage inventory, track sales, and generate reports. Designed for small to medium-sized businesses.",
    project_Image: work2,
    technologies: ["Python", "Django", "PostgreSQL"],
    link: "#",
    githubLink: "#",
  },
  {
    title: "Student Management Portal",
    description:
      "An online portal for students and faculty to manage courses, grades, and attendance. Built with efficiency and user-friendliness in mind.",
    project_Image: work3,
    technologies: ["Java", "Spring Boot", "MySQL"],
    link: "#",
    githubLink: "#",
  },
  {
    title: "Weather Forecasting App",
    description:
      "A real-time weather application that provides accurate forecasts and alerts based on the user's location.",
    project_Image: work4,
    technologies: ["React Native", "OpenWeatherMap API"],
    link: "#",
    githubLink: "#",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "An intuitive app to help users track their income, expenses, and savings goals. Includes visual data representations.",
    project_Image: work5,
    technologies: ["Flutter", "Firebase"],
    link: "#",
    githubLink: "#",
  },
  {
    title: "Chat Application",
    description:
      "A real-time messaging app with support for private and group chats, media sharing, and notifications.",
    project_Image: work6,
    technologies: ["Socket.io", "React", "Node.js"],
    link: "#",
    githubLink: "#",
  },
];
