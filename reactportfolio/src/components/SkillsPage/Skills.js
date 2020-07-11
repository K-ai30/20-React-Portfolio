import React from 'react';
import './Skills.css';

export default function Skills() {
    return (
        <div id="apps" className="container">
        
        <div className="row text-center mt-4">
            <div className="card mb-3 col-md-4 bg-secondary mx-auto" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title text-white" style={{textAlign: "center" }}><i className="fas fa-code"></i> Front End Technologies <i className="fas fa-laptop-code"></i></h5>
                <h3 className="icon" className="col-2"><i className="devicon-html5-plain-wordmark colored"></i></h3>
                <h3 className="icon" className="col-2"><i className="devicon-css3-plain-wordmark colored"></i></h3>
                <h3 className="icon" className="col-2"><i className="devicon-bootstrap-plain-wordmark colored"></i></h3>
                <h3 className="icon" className="col-2"><i className="devicon-javascript-plain colored"></i></h3>
                <h3 className="icon" className="col-3"><i className="devicon-jquery-plain-wordmark colored"></i></h3>
                <h3 className="icon" className="col-3"><i className="devicon-devicon-plain-wordmark"></i></h3>
              </div>

            </div>
            

            <div className="card mb-3 col-md-4 bg-secondary mx-auto" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title text-white" style={{textAlign: "center" }}><i className="fas fa-database"></i> Back End Technologies <i className="fas fa-server"></i></h5>
                <h3 className="icon" className="col-3"><i className="devicon-nodejs-plain colored"></i></h3>
                <h3 className="icon" className="col-3"><i className="devicon-express-original"></i></h3>
                <h3 className="icon" className="col-3"><i className="devicon-mysql-plain-wordmark colored"></i></h3>
                <h3 className="icon" className="col-3"><i className="devicon-mongodb-plain colored"></i></h3>
                <h3 className="icon" className="col-3"><i className="devicon-react-original-wordmark colored"></i></h3>
              </div>
            </div>

            <div className="card mb-3 col-md-4 bg-secondary mx-auto" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title text-white" style={{textAlign: "center" }}><i className="fas fa-tools"></i> Other Tools & Applications <i className="fas fa-code-branch"></i></h5>
                <h3 className="icon" className="col-3"><i className="devicon-apple-original colored"></i></h3>
                <h3 className="icon" className="col-3"><i className="devicon-github-plain-wordmark colored"></i></h3>
                <h3 className="icon" className="col-3"><i className="devicon-gitlab-plain-wordmark colored"></i></h3>
                <h3 className="icon" className="col-3"><i className="devicon-heroku-plain-wordmark colored"></i></h3>
                <h3 className="icon" className="col-3"><i className="devicon-photoshop-line colored"></i></h3>
                <h3 className="icon" className="col-3"><i className="devicon-slack-plain colored"></i></h3>
                <h3 className="icon" className="col-3"><i className="devicon-visualstudio-plain colored"></i></h3>
                <h3 className="icon" className="col-3"><i className="devicon-wordpress-plain colored"></i></h3>
              </div>
            </div>
        </div>

        <div className="row">
          <div className="card mb-3 col-md-12 bg-secondary mx-auto" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title text-white" style={{textAlign: "center" }}><i className="fas fa-user-graduate"></i> Degrees & Certifications <i className="fas fa-award"></i></h5>
                <ul>
                  <li className="education">Full Stack Coding Bootcamp, Georgia Institute of Technology</li>
                  <li className="education">M.B.A. Marketing, Northeastern University</li>
                  <li className="education">B.F.A. Photography, Savannah College of Art & Design</li>
                </ul>
            </div>
          </div>
        </div>

        </div>
    )
}