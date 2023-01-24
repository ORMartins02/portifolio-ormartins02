import {
  SiPostgresql,
  SiStyledcomponents,
  SiTypescript,
  SiDjango,
  SiExpress,
  SiSqlite,
  SiDocker,
  SiGit,
  SiPython,
} from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaNode, FaReact } from "react-icons/fa";

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "JS",
    img: FaJs,
  },
  { title: "TypeScript", img: SiTypescript },
  { title: "StyledComponents", img: SiStyledcomponents },
  {
    title: "Node JS",
    img: FaNode,
  },
  { title: "Express", img: SiExpress },
  {
    title: "React",
    img: FaReact,
  },
  { title: "Docker", img: SiDocker },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "SQLite", img: SiSqlite },
  { title: "Git", img: SiGit },
  { title: "Python", img: SiPython },
  { title: "Django", img: SiDjango },
];
