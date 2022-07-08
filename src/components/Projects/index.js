import React from 'react';
import Footer from '../Footer';

function Projects({ projectArray }) {
  return (
    <div>
      <section>
        {projectArray.map((project) => (
          <article className="project">
            <a href={project.deployedUrl}>
              <img src={project.imgUrl} alt={project.imgAlt} />
            </a>
            <div className="project-title">
              <h4>{project.title}</h4>
              <h5>{project.description}</h5>
              <em>
                <a className="github" href={project.gitHubUrl}>
                  GitHub Repository
                </a>
              </em>
            </div>
          </article>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Projects;
