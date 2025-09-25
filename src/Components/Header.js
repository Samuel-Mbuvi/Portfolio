import React from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";

function Header() {
  const { linkdein, github } = socialMediaUrl;

  return (
    <header className="container mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 px-3 max-w-screen-xl">
      {/* Logo */}
      <NavLink to="/">
        <img className="w-32 sm:w-38" src={logos.logogradient} alt="logo" />
      </NavLink>

      {/* Navigation */}
      <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-center w-full sm:w-auto gap-2 mt-2 sm:mt-0">
        {/* Main Links */}
        <ul
          className="flex flex-wrap justify-center 
                     space-x-3 sm:space-x-6 lg:space-x-8
                     text-[12px] sm:text-base lg:text-lg
                     font-medium dark:text-light-content w-full"
        >
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/resume">Resume Outline</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/technologies">Technologies</NavLink></li>
          <li><NavLink to="/lab-challenges">Lab Challenges</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        {/* Social Icons */}
        <ul
          className="flex justify-center sm:justify-start items-center 
                     mt-2 sm:mt-0 
                     space-x-3 sm:space-x-4 lg:space-x-6"
        >
          <li>
            <a href={linkdein} target="_blank" rel="noreferrer noopener">
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="16"
                height="16"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 0.6C7.047 0.6 0.6 7.047 0.6 15c0 7.953 6.447 14.4 14.4 14.4 7.953 0 14.4-6.447 14.4-14.4C29.4 7.047 22.953 0.6 15 0.6ZM11.475 20.97H8.559V11.585h2.916v9.385Zm-1.476-10.54c-.921 0-1.516-.653-1.516-1.46 0-.823.614-1.456 1.554-1.456.94 0 1.516.633 1.534 1.456 0 .807-.594 1.46-1.572 1.46ZM22.125 20.97h-2.916V15.77c0-1.21-.423-2.032-1.478-2.032-.805 0-1.283.557-1.495 1.093-.078.19-.097.46-.097.729v5.41H13.22V14.58c0-1.172-.037-2.151-.076-2.994h2.534l.134 1.303h.058c.384-.612 1.325-1.515 2.898-1.515 1.919 0 3.357 1.285 3.357 4.048v5.548Z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener">
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="16"
                height="16"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0C6.713 0 0 6.713 0 15c0 6.637 4.293 12.244 10.256 14.231.75.131 1.031-.319 1.031-.713 0-.356-.019-1.537-.019-2.793-3.768.694-4.743-.919-5.043-1.762-.169-.431-.9-1.762-1.537-2.118-.525-.281-.9-.975.356-.994 1.181-.019 2.025 1.087 2.306 1.537 1.35 2.269 3.506 1.631 4.369 1.238.131-.975.525-1.631.956-2.006-3.337-.375-6.825-1.669-6.825-7.406 0-1.631.581-2.981 1.537-4.031-.15-.375-.675-1.912.15-3.975 0 0 1.256-.394 4.125 1.537 1.2-.338 2.475-.507 3.75-.507s2.55.169 3.75.507c2.869-1.95 4.125-1.537 4.125-1.537.825 2.062.3 3.6.15 3.975.956 1.05 1.537 2.381 1.537 4.031 0 5.756-3.506 7.031-6.844 7.406.544.469 1.012 1.369 1.012 2.775 0 2.006-.019 3.619-.019 4.125 0 .394.281.863 1.031.713 5.963-1.987 10.256-7.594 10.256-14.231C30 6.713 23.287 0 15 0Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
