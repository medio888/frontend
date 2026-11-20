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
      id: 1,
      status: "finish"
    },
    {
      name: "CSS",
      duration: 3,
      descr: "Css - it is good",
      time: 2,
      id: 2,
      status: "unfinish"
    },
    {
      name: "JS",
      duration: 3,
      descr: "JavaScript - it is good",
      time: 2,
      id: 3,
      status: "finish"
    },
    {
      name: "React js",
      duration: 3,
      descr: "React js - it is good",
      time: 2,
      id: 4,
      status: "unfinish"
    }
  ];

  const getCourses = (status) =>
    courses
      .filter((course) => course.status === status)
      .map((course) => (
        <CourseItem
          key={course.id}
          title={course.name}
          duration={course.duration}
          description={course.descr}
          time={course.time}
          status={course.status}
        />
      ));

  return (
    <div className="App">
      <header className="header">
        <div>
          <div className="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8p1BGjLrY5gxF4tgjqwraIIH730JP4P9wwWCn3HEcw&s=10"
              alt="Logo"
            />
          </div>

          <div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </header>

      <div className="coursesList">
        {/* <h2 style={{ color: "blue" }}>Boys:</h2>

        {arrayMens.map((boy) => (
          <h3 key={boy}>{boy}</h3>
        ))}

        <h2 style={{ color: "pink" }}>Girls:</h2>

        {arrayWomens.map((girl) => (
          <h3 key={girl}>{girl}</h3>
        ))} */}

        {getCourses("finish")}
        {getCourses("unfinish")}
      </div>
    </div>
  );
}

export default App;