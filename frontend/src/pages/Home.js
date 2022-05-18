import React from "react";
import image1 from "../assets/profile.jpg";
import image2 from "../assets/html.png";
import image3 from "../assets/css.png";
import image4 from "../assets/JavaScript-Logo.jpg";
import image5 from "../assets/react.jpg";
import "./Home.css";

function Home() {
  return (
    <div>
      <main className="container">
        <h1>F.J</h1>
        <div className="wrapp">
          <article className="article">
            <img src={image1} alt="" />
          </article>

          <p>
            Hello, i am Filip Jovic, web-developer from Serbia <br />
            I am building a full-stack apps, but mostly i do Frontend <br />
            Working with techonologys like scss, css, React.js, javascript
            <br />
          </p>
        </div>
      </main>

      <section className="section">
        {/* <img src={image2} alt="html" />
        <img src={image3} alt="css" />
        <img src={image4} alt="js" />
        <img src={image5} alt="js" /> */}
      </section>
    </div>
  );
}

export default Home;
