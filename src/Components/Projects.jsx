import React from 'react'
import "./Projects.css";

function Projects() {
  return (
    <div className="projects__maincontainer">
        <div className="projects__mainheading">
            <h4>Browse My Recent</h4>
            <h1>Projects</h1>
        </div>

        <div className="projects__mainbody">
            <div className="project__one">
                <img src="" alt="amazon_svg" />
                <h2>Amazon-Clone</h2>
                <p>A copy of amazon with more advanced features using REACT-JS.</p>
            </div>
            <div className="project__two">
                <img src="" alt="2048_svg" />
                <h2>2048-Game</h2>
                <p>A game of 2048 as web application.</p>
            </div>
            <div className="project__three">
                <img src="" alt="laf_svg" />
                <h2>Lost & Found</h2>
                <p>A platform where people from an organization can go if they find any items or if they loose.</p>
            </div>
        </div>

    </div>
  )
}

export default Projects;