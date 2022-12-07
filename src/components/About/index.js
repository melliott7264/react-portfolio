import React from 'react';
import Footer from '../Footer';

// This component was taken just about directly from the HTML/CSS only version of the portfolio with the addition
// of the Footer component at the bottom.
function About() {
  return (
    <div>
      <section id="about" className="container">
        <div className="row">
          <div className="col">
            <img
              className="bio-pic p-4"
              src="assets/images/HeadshotThumb-1.jpg"
              alt="headshot for Mark Elliott"
            />
          </div>
          <p className="col mt-2 p-2">
            Mark Elliott is a full stack web developer with extensive experience
            in Information Technology working with clients at all levels of the
            organization to ascertain client needs and create appropriate
            technical solutions. Functioned as a webmaster in support of various
            personal and self-employment business endeavors for over 10 years
            mostly on a WordPress platform using HTML, CSS, Javascript, PHP, and
            MySQL to create and customize websites. Completed a 24 week Coding
            Bootcamp at the University of Richmond to enhance skills as a
            fullstack developer including the successful deployment of a
            collaborative full stack MERN project creating an economics and
            finance news discussion site. Currently developing a solo MERN
            project to create a range log for muzzleloader shooters. Reliable
            and organized with excellent verbal and written communication
            skills. A self-starter with a track record of being a team leader,
            solving complex problems, and doing what is necessary to get the job
            done. A persistent and patient problem solver willing to take
            calculated risks to develop new skills. Always learning.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
