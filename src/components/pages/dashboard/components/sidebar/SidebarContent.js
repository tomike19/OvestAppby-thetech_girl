import React from "react";
import "./sidebarcontent.css";
function SidebarContent({ image, isActive, imageActive, title }) {
  return (
    <div>
      <div className="sidebarcontent">
        <div className="sidebar__link ">
          {isActive ? (
            <img className="iconsvg" src={imageActive} alt="" />
          ) : (
            <img className="iconsvg" src={image} alt="" />
          )}

          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarContent;
