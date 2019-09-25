import React, { useState } from "react";

import { Projects } from "./Projects";
import { IconSmall } from "./imageComponents/IconSmall"

export const DeveloperProjects = () => {
  const [projectsCategories, setProjectsCategories] = useState({
    0: {
      title: "Full Stack Applications",
      path: "./src/data/projectsFullStack.json",
      hidden: true
    },
    1: {
      title: "Front End Applications",
      path: "./src/data/projectsFrontEnd.json",
      hidden: true
    },
    2: {
      title: "Mobile Applications",
      path: "./src/data/projectsMobile.json",
      hidden: true
    },
    3: {
      title: "Coding Exercises",
      path: "./src/data/projectsExercises.json",
      hidden: true
    }
  });

  let icon;
  //let projectsCategoryClassName;
  const projsCats = Object.keys(projectsCategories).map(key => {
    projectsCategories[key].hidden
      ? icon = (<IconSmall src="./src/img/icon/plus.png" alt="plus-icon"/>)
      : icon = (<IconSmall src="./src/img/icon/minus.png" alt="minus-icon" />);

    return (
      <div key={projectsCategories[key].title}>
        <div
          className="section"
          onClick={() => {
            setProjectsCategories({
              ...projectsCategories, [key]: {
                id: projectsCategories[key].id,
                title: projectsCategories[key].title,
                path: projectsCategories[key].path,
                hidden: !projectsCategories[key].hidden
              }
            });
          }}
        >
          {icon}
          &nbsp;
          <div className="section-title">{projectsCategories[key].title}</div>
        </div>
        <Projects path={projectsCategories[key].path} />
      </div>
    );
  });

  return <>{projsCats}</>;
};
