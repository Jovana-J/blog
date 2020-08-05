import React from "react";

export default function About({ data }) {
  return (
    <div className="Section">
      <div className="About" id="About">
        <div className="labelAbout">{data.label}</div>
        <div className="paragraphAbout">{data.paragraph}</div>
      </div>
    </div>
  );
}
