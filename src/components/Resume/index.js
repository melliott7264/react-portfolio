import React from 'react';
import Footer from '../Footer';
import './Resume.css';

// This component just renders the JSX for the resume - taken directly from HTML/CSS version of portfolio
// with the addition of the link to the .pdf and the Footer component.
function Resume() {
  return (
    <div className="resume-page">
      <div className="outer-resume-box">
        <div className="resume-box">
          <a href="assets/downloads/resume.pdf">Download PDF of Resume</a>
          <section className="technical">
            <h3 className="align-center">Technical Skills</h3>
            <p>
              <b>Lanquages:</b> HTML5 CSS3 JavaScript Jquery Jquery UI Bootstrap
              Bulma Moment.js Day.js Node.js Bcrypt Express Express-Sessions SQL
              Sequelize Handlebars Mongoose React JSONWebToken GraphQL PHP
              Markdown
            </p>
            <p>
              <b>Applications:</b> WordPress, Elementor, Yoast, Google
              Analytics, Google Tag Manager, MySQL, MySQL Workbench, PhpMyAdmin,
              MongoDB, Apache, Local by Flywheel, AWS Lightsail, AWS S3, cPanel,
              Filezilla, VS Code, Git, GitHub, MacOS, Linux, Windows, MS Word,
              MS Excel, Adobe Lightroom, Adobe PhotoShop, Google Apps
            </p>
          </section>

          <section className="experience">
            <h3 className="align-center">Experience</h3>
            <h4>Teaching Assistant 2022-Present</h4>
            <h5>edX, Remote</h5>
            <p>
            Support Full-Stack Web Development Boot Camp students during class and office hours.   Guide and encourage students’ in-class activities as well as their offline work, challenges, and projects.   Grade projects and support the instructor with class management tasks.
            </p>

            <h4>Web Developer 2019-Present</h4>
            <h5>
              Central Virginia Intergroup of Overeaters Anonymous, Richmond, VA
            </h5>
            <p>
              Work with leadership on a volunteer basis to translate the
              organization mission to reach those suffering from eating
              disorders into information technology solutions serving the
              community of Overeater Anonymous meetings in the Central Virginia
              area.
            </p>
            <p>
              <em>Key Accomplishments:</em>
            </p>
            <ul>
              <li>
                Design, create, and maintain the Intergroup's website:
                <a href="https://www.centralvaoa.org">
                  https://www.centralvaoa.org
                </a>
              </li>
              <li>Support internal e-mail communication using MailChimp</li>
              <li>
                Used WordPress, Google Analytics, HTML, and CSS to create and
                maintain this site.
              </li>
            </ul>
            <h4>Proprietor/Web Developer 2010-2022</h4>
            <h5>Mark Elliott Crafts (Self-employed), Mechanicsville, VA</h5>
            <p>
              Created traditional crafts serving those collectors, reenactors,
              and sportsmen with an interest in American history and longrifle
              culture. Also worked as a photographer specializing in product and
              virtual reality photography. Used technology as a primary means to
              market Mark Elliott's unique crafts and photography work mostly on
              a bespoke basis. Nearly all revenue came through the web presence.
            </p>
            <p>
              <em>Key Accomplishments:</em>
            </p>
            <ul>
              <li>
                Crafts work and photography repeatedly recognized for excellence
              </li>
              <li>
                Designed, created, and maintained several websites over the
                years serving Mark Elliott's various business interests:
                <a href="https://www.markelliottva.com">
                  https://www.markelliottva.com
                </a>
              </li>
              <li>Provided all the photography for the websites</li>
              <li>
                Used WordPress, Elementor, Yoast, Google Analytics, HTML, CSS,
                JavaScript, PHP, MySQL, PhpMyAdmin, Adobe Lightroom, and Adobe
                Photoshop to create and maintain the websites over the years
              </li>
            </ul>
          </section>

          <section className="education">
            <h3 className="align-center">Education</h3>
            <p>
              <strong>Boot Camp Certificate:</strong> University of Richmond,
              Richmond, Virginia
              <br />A 24-week intensive program focused on gaining technical
              programming skills in HTML5, CSS3, JavaScript, JQuery, Bootstrap,
              Node Js, MySQL, MongoDB, Express, Handlebars.js, and ReactJS with
              GraphQL.
            </p>
            <p>
              <strong>B.S. Information Systems:</strong> Virginia Commonwealth
              University, Richmond, Virginia
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
