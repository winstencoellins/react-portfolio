import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about">
        <div className="about-container">
            <h1 className="title">Education</h1>
            <hr className="edu-hr" />
            <ul className="about-education-list">
              <li className="edu-li">
                <p className="univ">University of Wisconsin - Madison</p>
                <p className="date-attend">From: Aug 2020 - May 2022</p>
                <p className="edu-degree">Bachelor of Science in Data Science, Certificate in Computer Science</p>
              </li>
              <li className="edu-li">
                <p className="univ">Minnesota State University, Mankato</p>
                <p className="date-attend">From: Aug 2018 - May 2020</p>
                <p className="edu-degree">Major in Computer Science</p>
              </li>
            </ul>
        </div>

        <div className="about-container">
          <h1 className="title">Experience</h1>
          <hr className="exp-hr" />
          <ul className="exp-list">
            <li className="exp-li">
              <p className="exp-title">McBurney Disability Resouce Center</p>
              <p className="exp-loc">Madison, WI</p>
              <p className="exp-content">Department of the University of Wisconsin - Madison focusing on supporting disability students with the purpose to pursue a higher education. I worked as an IT Assistant to support the functionality and productivity of the department. During my time here, I implemented the Barcode System to increase the productivity. As an addition, I assisted and guided the Assitive Technology team to produce accessible files using technology such as HTML/CSS, Pandoc (Haskell Library), and Gitbash. Most of the time, I also work independently after checking-in daily with Associate Director (supervisor).</p>
            </li>
            <li className="exp-li">
              <p className="exp-title">Residential Life</p>
              <p className="exp-loc">Mankato, MN</p>
              <p className="exp-content">Department of Housing in Minnesota State University, Mankato provides housing more than over 2800 students. I worked together with the Residential team staffs to manage more than 10 residential buildings in the University. Daily tasks include leading front-desk student staffs and share administrative tasks and operational functions associated with the residence hall community. The team also coordinated with event coordinator to set up event and provide support with materials they needed for the event. Researching about resident information that no longer live in residential area to forward packages and mails that were left behind.</p>
            </li>
          </ul>
        </div>

        <div className="about-container">
            <h1 className="title">Interest</h1>
            <hr className="interest-hr" />
            <ul className="about-interest-list">
              <li className="interest-li">
                <p className="interest-title">Art</p>
                <p className="interest-subject">Photography, Design, Music</p>
              </li>
              <li className="interest-li">
                <p className="interest-title">Technology</p>
                <p className="interest-subject">Robotics, Artificial Intelligence, Software, Hardware</p>
              </li>
              <li className="interest-li">
                <p className="interest-title">Business</p>
                <p className="interest-subject">Finance, Stock Market, Startups</p>
              </li>
            </ul>
        </div>
    </div>
  );
}

export default About