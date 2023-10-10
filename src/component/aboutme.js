import React from 'react';

const AboutMe = () => {
  return (
    <section className="bio">
      <div className="bio_desc">
        <div className="intro_block">
          <div className="greeting">Nice to meet you!</div>
          <div className="name">I'm <span className='rectangle'>Vikram Devaguptapu.</span></div>
          
        </div>
        <img src="./images/istem.jpg" alt="vikram presenting" className="my-photo" />
         <p>Based in the Fredericton, Canada, Im a full-stack developer passionate about building accessible web apps that users love.
          </p>
          </div>
    </section>
  );
};

export default AboutMe;
