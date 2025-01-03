import React from "react";
import classNames from "classnames";
import "../Styles/aboutMenu.css";

const AboutSubheading = ({ title, content, active, onClick, menuItem }) => {
  const subContainerClass = `sub-container-${menuItem}`;

  return (
    <div
      className={classNames(subContainerClass, { "active-subheading": active })}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <div className="p-container">
        {typeof content === 'string' ? (
          <p>{content}</p>
        ) : (
          content
        )}
      </div>
    </div>
  );
};

export default AboutSubheading;