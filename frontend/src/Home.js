import React from "react";
import { FaBars } from "react-icons/fa";

function Home() {
  return (
    <main>
      <button className="sidebar-open">
        <FaBars />
      </button>
      <button className="btn">show modal</button>
    </main>
  );
}

export default Home;
