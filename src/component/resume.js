import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2 className="title">Resume</h2>
      <div className="resume-content">
        <p>
          Download my resume:{' '}
          <a
            href="./resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume PDF
          </a>
        </p>
      </div>

      <div className="proficiency-group">
        <div className="proficiency-item">
          <h3 className="proficiency-heading">Frontend</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
          </ul>
        </div>
        <div className="proficiency-item">
          <h3 className="proficiency-heading">Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST API</li>
            <li>GraphQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="proficiency-item">
          <h3 className="proficiency-heading">Frameworks</h3>
          <ul>
            <li>React</li>
            <li>MERN Stack</li>
          </ul>
        </div>
        <div className="proficiency-item">
          <h3 className="proficiency-heading">Architecture</h3>
          <ul>
            <li>Model-View-Controller (MVC)</li>
          </ul>
        </div>
      </div>



    </section>
  );
};

export default Resume;

