// @ts-check

import React from 'react';

const Projects = () => {
  return (
  <section>
  <h2 className='title'>Portfolio</h2>
  <div className="portfolio-items">
      <div className="portfolio-item">
      <img src="./images/workscheduler.gif" alt="Work Scheduler" />
      <h3>Work Day Scheduler</h3>
      <p>A simple calendar application that allows a user to save events for each hour of a typical working day 9am to 5pm. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.</p>
      <div className="links">
        <a href="https://vikramadityad.github.io/WorkDay_Scheduler/" target="_blank" rel="noopener noreferrer">Demo</a>
        <a href="https://github.com/vikramadityad/WorkDay_Scheduler" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
    <div className="portfolio-item">
      <img src="./images/notetaker.png" alt="Note Taker" />
      <h3>Note Taker </h3>
      <p>Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.</p>
      <div className="links">
        <a href="https://note-taker-camp-4d7836941c1d.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</a>
        <a href="https://github.com/vikramadityad/noteTaker" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
    <div className="portfolio-item">
      <img src="./images/weatherdashboard.png" alt="Weather Dashboard" />
      <h3>Weather Dashboard</h3>
      <p>Weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. Retrieving data from openweather's API </p>
      <div className="links">
        <a href="https://vikramadityad.github.io/Weather_Dashboard/" target="_blank" rel="noopener noreferrer">Demo</a>
        <a href="https://github.com/vikramadityad/Weather_Dashboard" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
    <div className="portfolio-item">
      <img src="./images/whatsfordinner.png" alt="WhatsforDinner App" />
      <h3>What's For Dinner
      </h3>
      <p>A front-end Applicationto assist users in finding recipes based on their preferred food group and ingredients. Integrating data received from multiple server-side API requests</p>
      <div className="links">
        <a href="https://vikramadityad.github.io/WhatsforDinner/index.html" target="_blank" rel="noopener noreferrer">Demo</a>
        <a href="https://github.com/vikramadityad/WhatsforDinner" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
    <div className="portfolio-item">
      <img src="./images/freshfinder.png" alt="FreshFinder web app" />
      <h3>Fresh Finder</h3>
      <p>Fresh-Finder is an online grocery shopping application, It uses Sequelize, Handlebars, Javascript. </p>
      <div className="links">
        <a href="https://freshfinder-ee2adcd480d5.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</a>
        <a href="https://github.com/vikramadityad/Fresh-Finder/tree/main" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
    <div className="portfolio-item">
      <img src="./images/ecommerce.gif" alt="Ecommerce backend" />
      <h3>E-commerce Backend</h3>
      <p>Back end for an e-commerce site. Utilized Express.js API and configure it to use Sequelize to interact with a MySQL database.</p>
      <div className="links">
        <a href="https://drive.google.com/file/d/1ilOEz_VbjJyXeHD6wDwO-77hkwTgHzMF/view?usp=sharing" target="_blank" rel="noopener noreferrer">Demo</a>
        <a href="https://github.com/vikramadityad/E-commerce_Back_End" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
    
  </div>
</section>
)}

export default Projects;