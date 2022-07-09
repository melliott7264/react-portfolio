import React from 'react';
import Projects from '../Projects';

// The projectArray is the main part of this component.  It is passed to the Projects component as a props.
// Can simply add more projects by adding to the array.
const projectArray = [
  {
    title: 'Boot Camp Project 1 - Life Explorer/Trip Planner 1.0',
    description:
      'A collaborative frontend project producing a trip planner with weather forecast data using multiple lanquages, frameworks and APIs including HTML5, CSS, Bulma, JavaScript, Jquery, Jquery UI, Day.js, Postionstack, and OpenWeather. This project was produced by a three person team over two weeks including Mark Elliott, Thomas Ciszek, and Megan Middleton.',
    deployedUrl: 'https://melliott7264.github.io/vacation-planner/',
    imgUrl: '/assets/images/Project1Thumb-1.jpg',
    imgAlt: 'screenshot of Project 1 - trip planner',
    gitHubUrl: 'https://github.com/melliott7264/vacation-planner',
  },
  {
    title: 'Boot Camp Project 2 - Career Commander 1.0',
    description:
      'A collaborative full-stack project producing job search organizer using multiple lanquages and frameworks including HTML5, CSS, Bootstrap, JavaScript, Jquery, Jquery UI, Day.js, Node.js, Express, Express-Sessions, Express-Handlebars, Sequelize, and MySQL. This project was produced by a three person team over two weeks including Harrison Daniel, Mark Elliott, and Daniel Liszka. Mark Elliott mainly produced the models and database structure, server setup, and API routes.',
    deployedUrl: 'https://career-commander.herokuapp.com/dashboard/',
    imgUrl: '/assets/images/CareerCommanderThumb-1.jpg',
    imgAlt: 'screenshot of Career Commander 1.0',
    gitHubUrl: 'https://github.com/DanielLiszka/career-commander',
  },
  {
    title: 'Password Generator 1.0',
    description:
      'A random password generator written in JavaScript by Mark Elliott.',
    deployedUrl: 'https://melliott7264.github.io/password-generator/',
    imgUrl: '/assets/images/PasswordGeneratorThumb-1.jpg',
    imgAlt: 'screenshot of Run Buddy 2.0',
    gitHubUrl: 'https://github.com/melliott7264/password-generator',
  },
  {
    title: 'Code Quiz 1.0',
    description:
      'A timed JavaScript code quiz written using JavaScript and Web APIs by Mark Elliott.',
    deployedUrl: 'https://melliott7264.github.io/code-quiz/',
    imgUrl: '/assets/images/CodeQuizThumb-1.jpg',
    imgAlt: 'screenshot of Code Quiz 1.0',
    gitHubUrl: 'https://github.com/melliott7264/code-quiz',
  },
  {
    title: 'Work Day Scheduler 1.0',
    description:
      'This application is a hourly work day planner written using JavaScript, JQuery, JQuery UI, and Moment.js by Mark Elliott.',
    deployedUrl: 'https://melliott7264.github.io/work-day-scheduler/',
    imgUrl: '/assets/images/SchedulerThumb-1.jpg',
    imgAlt: 'screenshot of Work Day Scheduler 1.0',
    gitHubUrl: 'https://github.com/melliott7264/work-day-scheduler',
  },
  {
    title: "Mark's Tech Blog 1.0",
    description:
      'A simple WordPress style full stack blog built by Mark Elliott using HTML, CSS, Bootstrap, JavaScript, Handlebars, MySQL/Sequelize, Express-Sessions, Express, Bcrypt, dotenv, Node.js and hosted on Heroku.',
    deployedUrl: 'https://warm-chamber-02188.herokuapp.com/',
    imgUrl: '/assets/images/MarksTechBlogThumb-1.jpg',
    imgAlt: "screenshot of Mark's Tech Blog 1.0",
    gitHubUrl: 'https://github.com/melliott7264/marks-tech-blog',
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
