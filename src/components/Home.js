import React from 'react'
import './Home.css'
import sweResume from '../images/winstenc_swe.pdf'
import dataScienceResume from '../images/winstenc_datascience.pdf'


function Home() {
  return (
    <div className="home">
      <main className="home-content">
          <p className="p-greet">Hello, I am</p>
          <p class="p-name">Winsten Coellins</p>
          <p class="p-job">Software Engineer / Data Scientist</p>
          <ul className="resumes">
            <li><a href={sweResume} target="_blank"><button className="resume-btn">Software Engineer Resume</button></a></li>    
            <li><a href={dataScienceResume} target="_blank"><button className="resume-btn">Data Science Resume</button></a></li>    
          </ul>
      </main>

      <div className="tech-skills">
        <h1 className="tech-skills-title">Technical Skills</h1>
        <hr className="tech-skills-hr" />
        <p className="tech-skills-content">HTML/CSS, Python, JavaScript, Java, ReactJS, NodeJS, Git, R, Flask, Matplotlib, Pandas, Numpy, ...</p>
      </div>

      <div className="recent-work">
        <h1 className="recent-work-title">Recent Work</h1>
        <hr className="recent-hr" /> 
        <p className="recent-work-content">
          Recently just graduated from the University of Wisconsin - Madison, and currently living in Madison, WI. Currently focusing on looking for a job as a Software Engineer or Data Science Analytics. I love to learn new things and technical skills. My most recent work are in the University of Wisconsin - Madison as an IT Assistant. Working independently, and successfully implemented Barcode System and assisted the Assistive Technology (AT) team to increase the department's productivity.
        </p>
      </div>


    </div>
  )
}

export default Home