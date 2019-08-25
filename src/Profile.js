import React from "react";

const Profile = () => {
  return (
    <div class="component">
      <div class="section header">
        <div>
          <img class="headshot" src="./src/img/headShot.png" />
        </div>
        <br></br>
        <div>Max Aubain, Ph.D.</div>
      </div>
      <div class="section headline">
        <a href="./#project-manager" class="feature-ref-1">
          Project Manager
        </a>
        <a href="./#full-stack-developer" class="feature-ref-2">
          Full Stack Developer
        </a>
        <a href="./#data-analyst" class="feature-ref-3">
          Data Analyst
        </a>
      </div>
      <div class="section content">
        <ul>
          <li>
            Motivated team player and an advocate for getting the job
            done right.
          </li>
          <br></br>
          <li>
            Proven record of generating group cohesion and business
            value in interdisciplinary, technical projects.
          </li>
          <br></br>
          <li>
            I have over 10 years of experience researching, developing, and
            applying emerging technologies.
          </li>
        </ul>
      </div>
      <div class="content feature" id="project-manager">
        <div class="category">Project Manager</div>
        <div class="description">
          managing a large number of things. a great many things!
        </div>
      </div>
      <div class="content feature" id="full-stack-developer">
        hello world
      </div>
      <div class="content feature" id="data-analyst">
        hello world
      </div>
    </div>
  );
};

export default Profile;
