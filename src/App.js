import React from "react";
import "./App.css";

function App() {
  const data = [
    {
      name: "HTML+CSS",
      logo: "👉",
      color: "#35C58E",
    },
    {
      name: "JavaScript",
      logo: "👌",
      color: "#C54635",
    },
    {
      name: "Web Design",
      logo: "🔥",
      color: "#6735C5",
    },
    {
      name: "Git and Github",
      logo: "❤️",
      color: "#C58235",
    },
    {
      name: "React",
      logo: "😊",
      color: "#35A8C5",
    },
    {
      name: "Nextjs",
      logo: "😊",
      color: "#ABC535",
    },
  ];
  return (
    <div className="box">
      <div>
        <img
          src="https://images.unsplash.com/photo-1513715222050-1aefe23d3fd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlnJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="sadid"
        />
      </div>
      <div>
        <h3 className="heading">Jonas Schmedthmann</h3>
        <p>
          Reprehenderit voluptate fugiat enim cupidatat elit occaecat ad in.
          Laborum esse magna ut laboris ex veniam ipsum incididunt sit in non.
          Ullamco sit minim ut amet magna velit magna mollit incididunt ipsum
          velit est ea. Dolor sit voluptate do sit ipsum id Lorem culpa
        </p>
        <div className="subContainer">
          {data.map((el, index) => {
            return (
              <div
                className="customDiv"
                style={{ backgroundColor: `${el["color"]}` }}
              >
                {el["name"]} <span>👉</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
