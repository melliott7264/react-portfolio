import React from "react";
import Projects from "../Projects";

// The projectArray is the main part of this component.  It is passed to the Projects component as a props.
// Can simply add more projects by adding to the array.
const projectArray = [
  {
    key: 0,
    title: "Muzzlelaoder Range Log 1.3",
    description:
      "A full-stack MERN project to create a range log specfic to the needs of muzzleloader shooters. Developed solely by Mark Elliott using Mongo/Mongoose, Node.js, Express, Apollo GraphQL, React, and React-Bootstrap among other components.  This is currently an PWA with caching and will soon add offline storage.",
    deployedUrl: "https://muzzleloader-range-log.herokuapp.com/",
    imgUrl: "assets/images/MuzzleloaderRangeLogthumb-1.jpg",
    imgAlt: "screenshot of Muzzleloader Range Log 1.3",
    gitHubUrl: "https://github.com/melliott7264/range-log",
  },
  {
    key: 1,
    title: "Money Matters 1.0",
    description:
      "A collaborative full-stack MERN project producing an economics and finance focused news discussion site. Produced by a four person team over two weeks including Darrin Robinson, Mark Elliott, Daniel Liszka, and Tyler Shifflett. Mark Elliott setup the client/server template, produced the Mongoose models and GraphQL API with some React work with the comments.",
    deployedUrl: "https://still-sea-70396.herokuapp.com/",
    imgUrl: "assets/images/MoneyMattersThumb-1.jpg",
    imgAlt: "screenshot of Money Matters 1.0",
    gitHubUrl: "https://github.com/melliott7264/moneymatters2",
  },
  {
    key: 2,
    title: "WordPress Demonstration",
    description:
      "This single page WordPress website was the result of an exercise to convert the Photoshop mockup shown above into a fully responsive WordPress front page.  Click on the image to see the WordPress site.  It was created using a child theme of the Understrap parent theme with a fully custom front page using BootStrap for the navbar and including JavaScript to create the What We Do Section.",
    deployedUrl: "https://demo.markelliottva.com/",
    imgUrl: "assets/images/pulse-tester.jpg",
    imgAlt: "Photoshop mockup of WordPress demonstration site",
  },
  {
    key: 3,
    title: "Mark Elliott's Personal Website",
    description:
      "This is Mark Elliott's personal website, transitioned from his last buisness site, to share his traditional arts and crafts work.  This website was recently redesigned using a custom child theme based on the Understrap parent theme.  It is fully responsive and has a carousel on the landing page written from sctach by Mark Elliott using jQuery.",
    deployedUrl: "https://markelliottva.com/",
    imgUrl: "assets/images/MarkElliottVAScreenShot-1.jpg",
    imgAlt: "screenshot of MarkElliottVa.com",
  },
  {
    key: 4,
    title: "Central Virginia Intergroup of Overeaters Anonymous Website",
    description:
      "This is a volunteer service project of Mark Elliott.  It was created using the WordPress Twenty Sixteen theme with CSS customization. The contact form is integrated with MailChimp to maintain the mailing list.",
    deployedUrl: "https://centralvaoa.org/",
    imgUrl: "assets/images/CentralVAOAScreenShot-1.jpg",
    imgAlt: "screenshot of CentralVaOa.org",
  },
  {
    key: 5,
    title: "Password Generator 1.0",
    description:
      "A random password generator written in JavaScript by Mark Elliott.",
    deployedUrl: "https://melliott7264.github.io/password-generator/",
    imgUrl: "assets/images/PasswordGeneratorThumb-1.jpg",
    imgAlt: "screenshot of Run Buddy 2.0",
    gitHubUrl: "https://github.com/melliott7264/password-generator",
  },
  {
    key: 6,
    title: "Work Day Scheduler 1.0",
    description:
      "This application is a hourly work day planner written using JavaScript, JQuery, JQuery UI, and Moment.js by Mark Elliott.",
    deployedUrl: "https://melliott7264.github.io/work-day-scheduler/",
    imgUrl: "assets/images/SchedulerThumb-1.jpg",
    imgAlt: "screenshot of Work Day Scheduler 1.0",
    gitHubUrl: "https://github.com/melliott7264/work-day-scheduler",
  },
  {
    key: 7,
    title: "Mark's Tech Blog 1.0",
    description:
      "A simple WordPress style full stack blog built by Mark Elliott using HTML, CSS, Bootstrap, JavaScript, Handlebars, MySQL/Sequelize, Express-Sessions, Express, Bcrypt, dotenv, Node.js and hosted on Heroku.",
    deployedUrl: "https://warm-chamber-02188.herokuapp.com/",
    imgUrl: "assets/images/MarksTechBlogThumb-1.jpg",
    imgAlt: "screenshot of Mark's Tech Blog 1.0",
    gitHubUrl: "https://github.com/melliott7264/marks-tech-blog",
  },
];

function Portfolio() {
  return (
    <div>
      <Projects projectArray={projectArray}></Projects>
    </div>
  );
}

export default Portfolio;
