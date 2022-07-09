import React from 'react';
import Footer from '../Footer';

// This component just renders the JSX for the resume - taken directly from HTML/CSS version of portfolio
// with the addition of the link to the .pdf and the Footer component.
function Resume() {
  return (
    <div>
      <a href="/assets/downloads/resume.pdf">Download PDF of Resume</a>
      <section class="technical">
        <h3 class="align-center">Technical Skills</h3>
        <p>
          <b>Lanquages:</b> HTML5 CSS3 JavaScript Jquery Jquery UI Bootstrap
          Bulma Moment.js Day.js Node.js Express Express-Sessions SQL Sequelize
          Handlebars Mongoose React PHP Markdown
        </p>
        <p>
          <b>Applications:</b> WordPress, Elementor, Yoast, Google Analytics,
          MySQL, MySQL Workbench, PhpMyAdmin, MongoDB, Apache, Local by
          Flywheel, AWS Lightsail, AWS S3, cPanel, Filezilla, VS Code, Git,
          GitHub, MacOS, Linux, Windows, MS Word, MS Excel, Adobe Lightroom,
          Adobe PhotoShop, Google Apps
        </p>
      </section>

      <section class="experience">
        <h3 class="align-center">Experience</h3>
        <h4>Webmaster 2019-Present</h4>
        <h5>
          Central Virginia Intergroup of Overeaters Anonymous, Richmond, VA
        </h5>
        <p>
          Work with leadership on a volunteer basis to translate the
          organization mission to reach those suffering from eating disorders
          into information technology solutions serving the community of
          Overeater Anonymous meetings in the Central Virginia area.
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
        </ul>
        <h4>Proprietor/Webmaster 2010-2022</h4>
        <h5>Mark Elliott Crafts (Self-employed), Mechanicsville, VA</h5>
        <p>
          Created traditional crafts serving those collectors, reenactors, and
          sportsmen with an interest in American history and longrifle culture.
          Also worked as a photographer specializing in product and virtual
          reality photography. Used technology as a primary means to market Mark
          Elliott's unique crafts and photography work mostly on a bespoke
          basis. Nearly all revenue came through the web presence.
        </p>
        <p>
          <em>Key Accomplishments:</em>
        </p>
        <ul>
          <li>
            Received several ribbons for distinguished work on the American
            longrifle at Dixon's Gunmakers Fair, including a Best of Class
            ribbon in 2016
          </li>
          <li>
            Leather and horn work was recognized in Early American Life magazine
          </li>
          <li>Photography has been published in American Tradition magazine</li>
          <li>
            Designed, created, and maintained several websites over the years
            serving Mark Elliott's various business interests:
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

      <section class="education">
        <h3 class="align-center">Education</h3>
        <p>
          <strong>Boot Camp Certificate:</strong> University of Richmond,
          Richmond, Virginia (currently enrolled)
          <br />A 24-week intensive program focused on gaining technical
          programming skills in HTML5, CSS3, JavaScript, JQuery, Bootstrap,
          Firebase, Node Js, MySQL, MongoDB, Express, Handlebars.js, and
          ReactJS.
        </p>
        <p>
          <strong>B.S. Information Systems:</strong> Virginia Commonwealth
          University, Richmond, Virginia
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default Resume;
