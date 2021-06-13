import { technologies } from "../constants/technologies";

export const skills = {
  programLanguages: [
    { name: "JavaScript", logo: technologies.JavaScript },
    { name: "TypeScript", logo: technologies.TypeScript },
  ],
  frontendTechnologies: [
    { name: "HTML", logo: technologies.HTML },
    { name: "CSS", logo: technologies.CSS },
    { name: "LESS", logo: technologies.LESS },
    { name: "React", logo: technologies.ReactJs },
    { name: "Redux", logo: technologies.Redux },
    { name: "React Native", logo: technologies.ReactNative },
    { name: "Expo", logo: technologies.Expo },
    { name: "Material UI", logo: technologies.MaterialUI },
    { name: "React-Bootstrap", logo: technologies.ReactBootstrap },
    {
      name: (
        <span>
          Styled
          <br />
          Components
        </span>
      ),
      logo: technologies.StyledComponents,
    },
  ],
  backendTechnologies: [
    { name: "Node Js", logo: technologies.Node },
    { name: "Express", logo: technologies.Express },
    { name: "MongoDB", logo: technologies.MongoDB },
    { name: "SQLite", logo: technologies.SQLite },
    { name: "Sequelize", logo: technologies.Sequelize },
    { name: "Firebase", logo: technologies.Firebase },
    { name: "Postgres", logo: technologies.Postgres },
    { name: "", logo: technologies.IndexedDB },
    { name: "MySql", logo: technologies.MySQL },
  ],
  otherTechnologies: [
    { name: "Git", logo: technologies.Git },
    { name: "npm", logo: technologies.NPM },
    { name: "Photoshop", logo: technologies.Photoshop },
    { name: "Figma", logo: technologies.Figma },
  ],
};
