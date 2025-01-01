import React from "react";
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut.png";
import deadEye from "../assets/skill.png";
import stack from "../assets/layer.png";
import envelope from "../assets/letter.png";
import "../Styles/NavPage.css";

export default function Nav() {
  const location = useLocation();

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skill":
        return "nav-skills";
      case "/stack":
        return "nav-projects";
      case "/message":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "ABOUT";
      case "/skill":
        return "SKILLS";
      case "/stack":
        return "STACK";
      case "/message":
        return "CONTACT";
      default:
        return "";
    }
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";

    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        <span className="alt-text color-black">{altText}</span>
        {isCurrent && <h1 className="page-title color-black">{pageTitle}</h1>}
      </Link>
    );
  };

  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink("/", astronautHelmet, "About", "nav-about")}
      {renderNavLink("/skill", deadEye, "Skills", "nav-skills")}
      {renderNavLink("/stack", stack, "Stack", "nav-projects")}
      {renderNavLink("/message", envelope, "Contact", "nav-contact")}
    </nav>
  );
}