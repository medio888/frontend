import React from "react";

const CourseItem = (props) => {
  const cardColor = props.status === "finish" ? "green" : "red";

  return (
    <div
      className="courseItem"
      style={{
        backgroundColor: cardColor,
        padding: "15px",
        borderRadius: "12px",
        color: "white"
      }}
    >
      <div className="courseLeft" style={{ backgroundColor: "transparent" }}>
        <h2>Title: {props.title}</h2>
        <p>Duration: {props.duration}</p>
        <p>Description: {props.description}</p>
      </div>

      <div className="courseRight" style={{ backgroundColor: "transparent" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRiYZsYi2rorlc8PM-OLUuN-fe-07JgCZmABf_Skmp4RZVaTL2sc6-kXq&s=10"
          alt={props.title}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "50%"
          }}
        />

        <button style={{ width: "100px", height: "30px", cursor: "pointer" }}>
          подробнее
        </button>
      </div>
    </div>
  );
};

export default CourseItem;