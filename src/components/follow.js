import React from "react";

export default function Follow({ data }) {
  const links = [];
  const linkPath = [];
  for (const key in data) {
    links.push(key);
    if (data.hasOwnProperty(key)) {
      linkPath.push(data[key]);
    }
  }
  const icon = linkPath.splice(1).map((element) => {
    return (
      <div
        style={{ backgroundImage: `url(${element})` }}
        className="icon"
      ></div>
    );
  });

  return (
    <div className="Follow">
      <div className="FollowLinks">{icon}</div>
    </div>
  );
}
