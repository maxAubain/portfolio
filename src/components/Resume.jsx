import React from "react";

import { WebLink } from "./common/WebLink";

export const Resume = () => {
  return (
    <div className="resume-wrapper">
      <h4>
        <WebLink
          url="https://drive.google.com/open?id=1q5RSFeCHtSh95N2ofFrDlwvJRLO5XZ0f"
          linkObj="Download resume with Google Drive"
          className="weblink resume-link"
        />
      </h4>
      <object
        className="pdf"
        data="./src/pdf/Max Aubain - Resume - 2020.pdf"
        type="application/pdf"
      />
    </div>
  );
};
