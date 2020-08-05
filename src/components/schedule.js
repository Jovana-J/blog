import React, { useState } from "react";

export function Day(props) {
  function daysColor() {
    var daysName = document.getElementsByName("days");
    var daysLabel = document.getElementsByTagName("label");
    for (let i = 0; i < daysName.length; i++) {
      if (daysName[i].checked) {
        daysLabel[i].style.color = "blue";
      } else {
        daysLabel[i].style.color = "rgb(110, 110, 110)";
      }
    }
  }
  return (
    <label
      for={props.days}
      className="days"
      onClick={() => props.click(props.days)}
    >
      <input
        type="radio"
        id={props.days}
        name="days"
        onChange={() => daysColor()}
        style={{ display: "none" }}
      ></input>
      {props.days}
    </label>
  );
}

export default function Schedule({ data }) {
  var week = [];
  for (const key in data) {
    week.push(key);
  }

  var d = new Date();

  const [state, setState] = useState(
    d.getDay() === 6 || d.getDay() === 0
      ? "It's Weekend"
      : data[week[d.getDay()]]
  );
  function handleChange(params) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (params === key) {
          setState(data[key]);
        }
      }
    }
  }

  return (
    <div className="Section">
      <div className="Schedule" id="Schedule">
        <div className="labelSchedule">{data.label}</div>
        <div className="daysSchedule">
          {week.splice(1).map((element) => {
            return <Day days={element} key={element} click={handleChange} />;
          })}
        </div>
        <div className="codeSchedule">{state}</div>
      </div>
    </div>
  );
}
