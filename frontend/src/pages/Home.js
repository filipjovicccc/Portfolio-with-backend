import React from "react";
import image1 from "../assets/profile.jpg";
import image2 from "../assets/css.jpg";
import "./Home.css";

function Home() {
  return (
    <div>
      <main className="container">
        <h1>F.J</h1>
        <div className="wrapp">
          <div className="article">
            <img src={image1} alt="" />
          </div>

          <p>
            Hello, i am Filip Jovic, web-developer from Serbia <br />
            I am building a full-stack apps, but mostly i do Frontend <br />
            Working with techonologys like scss, css, React.js, javascript
            <br />
          </p>
        </div>
      </main>
    </div>
  );
}

export default Home;
