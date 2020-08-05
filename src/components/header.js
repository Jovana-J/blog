import React from "react";

export default function Header({ data }) {
  return (
    <div className="Header">
      <div className="HeaderLinks">
        <div
          className="img"
          style={{ backgroundImage: `url(${data.img})` }}
        ></div>
        <div className="name">{data.name}</div>
        <div className="navLinks">
          {data.nav &&
            data.nav.map((element) => {
              return (
                <a href={`#${element}`} className="links">
                  {element}
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
}
