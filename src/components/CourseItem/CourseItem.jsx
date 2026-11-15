import React from "react";

const CourseItem = (props) => {
  console.log(props.title);

  return (
    <div>
      <div className="courseItem">

        <div className="courseLeft">
          <h2>Title: {props.title} </h2>
          <p>Duration: {props.duration}</p>
          <p>Description: {props.descr}</p>
        </div>

        <div className="courseRight">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRiYZsYi2rorlc8PM-OLUuN-fe-07JgCZmABf_Skmp4RZVaTL2sc6-kXq&s=10" alt="" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
        </div>
        
      </div>
    </div>
  );
};

export default CourseItem;
