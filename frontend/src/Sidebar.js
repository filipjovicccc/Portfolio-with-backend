import React from "react";
import { links } from "./data";
import { FaTimes } from "react-icons/fa";
function Sidebar() {
  return (
    <aside className={`sidebar show-sidebar`}>
      <div className="sidebar-header">
        <button className="close-btn">
          <FaTimes />
        </button>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
