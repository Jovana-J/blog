import React from "react";

export default function Skills({ data }) {
  var skills = [];
  var skillTitle = [];
  for (const key in data) {
    skills.push(key);
    if (data.hasOwnProperty(key)) {
      skillTitle.push(
        skills.splice(1).map((element) => {
          return (
            <div className={element}>
              {element}
              <div className={`${element}bar`}>
                <div
                  className={`${element}progress`}
                  style={{ width: `${data[key]}%` }}
                ></div>
              </div>
            </div>
          );
        })
      );
    }
  }
  return (
    <div className="Section">
      <div className="Skills">
        <div className="SkillsLabel">{data.label}</div>
        {skillTitle}
      </div>
    </div>
  );
}
