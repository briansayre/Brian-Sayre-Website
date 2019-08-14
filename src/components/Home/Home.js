import React from 'react';
//import firebase from 'firebase/app';

import './Home.css';
import me from "../../images/me.png";


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>

                <div className="hello">
                    <h1>Hello!</h1>
                </div>


                <p className="about-me">
                    My name is Brian Sayre. I am currently a student at Iowa State studying software engineering. 
                    You can see my resume, Github, and LinkedIn below.
                </p>

                <div className="image-background">
                    <img className="me-img" alt="" src={me} />
                </div>
                
                <div className="links">
                    <span className="link">
                        <a href="/BrianSayreResume.pdf" rel="noopener noreferrer" target="_blank">RESUME</a>
                    </span>
                    <span className="link">
                        <a href="https://www.github.com/briansayre" rel="noopener noreferrer" target="_blank">GITHUB</a>
                    </span>
                    <span className="link">
                        <a href="https://www.linkedin.com/in/brian-sayre" rel="noopener noreferrer" target="_blank">LINKEDIN</a>
                    </span>
                </div>
                
            </div>
        );
    }
}


export default Home;