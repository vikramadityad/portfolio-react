import React from 'react';

const AboutMe = () => {
  return (

      <section className="bio">
      <div className="bio_desc">
        <div className="intro_block">
          <div className="greeting">Nice to meet you!</div>
          <div className="name">I'm <span className='rectangle'>Vikram Devaguptapu.</span></div>

        </div>
        <img src="./images/istem.jpg" alt="Vikram Speaking" className="my-photo" />
        {/* <h2 className='title'>About Me</h2> */}
        <p> I'm based in Fredericton, Canada, and my passion and motivation are driven by a desire to create solutions that address real-world problems. </p>
          <p> <span className='rectangle_light'>My newfound superpower?</span> It's a foundational understanding of full-stack coding vocabulary, the ability to comprehend its intricacies, and the capacity to integrate them to create a functional web application. This proficiency is supported by over a decade of experience in technical product management, business analysis, and sales. I've also had the privilege of contributing to health tech research, commercializing research, and engaging in cross-functional collaborations.
            Thanks for visiting! In my portfolio section, you'll find examples of coding projects I've worked on while acquiring my coding skills. I'm eager and interested in collaborating on potential projects.
          </p>
    
      </div>
    </section>

  );
};

export default AboutMe;
