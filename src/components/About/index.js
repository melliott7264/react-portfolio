import React from 'react';
import Footer from '../Footer';
import './About.css';

// This component was taken just about directly from the HTML/CSS only version of the portfolio with the addition
// of the Footer component at the bottom.
function About() {
  return (
    <div className="about-page">
      <section id="about" className="container">
        <div className="row">
          <div className="outer-box col">
            <div className="inner-box">
              <img
                className="about-pic"
                src="assets/images/HeadshotThumb-1.jpg"
                alt="headshot for Mark Elliott"
              />
              <p className="about-text">
              Full Stack Web Developer with extensive experience in Information Technology working with clients at all levels of the organization to ascertain client needs and create appropriate technical solutions. Functioned as a web developer in support of various personal and self-employment business endeavors for over 10 years mostly on a WordPress platform using HTML, CSS, Javascript, PHP, and MySQL to create and customize websites. Completed a 24 week Coding Bootcamp at the University of Richmond to enhance skills as a fullstack developer including the successful deployment of several collaborative coding projects.   Continuing to pursue personal web development projects.  Reliable and organized with excellent verbal and written communication skills. A self-starter with a track record of being a team leader, solving complex problems,  and doing what is necessary to get the job done. A persistent and patient problem solver. Always learning.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
