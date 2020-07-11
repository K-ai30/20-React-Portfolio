import React, { Component } from "react";
import "./About.css";
import Headshot from "./Headshot1.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="container mx-auto mt-5 mb-5">
          <div className="page-header">
            <h2>
              About Me
              <div id="inIcon" className="linkedInIcon col-sm-2">
                <a
                  href="https://www.linkedin.com/in/alia-kyle-perry-mba"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    style={{ fontSize: 40, color: "#343a40" }}
                    className="fab fa-linkedin-in"
                  ></i>
                </a>
              </div>
            </h2>
          </div>

          <hr />

          <div className="row">
            <div className="col-md-3">
              <img src={Headshot} style={{ width: 275, height: 350 }} alt=" " />
              <div className="row">
                <div id="pdfIcon" className="resumeIcon col-sm-2">
                  Resume:
                  <form
                    method="get"
                    action="assets/PDF/AKP_Resume.pdf"
                    target="_new"
                  >
                    <button className="btn btn-link btn-dark" type="submit">
                      <i className="fas fa-file-pdf"></i> PDF
                    </button>
                  </form>
                </div>
                <div id="gh" className="githubIcon col-sm-2">
                  GitHub:
                  <a
                    href="https://github.com/K-ai30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      style={{ fontSize: 40, color: "#343a40" }}
                      className="fab fa-github"
                    ></i>
                  </a>
                </div>
                <div id="emailIcon" className="emailIcon col-sm-2">
                  Email:{" "}
                  <a
                    href="mailTo:perry.aliakyle@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      style={{ fontSize: 40, color: "#343a40" }}
                      className="fas fa-envelope-open-text"
                    ></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <p className="p">
                I am passionate about art, especially drawing, painting,
                photography and design. I have a Bachelor of Fine Art in
                Photography from Savannah College of Art and Design. After
                working for 5 years, I went back to school for my masters while
                working full-time. I currently hold a Master of Business
                Administration with a concentration in Marketing. Outside of my
                interests in continued learning, I volunteer and work with a
                couple of nonprofit organizations.
              </p>
              <p className="p">
                My favorite hobbies include working with digital platforms
                (Canva, Adobe Creative Suite, and Microsoft Office) and social
                media (Facebook, LinkedIn, and Instagram). Through social media,
                content creation and website updates, I often assist the
                nonprofit with whom I volunteer and whose mission I value. I
                collaborated with the nonprofit and a team of graphic designers
                and web developers to overhaul and update their website.
              </p>
              <p className="p">
                I have helped others interested in building their brand by
                creating a website and social media presence. This work led to
                my interest in coding and web development. When I am not at work
                or learning something new, I spend a great deal of time watching
                Marvel superhero movies (or Netflix and Hulu), reading science
                fiction/fiction novels, spending time with friends and family.
              </p>
              <p className="p">
                Through the Georgia Tech Coding Bootcamp, I am worked towards
                becoming a full stack web developer with the intent of focusing
                on front-end web development. I want to become a web developer
                and learn skills that make me more competitive as a digital
                marketing professional. In particular, I have enjoyed my
                exposure to coding languages and want to become more adept at
                understanding and using those languages, as it relates to web
                design and layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<About/>, document.getElementById('About'))
