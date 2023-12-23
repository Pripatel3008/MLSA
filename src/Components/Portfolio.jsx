/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/laptop.jpg";

const imageAltText = "desktop with laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My project 🎉",
    description:
      "A password generator is a useful tool that generates strong and random passwords for users. This project aims to create apassword generator application using Python, allowing users tospecify the length and complexity of the password.",
      
      
    url: "https://pripatel3008.github.io/CODSOFT/",
  },
  {
    title: "Medpill - Provide affordable healthcare services",
    description:
      "Problem Statement/Opportunity : Access to health information: Online health websites provide easy access to health information for people who might not have access to this information otherwise. This can include people who live in remote areas or those who have limited access to healthcare resources.",
    url: "https://pripatel3008.github.io/Future_ready_internship/",
  },
  {
    title: "Python Programming",
    description:
      " The Simple To-Do List Manager is a Python-based application that allows users to manage their daily tasks and keep track of their to-do list. The application provides a user-friendly command-line interface, enabling users to add, remove, and view tasks easily. The project's main goal is to provide a straightforward and efficient way for users to organize their tasks and improve productivity.",
    url:"https://pripatel3008.github.io/CODSOFT/",
  },
  {
    title: "Python",
    description:
      " The Secure Password Generator is a Python-based application that generates strong and secure random passwords. The password generator aims to assist users in creating robust and unique passwords that are difficult to crack and enhance overall online security. The project provides a command-line interface, allowing users to customize the password length and include various character types in the generated passwords..",
    url: "https://pripatel3008.github.io/CODSOFT/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "120%", width: "120%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
