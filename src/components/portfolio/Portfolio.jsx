import React, { useState, useEffect } from "react";
import axios from "axios";
import { Content } from "./Content";
import { ProjectsCount } from "./ProjectsCount";

export const Portfolio = () => {
  // Define hash of portfolio categories and project data source files
  const portfolioCats = {
    Featured: "./src/data/projectsFeatured.json",
    "Applications": "./src/data/projectsApplications.json",
    "Coding Exercises": "./src/data/projectsExercises.json"
  };

  // Get externalLinks hash containing tech keywords with related weblinks
  const [externalLinks, setExternalLinks] = useState({});
  useEffect(() => {
    if (Object.keys(externalLinks).length === 0) {
      axios.get("./src/data/externalLinks.json").then(response => {
        setExternalLinks(response.data);
      });
    }
  });

  // Set Portfolio state with initial portfolio category
  const [curPortfolioCat, setCurPortfolioCat] = useState(
    "Featured"
  );

  // Portfolio categories navlinks style (selected / unselected)
  let navlinkCN
  const PortfolioCatsNavlinks = Object.keys(portfolioCats).map(key => {
    key === curPortfolioCat
      ? (navlinkCN = "navlink-section-current")
      : (navlinkCN = "navlink-section");

    return (
      <div
        key={key}
        className={navlinkCN}
        onClick={() => {
          setCurPortfolioCat(key);
        }}
      >
        {key}
        <ProjectsCount path={portfolioCats[key]} />
      </div>
    );
  });

  // Projects object of the particular portfolio category ( selected )
  const portfolioCatContent = Object.keys(portfolioCats).map(key => {
    if (key === curPortfolioCat) {
      return (
        <Content
          key={key}
          contentCat={key}
          path={portfolioCats[key]}
          externalLinks={externalLinks}
        />
      );
    }
  });

  // When externalLinks data is loaded, content is displayed
  let portfolioCatContentCN;
  if (Object.keys(externalLinks).length > 0) {
    curPortfolioCat === "Featured"
      ? (portfolioCatContentCN =
        "project-categories-wrapper project-categories-wrapper-featured")
      : (portfolioCatContentCN = "project-categories-wrapper");
    return (
      <>
        <div className="navlink-section-container">
          {PortfolioCatsNavlinks}
        </div>
        <div className={portfolioCatContentCN}>{portfolioCatContent}</div>
      </>
    );
  } else {
    return <></>;
  }
};
