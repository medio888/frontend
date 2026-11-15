
import "./App.css";
import CourseItem from "./components/CourseItem/CourseItem";

function App() {
  const arrayMens = ["Mederbek", "Aibek", "Nursultan", "Aibolat", "Maksat"];
  const arrayWomens = ["Aigerim", "Ainura", "Aizhan", "Ainagul", "Ainash"];

  const courses = [
    {
      name: "HTML",
      duration: 3,
      descr: "Html - it is good",
      time: 2,
      id: 1
    },
    {
      name: "CSS",
      duration: 3,
      descr: "Css - it is good",
      time: 2,
      id: 2
    },
    {
      name: "JS",
      duration: 3,
      descr: "JavaScript - it is good",
      time: 2,
      id: 3
    },
    {
      name: "React js",
      duration: 3,
      descr: "React js - it is good",
      time: 2,
      id: 4
    }
  ];

  return (
    <div className="App">
      <div>
        <h1>CATS</h1>

        <div className="coursesList">
          <h2 style={{ color: "blue" }}>
            Boys: {arrayMens.map((boy) => (
              <h3 key={boy}>{boy}</h3>
            ))}
          </h2>

          <h2 style={{ color: "pink" }}>
            Girls: {arrayWomens.map((girl) => (
              <h3 key={girl}>{girl}</h3>
            ))}
          </h2>

          {courses.map((course) => (
            <CourseItem
              key={course.id}
              title={course.name}
              duration={course.duration}
              description={course.descr}
              time={course.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
