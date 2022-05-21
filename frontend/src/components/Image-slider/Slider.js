import React, { useState, useEffect } from "react";
import { FaPeopleArrows, FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";
import "./Slider.css";

function Slider() {
  const [tech, setTech] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = tech.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, tech]);

  return (
    <section className="section">
      <div className="container">
        <div className="title">
          <h2>Techonologys i use</h2>
        </div>
        <div className="section-center">
          {tech.map((technology, personIndex) => {
            const { id, img, name, title, definition } = technology;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === tech.length)
            ) {
              position = "lastSlide";
            }
            return (
              <slider key={id} className={position}>
                <img src={img} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{definition}</p>
                <FaQuoteRight className="icon" />
              </slider>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index - 1)}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Slider;
