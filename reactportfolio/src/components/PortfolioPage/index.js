import React, { Component } from "react";
import './style.css';
import YumTrucks from './YumTrucks.png';
import Burger from './burger.png';
import theHikersGuide from './theHikersGuide.png';
import DayPlanner from './fulldayplanner.png';
import CodeQuiz from './fullcodequiz.png';
import PasswordGenerator from './fullpasswordgenerator.png';

export default class Portfolio extends Component {
    render() {
        return (
            <div className="container mt-5 mb-5">
            <div className="page-header">
                <h2>Portfolio<div id="ghIcon" className="githubIcon d-flex">
                GitHub:<a href="https://github.com/K-ai30" target="_blank" rel="noopener noreferrer"><i style={{ fontSize: 40, color: "black" }} className="fab fa-github"></i></a>
                </div></h2>
            </div>

            <hr></hr>

            <div className="row">
                <div className="card mb-1 col-md-3 bg-white mx-left" style={{ width: "18rem" }}>
                <img src={YumTrucks} className="card-img" alt=" " style={{ height: "200px", width: "200px" }}/>
                <h3 id="yumtrucksbox">YumTrucks</h3>
                <h5 className="card-title text-info" style={{ textAlign: "center" }}>GitHub: <a className="githubIcon" href="https://github.com/K-ai30/YumTrucks" target="_blank" rel="noopener noreferrer"><i style= {{ fontSize: 25 }} className="fab fa-github"></i></a></h5>
                </div>

                <div className="card mb-1 col-md-3 bg-white mx-left" style={{ width: "18rem" }}>
                    <img id="eatburgerpic" src={Burger} className="card-img" alt=" " style={{ height: "200px", width: "200px" }}/>
                    <h3 id="eatburgerbox">Eat-Da-Burger!</h3>
                    <h5 className="card-title text-info" style={{ textAlign: "center" }}>GitHub: <a className="githubIcon" href="https://github.com/K-ai30/burger" target="_blank" rel="noopener noreferrer"><i style= {{ fontSize: 25 }} className="fab fa-github"></i></a></h5>
                </div>

                <div className="card mb-1 col-md-3 bg-white mx-left" style={{ width: "18rem" }}>
                    <img id="hikersguidepic" src={theHikersGuide} className="card-img" alt=" " style={{ height: "200px", width: "200px" }}/>
                    <h3 id="hikersguidebox">theHikersGuide App</h3>
                    <h5 className="card-title text-info" style={{ textAlign: "center" }}>GitHub: <a className="githubIcon" href="https://github.com/aagrosse/theHikersGuide" target="_blank" rel="noopener noreferrer"><i style= {{ fontSize: 25 }} className="fab fa-github"></i></a></h5>
                </div>

                <div className="card mb-1 col-md-3 bg-white mx-left" style={{ width: "18rem" }}>
                    <img id="dayplanpic" src={DayPlanner} className="card-img" alt=" " style={{ height: "200px", width: "200px" }}/>
                    <h3 id="dayplanbox">Day Planner</h3>
                    <h5 className="card-title text-info" style={{ textAlign: "center" }}>GitHub: <a className="githubIcon" href="https://github.com/K-ai30/day-planner" target="_blank" rel="noopener noreferrer"><i style= {{ fontSize: 25 }} className="fab fa-github"></i></a></h5>
                </div>

                <div className="card mb-1 col-md-3 bg-white mx-left" style={{ width: "18rem" }}>
                    <img id="codequizpic" src={CodeQuiz} className="card-img" alt=" " style={{ height: "200px", width: "200px" }}/>
                    <h3 id="codequizbox">Code Quiz</h3>
                    <h5 className="card-title text-info" style={{ textAlign: "center" }}>GitHub: <a className="githubIcon" href="https://github.com/K-ai30/code-quiz" target="_blank" rel="noopener noreferrer"><i style= {{ fontSize: 25 }} className="fab fa-github"></i></a></h5>
                </div>

                <div className="card mb-1 col-md-3 bg-white mx-left" style={{ width: "18rem" }}>
                    <img id="pwgenpic" src={PasswordGenerator} className="card-img" alt=" " style={{ height: "200px", width: "200px" }}/>
                    <h3 id="pwgenbox">Password Generator</h3>
                    <h5 className="card-title text-info" style={{ textAlign: "center" }}>GitHub: <a className="githubIcon" href="https://github.com/K-ai30/password-generator" target="_blank" rel="noopener noreferrer"><i style= {{ fontSize: 25 }} className="fab fa-github"></i></a></h5>
                </div>
            </div>
            </div>
        )
    }
}