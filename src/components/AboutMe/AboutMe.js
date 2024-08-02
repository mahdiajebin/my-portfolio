import React, { useState } from 'react';
import './AboutMe.css'; 

const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);

  const handleSeeMore = () => {
    setShowMore(true);
    const element = document.getElementById('more-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-me-container">
      <div className="intro-section">
        <h2 className="display-5 fw-bold text-color mb-5">HI, I'M MAHDIA JEBIN</h2>
        <div className="col-lg-8 mx-auto">
          <p className="lead mb-4">
            I am a <strong>Frontend Focused Web Developer</strong> with a passion for building and managing the front-end of websites and web applications. You can check out some of my work in the <strong>Projects</strong> section.
          </p>
          <p className="lead mb-4"> I'm actively seeking job opportunities where I can leverage my skills, contribute to projects, and grow professionally. If you have an opportunity that aligns with my expertise, please don't hesitate to <strong>contact me</strong>.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleSeeMore}>
              See More
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Projects</button>
          </div>
        </div>
      </div>

      <div id="more-content" className={`extra-content ${showMore ? 'visible' : 'hidden'}`}>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to Know Me!</h3>
          
            <p> As a passionate and dedicated software engineer, I am committed to leveraging my expertise in [Angular, AngularJS,JavaScript, TypeScript Java, Spring Boot, React.js] to create innovative and efficient software solutions. With a strong background in backend development and a keen eye for front-end design, I have successfully contributed to various projects, delivering high-quality code and enhancing user experiences. My goal is to continuously grow and adapt in the dynamic field of software engineering, taking on challenging projects that allow me to utilize my skills and knowledge to their fullest potential. I am eager to join a forward-thinking company where I can collaborate with a talented team to drive impactful results and contribute to the organization's succes</p>
            <a href="#contact" className="btn btn--med btn--theme dynamicBgClr">Contact</a>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">Java</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">TypeScript</div>
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">Dart</div>
              <div className="skills__skill">VB.NET</div>
              <div className="skills__skill">Angular 12</div>
              <div className="skills__skill">AngularJS</div>
              <div className="skills__skill">ReactJS</div>
              <div className="skills__skill">Flutter</div>
              <div className="skills__skill">Spring Boot</div>
              <div className="skills__skill">Express.js</div>
              <div className="skills__skill">REST APIs</div>
              <div className="skills__skill">Docker</div>
              <div className="skills__skill">Jira</div>
              <div className="skills__skill">Git</div>
              <div className="skills__skill">Apache Maven</div>
              <div className="skills__skill">MySQL</div>
              <div className="skills__skill">MongoDB</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
