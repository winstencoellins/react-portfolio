import React from 'react'
import './Projects.css'
import finalReport from '../images/final_report.pdf'

function Projects() {
  return (
    <div className="projects">
        <div className="software-project">
            <h1 className="swe-title">Software Engineering Projects</h1>
            <hr className="swe-hr"/>
            <ul className="list-swe-projects">
                <li className="swe-project">
                    <a href="https://bit.ly/3z2LHmn" target="_blank"><p className="grow swe-project-title">IP Address Tracker</p></a>
                    <p>Developed the UI of the Web Application using React JS Framework with the help of react-leaflet to generate the map.
                    Also, in this project I utilized the IP Geolocation API to track user's IP Address and location. As an addition, I use Github to as a media to deploy and maintain the versioning of the Web Application.
                    </p>
                </li>
                <li className="swe-project">
                    <a href="https://bit.ly/3LmTVIH" target="_blank"><p className="grow swe-project-title">URL Shortener Landing Page</p></a>
                    <p>
                        Developed the UI of the Web Application using React JS Framework and utilized the media query function to make the webpage responsive so it is easy to view in different devices. As an addition, I utilized the GET/POST shrtcode API to shorten the link. Github is used to do the versioning of the website.
                    </p>
                </li>
                <li className="swe-project">
                    <a href="https://bit.ly/3GMsxDf" target="_blank"><p className="grow swe-project-title">Advice App Generator</p></a>
                    <p>
                        Developed the UI of the Web Application using React JS Framework and utilized the Advice Slip API to generate advice.
                    </p> 
                </li>
            </ul>
        </div>
        <div className="data-project">
            <h1 className="data-title">Data Science Projects</h1>
            <hr className="data-hr"/>
            <ul className="list-data-projects">
                <li>
                    <a href={finalReport} target="_blank"><p className="grow data-project-title">New York Rental Housing Prices</p></a>
                    <p>Analyzed rental housing price in New York City using supervised and unsupervised Machine Learning with dataset provided by codecademy. Applied Principal Component Analysis (PCA) as a method to classify rental housing price in each borough of New York City. Also applied Multiple Linear Regression to predict the housing price of New York City with the accuracy of model reaching 75%.</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Projects