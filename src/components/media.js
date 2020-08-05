import React from "react";

export default function Media({ data }) {
  setTimeout(() => {
    document.getElementsByClassName("media")[0].innerHTML = data.media;
  }, 0);
  return (
    <div className="Section">
      <div className="media"></div>
    </div>
  );
}
